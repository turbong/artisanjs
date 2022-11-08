const child = require('child_process')
const fs = require('fs')

function buildAll() {
  const json = JSON.parse(fs.readFileSync("./angular.json").toString());
  const errors = Object.keys(json.projects)
    .reduce((arr, project) => {
      const proj = json.projects[project];
      let build = proj.architect && proj.architect.build;
      const root = proj.root;
      if (build) {
        arr = arr.concat(...Object.keys(build.configurations || {})
          .map(config => ({ project, config, root }))
        );
      }
      return arr;
    }, [])
    // Execute `ng build` and collect errors.
    .reduce((err, exec) => {
      try {        
        console.log(`Building ${exec.project} (${exec.config}): ${exec.root}`);
        child.execSync(`ng build --project ${exec.project} --configuration ${exec.config}`, { stdio: "inherit" });        
        //console.log(`npm pack ${exec.project}`);
        child.execSync(`npm pack ${exec.project}`);
      }
      catch (error) {
        err.push({
          project: exec.project,
          config: exec.config,
          message: error.message
        });
      }
      console.log("\n");
      return err;
    }, []);

  // Conditionally log errors
  if (errors.length === 0)
    console.log("Completed");
  else {
    console.log("\n");
    errors.forEach(error => {
      console.error(`Building ${error.project} (${error.config}) failed:\n\t${error.message}`);
    });
  }
}

buildAll();

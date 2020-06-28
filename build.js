const child = require('child_process')
const fs = require('fs')

function buildAll() {
  const json = JSON.parse(fs.readFileSync("./angular.json").toString());
  const errors = Object.keys(json.projects)
    .reduce((arr, project) => {
      const proj = json.projects[project];
      let build = proj.architect && proj.architect.build;
      if (build) {
        arr = arr.concat(...Object.keys(build.configurations || {})
          .map(config => ({ project, config }))
        );
      }
      return arr;
    }, [])
    // Execute `ng build` and collect errors.
    .reduce((err, exec) => {
      try {
        console.log(`Building ${exec.project} (${exec.config}):`);
        child.execSync(`ng build --prod --project ${exec.project} --configuration ${exec.config}`, { stdio: "inherit" });
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
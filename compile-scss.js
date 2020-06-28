const path = require('path');
const bundle = require('scss-bundle');
const fs = require('fs');

const libraries = [{
  source: './projects/craftsjs/card/src/lib',
  name: '_craftsjs-card.theme.scss',
  dest: './dist/craftsjs/card/'
},
{
  source: './projects/craftsjs/alert/src/lib',
  name: '_craftsjs-alert.theme.scss',
  dest: './dist/craftsjs/alert/'
},
{
  source: './projects/craftsjs/core/src/lib/styles/grid',
  name: '_craftsjs-grid.theme.scss',
  dest: './dist/craftsjs/core/'
},
{
  source: './projects/craftsjs/menu-admin/src/lib',
  name: '_craftsjs-menu.theme.scss',
  dest: './dist/craftsjs/menu-admin/'
},
{
  source: './projects/craftsjs/notifier/src/lib',
  name: '_craftsjs-notifier.theme.scss',
  dest: './dist/craftsjs/notifier/'
}];

function bootstrap() {
  libraries.forEach(element => {
    const projectDirectory = path.resolve(element.source);
    const bundler = new bundle.Bundler(undefined, projectDirectory);
    bundler.bundle(element.name).then((bundle) => {
      fs.writeFile(path.resolve(element.dest, element.name), bundle.bundledContent, (err) => {
        if (err) {
          console.error(err.message);
        }
      })
    });
  });
}

bootstrap();

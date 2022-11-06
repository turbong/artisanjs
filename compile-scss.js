const path = require('path');
const bundle = require('scss-bundle');
const fs = require('fs');

const libraries = [{
  source: './projects/artisanjs/card/src/lib',
  name: '_artisanjs-card.theme.scss',
  dest: './dist/artisanjs/card/'
},
{
  source: './projects/artisanjs/alert/src/lib',
  name: '_artisanjs-alert.theme.scss',
  dest: './dist/artisanjs/alert/'
},
{
  source: './projects/artisanjs/core/src/lib/styles/grid',
  name: '_artisanjs-grid.theme.scss',
  dest: './dist/artisanjs/core/'
},
{
  source: './projects/artisanjs/menu-admin/src/lib',
  name: '_artisanjs-menu.theme.scss',
  dest: './dist/artisanjs/menu-admin/'
},
{
  source: './projects/artisanjs/notifier/src/lib',
  name: '_artisanjs-notifier.theme.scss',
  dest: './dist/artisanjs/notifier/'
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

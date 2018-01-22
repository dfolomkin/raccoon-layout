# Raccoon Blog | Layout

### Dependencies

First of all you need to install all packages according package.json.

Open command line and print `npm install`.

### Styles

Project uses style.css from "./css" folder but initially has only set of *.less files.

To build style.css print in command line `npm run build:css`.

### Scripts

Project has module structure and uses script-bundle.js from "./js" folder as entry point. Modules distribute between *.js files.

To build script-bundle.js print in command line `npm run build`.

These action will also build style.css (through style-bundle.js). Webpack is tuned to watch changes in .js and .less files and rebuild files automatically.

### Creator

[dmitry_folomkin@epam.com](mailto:dmitry_folomkin@epam.com)
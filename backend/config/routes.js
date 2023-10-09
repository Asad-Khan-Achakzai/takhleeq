// NPM module imports
const glob = require('glob');

// App dependencies
const constants = require('./constants');
const { winstonLog } = require('../modules/common/common');

module.exports = (app) => {
  winstonLog({}, constants.logLevel.info, 'Loading routes');
  const routePath = 'modules/**/*.routes.js';
  const version = `/api/${constants.apiVersion}`;
  glob.sync(routePath).forEach((file) => {
    require(`../${file}`)(app, version);
    winstonLog({}, constants.logLevel.info, `'${file}' is loaded`);
  });
};

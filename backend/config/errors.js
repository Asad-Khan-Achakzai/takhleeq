// NPM module imports
const glob = require("glob");

// App dependencies
const { winstonLog } = require("../modules/common/common");
const constants = require("./constants");

winstonLog({}, constants.logLevel.info, "Loading error messages");
const routePath = "modules/**/*.errors.json";
let errorObject;
glob.sync(routePath).forEach((file) => {
  errorObject = {
    ...require(`../${file}`),
  };
  winstonLog({}, constants.logLevel.info, `'${file}' is loaded`);
});

module.exports = errorObject;

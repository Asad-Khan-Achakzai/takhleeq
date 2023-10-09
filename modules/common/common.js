// App dependencies
const winston = require("../../config/winston");

/**
 * Utility function to log message using winston.
 * @param {Object} req - Request object
 * @param {String} level - winston log level [info | debug | error | warn]
 * @param {String} message - Message to be logged
 * @param {Object} additionalInfo - any additional Information that we want to log
 */
const winstonLog = (req, level, message, additionalInfo = {}) => {
  winston[level](` ${message}`);
};

module.exports = {
  winstonLog,
};

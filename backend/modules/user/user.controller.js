// Constant imports
const constants = require("../../config/constants");
const { responseMessages } = require("./user.constants");
const requestIp = require('request-ip')

// App dependencies
const { winstonLog } = require("../common/common");

/**
 * Controller function to login User
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns {Object}
 */
const loginUser = async (req, res, next) => {
  winstonLog(
    req,
    constants.logLevel.info,
    `login user body:  ${JSON.stringify(req.body)}`
  );
  console.log(req.socket.remoteAddress);
  // console.log('Clients ip ==> ',req.ip);
  var clientIp = requestIp.getClientIp(req)
  console.log('Clients ip ==> ',clientIp);

  let reqBody = req.body;

  let user = constants.dataStore.find(
    (user) =>
      user.username === reqBody.username && user.password === reqBody.password
  );

  res.status(200);
  return res.json({
    success: user ? 1 : 0,
    message: user
      ? responseMessages.loginUser.success
      : `${responseMessages.loginUser.failure}`,
    data: user,
  });
};

module.exports = {
  loginUser,
};

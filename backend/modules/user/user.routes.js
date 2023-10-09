// App dependencies
const errorMiddleware = require('../common/error-middleware');
const userMiddleware = require('./user.middleware');
const userController = require('./user.controller');

const resource = '/user';

module.exports = (app) => {

  /**
   * Route to login user.
   */
  app.post(
    `${resource}/login`,
    userMiddleware.validateLoginParams,
    errorMiddleware,
    userController.loginUser,
  );
};

 
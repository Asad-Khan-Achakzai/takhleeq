// Importing npm dependencies
const { body } = require("express-validator");

module.exports = {
  validateLoginParams: [
    body("username", "1001").exists(),
    body("password", "1003").exists(),
    body("password", "1004").isLength({ min: 8 }),
  ],
};

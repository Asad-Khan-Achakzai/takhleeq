module.exports = {
  apiVersion: "v1.0",
  oneOfErrors: "oneOfErrors",
  logLevel: {
    info: "info",
    error: "error",
    debug: "debug",
  },
  serverTimeout: 2 * 60 * 1000,
  maxRequestSize: "2mb",
  dataStore: [
    { username: "amir", password: "mypassword1" },
    { username: "imran", password: "mypassword2" },
  ],
};

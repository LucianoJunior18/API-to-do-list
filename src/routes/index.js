const tasks = require("./tasks.route");

module.exports = (app) => {
  app.use(tasks);
};

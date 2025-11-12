const express = require("express")
const tasks = require("./tasks.route")

module.exports = app => {
    app.use(
        express.json(),
        tasks,
    );
}
const Controller = require("./Controller.js")
const TasksServices = require("../services/TasksServices.js")

const tasksServices = new TasksServices();

class TaskController extends Controller {
    constructor() {
        super(tasksServices)
    }
}

module.exports = TaskController


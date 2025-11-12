const { Router } = require("express")
const TaskController = require("../controllers/Tasks.controller.js")
const convertDateBr = require("../middlewares/convertDateBr.js")

const taskController = new TaskController();

const router = Router();

router.get("/tasks", (req, res) => taskController.pegaTodos(req, res));
router.get("/tasks/:id", (req, res) => taskController.pegaUmPorId(req, res));
router.post("/tasks", convertDateBr, (req, res) => taskController.criaNovo(req, res));
router.put("/tasks/:id", convertDateBr, (req,res) => taskController.atualiza(req, res));
router.patch("/tasks/:id/status", (req,res) => taskController.atualizaStatus(req, res));
router.delete("/tasks/:id", (req,res) => taskController.exclui(req, res));




module.exports = router
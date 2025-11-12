const express = require("express")
const dotenv = require ("dotenv")
const tasksRoutes = require("./routes/tasks.route.js")

dotenv.config()


const app = express()

app.use(express.json())
app.use(tasksRoutes)

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.status(200).send({mensagem: "Boas vinda a API"})
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
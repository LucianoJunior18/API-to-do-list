const express = require("express")
const routes = require("./routes/index.js")


const app = express()

// 👇 ADICIONE O CORS AQUI (ANTES DAS ROTAS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
    if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
}

    next();
});

app.use(express.json()) //

routes(app)


module.exports = app;


const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");

const app = express();

// ✅ CORS (resolve seu erro do front)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// rotas centralizadas
routes(app);

module.exports = app;

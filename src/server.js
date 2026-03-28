const app = require("./app");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const { execSync } = require("child_process");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "Boas-vindas à API" });
});

async function iniciar() {
  try {
    if (process.env.DATABASE_URL) {
      console.log("Rodando migrations...");
      execSync("npm run db:migrate", { 
        stdio: "inherit",
        env: { ...process.env }
      });
      console.log("Migrations concluídas!");
    }
  } catch (err) {
    console.error("Erro nas migrations:", err.message);
  }

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

iniciar();
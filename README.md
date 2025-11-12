# 📝 API To-Do List (M2 PdA)

![Node.js](https://img.shields.io/badge/Node.js-v22.21.0-green)
![Express](https://img.shields.io/badge/Express-v5.1.0-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.37.7-purple)
![SQLite](https://img.shields.io/badge/SQLite-v3.51.0-orange)
![License](https://img.shields.io/badge/License-MIT-brightgreen)

Uma API RESTful para gerenciamento de tarefas, desenvolvida com **Node.js**, **Express** e **SQLite**, utilizando **Sequelize ORM**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript  
- [Express](https://expressjs.com/) — Framework web minimalista  
- [Sequelize](https://sequelize.org/) — ORM para bancos de dados SQL  
- [SQLite](https://www.sqlite.org/) — Banco de dados leve e embutido  
- [dotenv](https://www.npmjs.com/package/dotenv) — Gerenciamento de variáveis de ambiente  

---

## 📋 Pré-requisitos

Antes de iniciar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (vem com o Node.js)

---

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucianoJunior18/API-to-do-list.git
   cd API-To-Do-List-M2-PdA
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   PORT=3000
   ```

---

## ⚙️ Configuração do Banco de Dados

O projeto utiliza **SQLite** por padrão.  
Você pode rodar as migrations e seeders com os comandos:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

O arquivo do banco é criado automaticamente em:
```
src/database/database.sqlite
```

---

## ⚡ Execução do Projeto

### Rodar em modo desenvolvimento:
```bash
npm run dev
```

O servidor estará disponível em:  
👉 **http://localhost:3000**

---

## 📚 Endpoints da API

| Método | Rota | Descrição |
|:--:|:--|:--|
| GET | `/tasks` | Lista todas as tarefas |
| GET | `/tasks/:id` | Retorna uma tarefa específica |
| POST | `/tasks` | Cria uma nova tarefa |
| PUT | `/tasks/:id` | Atualiza uma tarefa existente |
| PATCH | `/tasks/:id/status` | Atualiza apenas o status de uma tarefa |
| DELETE | `/tasks/:id` | Remove uma tarefa |
| DELETE | `/tasks` | Remove todas as tarefas |

---

## 🧩 Estrutura do Projeto

```
src/
 ├── config/        # Configuração do Sequelize
 ├── controllers/   # Lógica dos endpoints
 ├── database/      # Arquivo SQLite
 ├── migrations/    # Estrutura do banco de dados
 ├── models/        # Definição das entidades (Sequelize)
 ├── routes/        # Definição das rotas da API
 ├── seeders/       # Dados iniciais (exemplo)
 ├── services/      # Lógica de negócios (camada de serviço)
 └── server.js      # Inicialização do servidor
```

---

## 🧠 Modelo de Dados

**Task (Tarefa)**
```json
{
  "id": 1,
  "title": "Estudar Node.js",
  "description": "Praticar criação de APIs com Express",
  "status": "pending" ou "in_progress", "done",
  "dueDate": "11/11/2025 T20:17:53.678Z",
  "createdAt": "2025-11-11T20:17:53.678Z",
  "updatedAt": "2025-11-11T20:17:53.678Z"
}
```
---

## 👤 Autor

**Luciano Junior**  
💼 Projeto desenvolvido para o curso *PdA - Módulo 2*  
🔗 [GitHub](https://github.com/LucianoJunior18)


Feito com 💚  / Projeto PdA - Módulo 2

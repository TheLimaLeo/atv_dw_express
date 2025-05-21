import express from "express";

const app = express(); 

import ProdutosController from "./controllers/produtosController.js";
import CadastroController from "./controllers/cadastroController.js";
import connection from "./config/sequelize-config.js";

app.set("view engine", "ejs");

app.use("/", ProdutosController);
app.use("/", CadastroController);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

// 404
app.use((req, res) => {
  res.status(404).render("404");
});

connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
  console.log(error)
});



// Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS 
  loja;`).then(() => {
  console.log("O banco de dados está criado.")
  }).catch((error) => {
  console.log(error)
  })

app.listen(5000, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
    console.log("Acesse http://localhost:5000");
  }

});

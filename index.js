
import express from "express";

const app = express(); 

import ProdutosController from "./controllers/produtosController.js";


app.set("view engine", "ejs");

app.use("/", ProdutosController);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
    console.log("Acesse http://localhost:5000");
  }
});

import express from "express";
import Cadastro from "../models/cadastro.js";
const router = express.Router();

//rota de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    title: "Cadastro",
  });
});

// Rota para criar um novo cadastro
router.post("/cadastro", async (req, res) => {
  try {
    const { nome, email, telefone, endereco } = req.body;
    await Cadastro.create({ nome, email, telefone, endereco });
    res.redirect("/cadastro");
  } catch (error) {
    res.status(500).send("Erro ao criar cadastro: " + error.message);
  }
});

// Rota para listar todos os cadastros
router.get("/cadastros", async (req, res) => {
  try {
    const cadastros = await Cadastro.findAll();
    res.render("cadastros", { title: "Lista de Cadastros", cadastros });
  } catch (error) {
    res.status(500).send("Erro ao listar cadastros: " + error.message);
  }
});

// Rota para atualizar um cadastro
router.put("/cadastro/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, telefone, endereco } = req.body;
    await Cadastro.update({ nome, email, telefone, endereco }, { where: { id } });
    res.send("Cadastro atualizado com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao atualizar cadastro: " + error.message);
  }
});

// Rota para excluir um cadastro
router.delete("/cadastro/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Cadastro.destroy({ where: { id } });
    res.send("Cadastro excluído com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao excluir cadastro: " + error.message);
  }
});

export default router;
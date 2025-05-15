import express from "express";
const router = express.Router();

//rota de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    title: "Cadastro",
  });
});

export default router;
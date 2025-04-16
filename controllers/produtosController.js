import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
  const produtos = [
    {
      imagem: "galaxy_s24.jpg",
      nome: "Samsung Galaxy S24",
      preco: 5200,
      categoria: "Smartphones",
    },
    {
      imagem: "iphone.jpg",
      nome: "Iphone 16",
      preco: 8000,
      categoria: "Smartphones",
    },

    {
      imagem: "ipad.jpg",
      nome: "Ipad Air",
      preco: 7500,
      categoria: "Tablets",
    },
    {
      imagem: "galaxybook.jpg",
      nome: "Galaxy Book 4",
      preco: 3200,
      categoria: "Notebooks",
    },
    {
      imagem: "odyssey.jpg",
      nome: "Galaxy Odyssey",
      preco: 650,
      categoria: "Monitores",
    },
    {
      imagem: "macbook.jpg",
      nome: "Macbook Pro",
      preco: 12000,
      categoria: "Notebooks",
    },
    {
      imagem: "imgs/dell_inspiron.jpg",
      nome: "Dell Inspiron",
      preco: 4000,
      categoria: "Notebooks",
    },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

export default router;

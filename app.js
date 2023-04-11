const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const pathName = require("path");

const productsPath = pathName.join(__dirname, "products.json");

const getProducts = async () => {
  const data = await fs.readFile(productsPath);
  const products = JSON.parse(data);
  console.log(products);
  return products;
};

const app = express();

app.use(cors());

app.get("/products", async (req, res, next) => {
  const products = await getProducts();

  res.json(products);
});

app.listen(PORT, () => console.log("server"));

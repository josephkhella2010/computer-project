const express = require("express");
const router = express.Router();
const computerArr = require("../ComputerArray/computerArr");

computerArr;
router.get("/product", (req, res) => {
  res.json(computerArr);
});
/* router.get("/product/:id", (req, res) => {
  const ProductId = parseInt(req.params.id);
  const product = computerArr.find((item) => item.id === ProductId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ error: "product not find" });
  }
}); */
module.exports = router;

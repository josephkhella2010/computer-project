const express = require("express");
const router = express.Router();
const computerArr = require("../ComputerArray/computerArr");
router.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const SingleProduct = computerArr.find((item) => item.id === productId);
  if (SingleProduct) {
    res.json(SingleProduct);
  } else {
    res.status(404).send({ error: "not found" });
  }
});
module.exports = router;

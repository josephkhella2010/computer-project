const express = require("express");
const cors = require("cors");
const app = express();
const Port = 5000;
const productRoute = require("./routes/getComputerData");
const singleProductRoute = require("./routes/getSingleComputerData");

// Use the imported route
app.use(express.json());
app;
app.use(cors());
app.use(productRoute);
app.use(singleProductRoute);
app.listen(Port, () => {
  console.log(`Server running at http://localhost:${Port}`);
});

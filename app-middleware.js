const express = require("express");
const app = express();
const { products } = require("./data");
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");

app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h3>Home</h3>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h3>About</h3>");
});

app.get("/api/products", authorize, (req, res) => {
  res.status(200).json(products);
});

app.post("/api/products", (req, res) => {
  res.status(200).json({ success: true, data: "User created successfully" });
});

app.get("*", (req, res) => {
  res.status(404).send("<h3>Page Not Found.</h3>");
});

app.listen(5000, () => {
  console.log("Server is listening on PORT: 5000");
});

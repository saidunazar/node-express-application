const express = require("express");
const { products } = require("./data");
const app = express();

//To load the static content from the pulic folder. We can also use res.writeFile to send back from the header
// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send('<h1>Home</h1><div><a href="/api/products">View Product</a></div>');
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const searchedProduct = products.filter((product) => {
    return product.id === Number(productID);
  });
  if (searchedProduct.length > 0) {
    res.status(200).json(searchedProduct);
  } else {
    res.status(404).send("Product not found");
  }
});

app.get("/api/v1/query", (req, res) => {
  const { id, name } = req.query;
  const productsCopy = [...products];
  const sortedProducts = productsCopy.filter((product) => {
    if (product.id === Number(id) && product.name === name) {
      return product;
    }
  });
  if (sortedProducts.length > 0) res.status(200).json(sortedProducts);
  else res.status(404).send("Product not found");
});

app.all("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(5000, () => {
  console.log("Server is listening on PORT 5000");
});

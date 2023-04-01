const express = require("express");
const router = express.Router();
const { readFileSync } = require("fs");

//Custom middleware
const authorize = require("../middleware/authorize");

//Import Home page
const home = readFileSync("./public/home.html", "utf8");

router.get("/home", (req, res) => {
  res.status(200).send(home);
});

router.get("*", (req, res) => {
  res.status(404).send("<h3>Page Not Found.</h3>");
});

module.exports = router;

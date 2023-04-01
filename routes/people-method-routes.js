const express = require("express");
const router = express.Router();

//Import people controller
const {
  getPeople,
  addPeople,
  updatePeople,
  deletePeople,
} = require("../controllers/people");

// Get Request
router.get("/people", getPeople);

//POST Request
router.post("/add-people", addPeople);

//PUT Request
router.put("/update-people/:id", updatePeople);

//Delete Request
router.delete("/delete-people/:id", deletePeople);

module.exports = router;

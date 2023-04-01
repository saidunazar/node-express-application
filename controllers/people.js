//Stub Data
const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json(people);
};

const addPeople = (req, res) => {
  const { name } = req.body;
  if (name.toLowerCase() === "saidu")
    res.status(201).json({ success: true, data: "Valid User" });
  else res.status(404).json({ success: false, data: "Invalid User" });
};

const updatePeople = (req, res) => {
  const newName = req.body.name;
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).json({ success: false, data: "User not found" });
  } else {
    const updatedPeopleList = people.map((person) => {
      if (person.id === Number(id)) {
        return { ...person, name: newName };
      } else {
        return person;
      }
    });
    res.status(200).json({ success: true, data: updatedPeopleList });
  }
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).json({ success: false, data: "User not found" });
  } else {
    const updatedPeopleList = people.filter(
      (person) => person.id !== Number(id)
    );
    res
      .status(200)
      .json({ success: true, data: "User Deleted", people: updatedPeopleList });
  }
};

module.exports = {
  getPeople,
  addPeople,
  updatePeople,
  deletePeople,
};

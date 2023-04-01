//Import Express Framework
const express = require("express");
const app = express();

//Custom middleware
const logger = require("./middleware/logger");

//Import routes
const primaryRoutes = require("./routes/primary-routes");
const peopleRoute = require("./routes/people-method-routes");

//Load html page
app.use("/", express.static("./public"));

//Build in express middleware functions
app.use(express.json());
app.use(logger);

app.use("/", primaryRoutes);
app.use("/api", peopleRoute);

//Serve and listen to Server on port 5000
app.listen(5000, () => {
  console.log("Server is listening on PORT: 5000");
});

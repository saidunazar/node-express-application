const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "saidu") {
    req.user = { name: "saidu", email: "dodod@dodod.com" };
    next();
  } else {
    res.status(401).send("User is not authorized");
  }
};

module.exports = authorize;

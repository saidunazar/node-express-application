const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  console.log(`URL: ${url}, METHOD: ${method}`);
  next();
};

module.exports = logger;

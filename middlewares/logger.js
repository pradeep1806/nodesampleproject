// @desc Logs request to console
const logger = (req, res, next) => {
  req.hello = "Hello Pradeep";
  var requestUrl = `${req.method} ${req.protocol}:${req.get("host")}${
    req.originalUrl
  }`;
  console.log(requestUrl);
  next();
};

module.exports = logger;

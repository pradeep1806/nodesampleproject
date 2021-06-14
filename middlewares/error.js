const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  //Log to console for the developer.

  //Mongoose Bad object error

  //CastError : Type cast error.When id does not match
  if (err.name == "CastError") {
    const message = `No data with id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  //Duplicate key error
  if (err.code == 11000) {
    const message = `Duplicate Field Value Enterer`;
    error = new ErrorResponse(message, 400);
  }

  //Validation error
  if (err.name == "ValidationError") {
    const message = Object.values(err.errors).map((val) => value.message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(err.statusCode || 500)
    .json({ sucess: false, error: err.message || "Server Error" });
};
module.exports = errorHandler;

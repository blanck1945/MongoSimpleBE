const ApiError = require("./ApiError");

const apiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(505).json("Error 505: Algo fue mal");
};

module.exports = apiErrorHandler;

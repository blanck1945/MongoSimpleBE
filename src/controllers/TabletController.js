const ApiError = require("../middlewares/ApiError");

const validCode = (code) => {
  const formatedCode = parseInt(code);
  if (formatedCode >= 500 && formatedCode <= 600) {
    return {
      error: true,
      formatedCode,
    };
  }

  return {
    error: false,
  };
};

module.exports = {
  async index(req, res, next) {
    const code = req.params.code;
    const { error, formatedCode } = validCode(code);

    if (error) {
      next(
        ApiError.customError(formatedCode, {
          message: "Internal Server Error",
          isError: true,
          status: formatedCode,
        })
      );
    } else {
      res.json({
        msg: "OK",
      });
    }
  },
};

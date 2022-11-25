export function validateRegisterData(req, res, next) {
  const validate = {
    ...req.body,
  };

  var regularExpression = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  if (!validate.password >= !regularExpression.test(validate.password)) {
    next();
  } else {
    return res.json({
      message: "password is not valid",
    });
  }
}

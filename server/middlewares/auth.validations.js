export function validateRegisterData(req, res, next) {
  console.log("validateRegisterData");
  const validate = {
    ...req.body,
  };

  var regularExpression = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  console.log(validate.password);

  if (!validate.password >= !regularExpression.test(validate.password)) {
    console.log("validate");
    next();
  } else {
    return res.json({
      message: "password is not valid",
    });
  }
}

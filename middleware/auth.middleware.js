const User = require("../models/user.model.js");

module.exports.requiredAuth = async (req, res, next) => {
  if (!req.signedCookies.userId) {
    res.redirect("/auth/login");
    return;
  }

  let user = await User.findById(req.signedCookies.userId);

  if (!user) {
    res.redirect("/auth/login");
    return;
  }

  next();
};

const jwt = require("jsonwebtoken");
const userModel = require("../models/user_model");
exports.isAuth = async (req, res, next) => {
  try {
    // get token from request header
    const token = req.header("Authorization");
    // verify token to get user._id
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // search in db user (token , id)
    const user = await userModel.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    //if !found => user unauth
    if (!user) throw new Error("unauth");
    //continue
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    console.log(e);
    res.send({
      sucess: false,
      error: e.message,
    });
  }
};
exports.authRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.send(
        `Role (${req.user.role}) is not allowed to access this resource`
      );
    }
    next();
  };
};

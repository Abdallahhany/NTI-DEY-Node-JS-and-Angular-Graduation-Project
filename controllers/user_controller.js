const UserModel = require("../models/user_model");

class User {
  static getAllUsers = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).send({ success: true, users });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static getSingleUser = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);

      if (!user) {
        return res.send({ msg: "User with that id not founds" });
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static registerUser = async (req, res) => {
    try {
      const { userName, email, password } = req.body;
      const checkUser = await UserModel.findOne({ email });

      if (checkUser) {
        return res.send({
          success: false,
          msg: "User with That Email Already Exists",
        });
      }

      const user = await UserModel.create({
        userName,
        email,
        password,
      });
      res.send({ success: true, user, msg: "user register successfully" });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static loginUser = async (req, res) => {
    try {
      const { userName, password } = req.body;
      if (!userName || !password)
        return res.send("Please enter email & password");
      const user = await UserModel.findOne({ userName });
      if (!user) return res.send("Invalid username or Password");
      const isPasswordMatched = await user.comparePassword(password);
      if (!isPasswordMatched) return res.send("Invalid username or Password");
      const token = await user.getJwtToken();
      res.send({
        success: true,
        msg: "logged in",
        data: { user, token },
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static updatePassword = async (req, res) => {
    try {
      const user = await UserModel.findById(req.user.id);

      // Check previous user password
      const isMatched = await user.comparePassword(req.body.oldPassword);
      if (!isMatched) {
        return res.send("Old password is incorrect");
      }

      user.password = req.body.newPassword;
      await user.save();

      const token = await user.getJwtToken();
      res.send({
        success: true,
        msg: "password updated successfully",
        data: { user, token },
      });
    } catch (e) {
      console.log(e);
      res.send({ success: false, err: e.message });
    }
  };
  static updateProfile = async (req, res) => {
    try {
      const newUserData = {
        userName: req.body.userName,
        email: req.body.email,
      };

      const user = await UserModel.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static logout = async (req, res) => {
    try {
      req.user.tokens.splice((tok) => tok.token == req.token);
      await req.user.save();
      res.send({
        apiStatus: true,
        message: "logged out",
        data: req.user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static updateUser = async (req, res) => {
    try {
      const newUserData = {
        role: req.body.role,
      };
      const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        newUserData,
        {
          new: true,
          useFindAndModify: false,
        }
      );

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static deleteUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.send(`User with id: ${req.params.id} not found`);
    }
    await user.remove();
    res.status(200).json({
      success: true,
    });
  };
  static getMe = async (req, res) => {
    try {
      const user = await UserModel.findById(req.user);

      if (!user) {
        return res.send({ msg: "User with that id not found" });
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
}

module.exports = User;

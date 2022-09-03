const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user_controller");
const { isAuth, authRoles } = require("../middlewares/auth_middleware");
const NotFound = require("../controllers/error");

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/logout", isAuth, userController.logout);
userRouter.get("/me", isAuth, userController.getMe);
userRouter.put("/password/update", isAuth, userController.updatePassword);
userRouter.put("/me/update", isAuth, userController.updateProfile);

// Admin Routes
userRouter.get(
  "/admin/users",
  isAuth,
  authRoles("admin"),
  userController.getAllUsers
);
userRouter.get(
  "/admin/single/:id",
  isAuth,
  authRoles("admin"),
  userController.getSingleUser
);

userRouter.put(
  "/admin/user/:id",
  isAuth,
  authRoles("admin"),
  userController.updateUserRole
);
userRouter.delete(
  "/admin/user/:id",
  isAuth,
  authRoles("admin"),
  userController.deleteUser
);

userRouter.all("*", NotFound.notFoundPage);

module.exports = userRouter;

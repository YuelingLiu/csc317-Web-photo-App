const { text } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../config/database");
const UserModel = require("../models/Users");
var UserError = require("../helpers/error/UserError");
var bcrypt = require("bcrypt");
const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");

const { registerValidator } = require("../middleware/validation");
const { emailExists } = require("../models/Users");

router.post("/register", registerValidator, (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let cpassword = req.body.cpassword;

  UserModel.usernameExists(username)
    .then((userDoesNameExist) => {
      if (userDoesNameExist) {
        throw new UserError(
          "Registration Failed: USername alread exists",
          "/registration",
          200
        );
      } else {
        return UserModel.emailExists(email);
      }
    })
    .then((emailDoesExist) => {
      if (emailDoesExist) {
        throw new UserError(
          "Registration Failed: Email alread exists",
          "/registration",
          200
        );
      } else {
        return UserModel.create(username, password, email);
      }
    })
    .then((createdUserId) => {
      if (createdUserId < 0) {
        throw new UserError(
          "Server  Error, user could not be created",
          "/registration",
          500
        );
      } else {
        successPrint("User.js --> User was created!!");
        req.flash("success", "User account has been made!");
        res.redirect("/login");
      }
    })
    .catch((err) => {
      console.error("user could not made", err);
      if (err instanceof UserError) {
        errorPrint(err.getMessage());
        req.flash("error", err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL);
      } else {
        next(err);
      }
    });
});

router.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  UserModel.authenticate(username, password)
    .then((loggedUserId) => {
      if (loggedUserId > 0) {
        console.log(`User ${username} is lognned in`);
        req.session.username = username;
        req.session.userId = loggedUserId;
        res.locals.logged = true;
        req.flash("success", "You have been successfully logged in!!!");
        res.redirect("/");
      } else {
        throw new UserError("Invalid username and/or password!", "/login", 200);
      }
    })
    .catch((err) => {
      console.error("User login failed");
      if (err instanceof UserError) {
        console.error(err.getMessage());
        req.flash("error", err.getMessage());
        res.status(err.getStatus());
        res.redirect("/login");
      } else {
        next(err);
      }
    });
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      errorPrint("session could not be destroyed.");
      next(err);
    } else {
      successPrint("session was destroed");
      res.clearCookie("csid");
      res.json({ status: "ok", message: "user is logged out" });
      res.redirect("/");
    }
  });
});
module.exports = router;

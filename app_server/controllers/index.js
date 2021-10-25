//Name: Janvi Sutariya
//Student Id: 301171524
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage =
  exports.ProcessRegisterPage =
  exports.DisplayRegisterPage =
  exports.ProcessLoginPage =
  exports.DisplayLoginPage =
  exports.DisplayContactPage =
  exports.DisplayProjectsPage =
  exports.DisplayServicesPage =
  exports.DisplayAboutPage =
  exports.DisplayHomePage =
    void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../models/user"));
const Util_1 = require("../util");
function DisplayHomePage(req, res, next) {
  res.render("index", {
    title: "Home",
    page: "home",
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
  res.render("index", {
    title: "About",
    page: "about",
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicesPage(req, res, next) {
  res.render("index", {
    title: "Services",
    page: "services",
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
  res.render("index", {
    title: "Projects",
    page: "projects",
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
  res.render("index", {
    title: "Contact",
    page: "contact",
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
  if (!req.user) {
    return res.render("index", {
      title: "Login",
      page: "login",
      messages: req.flash("loginMessage"),
      displayName: Util_1.UserDisplayName(req),
    });
  }
  return res.redirect("/contacts");
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
  passport_1.default.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.redirect("/contacts");
    });
  })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
  if (!req.user) {
    return res.render("index", {
      title: "Register",
      page: "register",
      messages: req.flash("registerMessage"),
      displayName: Util_1.UserDisplayName(req),
    });
  }
  return res.redirect("/contacts");
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
  let newUser = new user_1.default({
    username: req.body.username,
    emailAddress: req.body.emailAddress,
    displayName: req.body.FirstName + " " + req.body.LastName,
  });
  user_1.default.register(newUser, req.body.password, (err) => {
    if (err) {
      console.error("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.error("Error: User Already Exists");
      }
      req.flash("registerMessage", "Registeration Error");
      return res.redirect("/register");
    }
    return passport_1.default.authenticate("local")(req, res, () => {
      return res.redirect("/contacts");
    });
  });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
  req.logout();
  res.redirect("/login");
}
exports.ProcessLogoutPage = ProcessLogoutPage;

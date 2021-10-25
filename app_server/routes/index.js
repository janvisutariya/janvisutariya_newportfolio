//Name: Janvi Sutariya
//Student Id: 301171524
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../controllers/index");
exports.default = router;
router.get("/", index_1.DisplayHomePage);
router.get("/home", index_1.DisplayHomePage);
router.get("/about", index_1.DisplayAboutPage);
router.get("/services", index_1.DisplayServicesPage);
router.get("/projects", index_1.DisplayProjectsPage);
router.get("/contact", index_1.DisplayContactPage);
router.get("/login", index_1.DisplayLoginPage);
router.post("/login", index_1.ProcessLoginPage);
router.get("/register", index_1.DisplayRegisterPage);
router.post("/register", index_1.ProcessRegisterPage);
router.get("/logout", index_1.ProcessLogoutPage);


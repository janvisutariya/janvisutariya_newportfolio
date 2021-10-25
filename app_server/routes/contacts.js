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
exports.default = router;
const contacts_1 = require("../controllers/contacts");
const Util_1 = require("../util");
router.get("/",  contacts_1.DisplayContactsListPage);
router.get("/add", Util_1.AuthGuard, contacts_1.DisplayAddPage);
router.get("/edit/:id", Util_1.AuthGuard, contacts_1.DisplayEditPage);
router.post("/add", Util_1.AuthGuard, contacts_1.ProcessAddPage);
router.post("/edit/:id", Util_1.AuthGuard, contacts_1.ProcessEditPage);
router.get("/delete/:id", Util_1.AuthGuard, contacts_1.ProcessDeletePage);


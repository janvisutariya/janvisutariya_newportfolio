//Name: Janvi Sutariya
//Student Id: 301171524
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactsSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    field: String,
    ethnicity: String,
    century: String
  },
  {
    collection: "contacts",
  }
);
const Model = mongoose_1.default.model("contacts", ContactsSchema);
exports.default = Model;


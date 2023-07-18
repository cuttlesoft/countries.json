"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCountry;
function getCountry(code) {
  return require("../data/".concat(code, ".json"));
}
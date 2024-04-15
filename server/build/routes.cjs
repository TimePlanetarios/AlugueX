"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes.ts
var routes_exports = {};
__export(routes_exports, {
  createPropertie: () => createPropertie
});
module.exports = __toCommonJS(routes_exports);

// src/CreatePropertieServer.ts
var CreatePropertieServer = class {
  static create({ name, description, available = true }) {
    console.log(name, description, available);
  }
};

// src/routes.ts
function createPropertie(req, res) {
  CreatePropertieServer.create({
    name: "Casa de Praia",
    description: "Casa grande, localizada de frente ao mar! Ideal para suas f\xE9rias."
  });
  return res.send();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPropertie
});

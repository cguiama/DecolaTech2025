"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = __importDefault(require("./interfaces/interfaces"));
const p = new interfaces_1.default(1, "Pessoinha");
console.log(p.sayHello());

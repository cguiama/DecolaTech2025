"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(x, y) {
    return x + y;
}
function calculadora(x, y, operacao) {
    if (operacao === '+') {
        return x + y;
    }
    else if (operacao === '-') {
        return x - y;
    }
    else if (operacao === '*') {
        return x * y;
    }
    else if (operacao === '/') {
        return x / y;
    }
    else {
        return 0;
    }
}
function callToPhone(phone) {
    return phone;
}
function asyncFunction(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return 'teste';
    });
}

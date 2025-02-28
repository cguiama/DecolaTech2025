"use strict";
const bot = {
    id: 1,
    name: 'robocop',
    sayHello() {
        return 'Hello';
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return 'Hello';
    }
}
const p = new Pessoa(1, "Pessoinha");
console.log(p.sayHello());

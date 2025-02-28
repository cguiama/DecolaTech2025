"use strict";
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Ataque com ${this.strength} pontos de força`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
    castSpell() {
        console.log(`Lançando feitiço com ${this.magicPoints} pontos de habilidade`);
    }
}
const p1 = new Character("Goku", 10, 10);
const p2 = new Magician("Babidi", 2, 8, 10);
p1.attack();

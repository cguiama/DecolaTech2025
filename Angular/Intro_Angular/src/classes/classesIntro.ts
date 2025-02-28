//classes

//modificadores de acesso

/*
public: acessível por todos;
private: acessível apenas pela própria classe;
protected: acessível pela própria classe e por classes derivadas;
readonly: apenas leitura;
*/
class Character{
    protected name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    public attack(): void{
        console.log(`Ataque com ${this.strength} pontos de força`);
    }
}

/*
Character é a classe base e Magician é a classe derivada.
Character: superclass;
Magician: subclass.

Ao declarar uma subclasse e extender a super classe, precisamos definir o super no construtor.
super() é uma referência que invoca o construtor da classe base.
constructor(){
    super();
    }
 */

class Magician extends Character{
    magicPoints: number;
    constructor(name: string,
                strength: number,
                skill: number,
                magicPoints: number
    ){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }

    public castSpell(): void{
        console.log(`Lançando feitiço com ${this.magicPoints} pontos de habilidade`);
    }
}

const p1 = new Character("Goku", 10, 10);
const p2 = new Magician("Babidi", 2, 8, 10);
p1.attack();
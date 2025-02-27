//interfaces (type vs interface)
// typos são mais flexiveis do que as interfaces, em geral, quando trabalhamos com objetos, é mais comum utilizar interfaces
// quando trabalhamos com tipos primitivos, é mais comum utilizar types
// ambos podem utilizar multi tipos e temos uma propriedade de leitura

//declarando uma interface

type robot = {
    id: number | string;
    name: string;
}

interface Robot{
    id: number;
    readonly name: string;
    //ao aplicar somente leitura, o valor é declarado na criação do objeto e não pode ser alterado
    sayHello() : string;
    //se definir um método na interface, é necessário implementar na classe que a implementa mas também definir o tipo.
}

const bot: Robot = {
    id: 1,
    name: 'robocop',
    sayHello() : string {
        return 'Hello';
    }
}

class Pessoa implements Robot {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello() : string {
        return 'Hello';
    }
}

const p = new Pessoa(1,"Pessoinha")
console.log(p.sayHello());
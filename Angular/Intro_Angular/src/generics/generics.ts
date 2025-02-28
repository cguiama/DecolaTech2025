//trabalhar com generics é muito interessante pois podemos definir o tipo somente na chamada da função.

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["Vegeta","Goku"], ["Piccolo"]);

console.log(numArray);
console.log(stgArray);

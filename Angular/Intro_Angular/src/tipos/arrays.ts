//Duas maneiras de declarar um array (vetor).

let dados: string[] = ['Clark Kent', 'Superman'];
let dados2: Array<string> = ['Clark Kent', 'Superman'];

//Em TS podemos ter arrays multi types, ou seja, um array que aceita até dois tipos de dado.
let infos: (string | number)[] = ['Clark Kent', 30];
let infos2: Array<string | number> = ['Clark Kent', 30];

//Tuplas é um array que aceita um dado e ele deve ser utilizado exatamente na ordem.
// Para definir uma tupla, usamos o operador [] diretamente na declaração, seu tamanho é fixo.
let info: [string, number, number] = ['Clark Kent', 30, 19];
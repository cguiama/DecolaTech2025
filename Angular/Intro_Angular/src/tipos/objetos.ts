//Objeto sem previsibilidade desta forma, os dados podem ser alterados sem tipagem.
let produto:object = {
    id: 1,
    nome: 'Camiseta',
    preco: 39.90
}

//Objeto com forma e tipagem definida.
type Produto = {
    id: number;
    nome: string;
    preco: number;
}

let meuProduto:Produto = {
    id: 1,
    nome: 'Camiseta',
    preco: 39.90
}

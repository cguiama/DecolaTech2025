//declarando desta forma, tanto os valores de entrada quanto o retorno são do tipo number (ou qualquer tipo que for definido)
//é assim que definimos o tipo de retorno de uma função
function addNumber(x: number, y: number): number {
    return x + y;
}

function calculadora(x: number, y: number, operacao: string): number {
    if (operacao === '+') {
        return x + y;
    } else if (operacao === '-') {
        return x - y;
    } else if (operacao === '*') {
        return x * y;
    } else if (operacao === '/') {
        return x / y;
    } else {
        return 0;
    }
}

//Funções podem ser multi tipo tanto para retorno quanto para os parâmetros

function callToPhone(phone: number | string): number | string {
    return phone;
}

//funções async também podem ser multi tipos e sempre é importante declarar a promisse de retorno.

async function asyncFunction(id: number) : Promise<string> {
    return 'teste';
}
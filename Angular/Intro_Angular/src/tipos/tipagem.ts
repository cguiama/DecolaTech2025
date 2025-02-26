//tipagem
//boolean, number, string
// variaveis também podem ser declaradas por inferência, porém aceitará outros tipos. (let desligado = true;)
let ligado: boolean = false;
let nome: string = 'Clark Kent';
let idade: number = 30;
let altura: number = 1.90;

//null
//undefined
//null e undefined devem ser definidos e só permitirá esses valores, pode ser util dependendo do tipo de utilização.
let nulo: null = null;

let retorno:void;
// um exemplo de uso de void é quando por exemplo a função não retorna nada. Um exemplo é uma execução de uma query que não retornará nada.
let retornoView:any = "Qualquer coisa";

//Any é utilizado quando uma função pode retornar qualquer coisa, porém não é recomendado seu uso.

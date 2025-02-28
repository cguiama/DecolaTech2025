/*
Decorators são uma tipo especial de declaração que pode ser anexada a uma declaração de classe, método, acessor, propriedade ou parâmetro.
Os decorators usam a forma @expression, onde expression deve avaliar uma função que será chamada em tempo de execução com informações sobre a declaração decorada.

 É importante lembrar de configurar o "experimentalDecorators" como true no arquivo tsconfig.json

 Funciona similar a uma annotation em Java? Injeta uma propriedade.
 */

function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario{}

// Decorators de classe
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    }
}

/*
@apiVersion('1.0.0')
class API{}

const api = new API();
console.log(api.__version);

- Irá injetar a propriedade __version na classe API
*/

// Decorators de atributos

function minLength(length: number) {
    return(target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length){
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        }
        Object.defineProperty(target, key,{
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLength(6)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const pi = new Api('Guirerume');
console.log(pi.name);

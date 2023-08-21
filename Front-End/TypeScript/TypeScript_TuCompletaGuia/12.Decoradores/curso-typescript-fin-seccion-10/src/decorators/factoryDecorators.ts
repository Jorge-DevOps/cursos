
function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: Boolean = false): Function => {
    if (print) {
        return printToConsole
    } else {
        return () => { };
    }
}

function checkValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (id: number) {
            if (id < 0 || id > 150) {
                return console.error("Invalid pokemon id");
            } else {
                return originalMethod(id);
            }
        }
    }
}

@printToConsoleConditional(true)
export class Pokemon {
    public publicApi: string = "https://pokeapi.co/";

    constructor(public name: string) { }

    @checkValidPokemonId()
    savePokemon(id: number) {
        console.log(`Pokemon ${this.name} saved with id ${id}`);
    }
}


(() => {
    abstract class Mutante {
        constructor(public nombre: string, public apellido: string) { }

    }

    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }

    const wolverine: Mutante = new Xmen("Logan", "Wolverine");
    const magneto: Mutante = new villian("Magneto", "Magnus");

    console.log(wolverine);
    console.log();

    const printName = (character: Mutante) => console.log(character.nombre);
    printName(wolverine);

})()
"use strict";
(() => {
    class Mutante {
        constructor() {
            this.age = 1;
            this.nombre = "";
            this.poder = "";
        }
        mutantPower(id) {
            return 'Mutant Power';
        }
    }
})();
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
    var volvo = {
        llantas: 4,
        modelo: "sedan",
        seguro: true
    };
})();
//# sourceMappingURL=main.js.map
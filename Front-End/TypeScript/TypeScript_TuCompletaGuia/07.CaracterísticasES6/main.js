"use strict";
(() => {
    const ironman = {
        nombre: 'Tony Stark',
        clave: 'Ironman',
        poder: 'Dinero'
    };
    const CapitanAmerica = {
        nombre: 'Steve Rogers',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    const Thor = {
        nombre: 'Thor',
        clave: 'Thor',
        poder: 'Dios'
    };
    const avengers = [ironman, CapitanAmerica, Thor];
    for (const avenger of avengers) {
        console.log(avenger.nombre);
        console.log(avenger.clave);
        console.log(avenger.poder);
    }
})();
(() => {
    // extraer( avenger );
    const avengers = ['Thor', 'Ironman', 'Spiderman'];
    // const [ loki, hombre, arana ] = avengers;
    // console.log( loki );
    // console.log( hombre );
    // console.log( arana );
    const extraerArr = ([thor, ironman, spiderman]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    // extraerArr(avengers);
})();
(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    // const { nombre, clave, poder } = avenger;
    // console.log( nombre );
    // console.log( clave );
    // console.log( poder );
    const extraer = ({ nombre, poder }) => {
        // const { nombre, poder } = avenger;
        console.log(nombre);
        console.log(poder);
    };
});
(() => {
    let nombre = 'Ricardo Tapia';
    let edad = 23;
    const PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    console.log(PERSONAJE);
    // ES6
    const PERSONAJE2 = {
        nombre,
        edad
    };
    console.log(PERSONAJE2);
    const getAvenger = () => {
        const nombre = 'Tony';
        const edad = 45;
        return {
            nombre,
            edad
        };
    };
    console.log(getAvenger());
});
(() => {
    class avenger {
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }
    class flyingAvanger extends avenger {
        constructor(nombre, equipo, nombreReal) {
            super(nombre, equipo, nombreReal);
            this.vuela = true;
        }
    }
    const antman = new avenger("Jorge", "Capitan America", "Scott Lang");
    const falcon = new flyingAvanger("Falcon", "Capitan America", "Sam Wilson");
    console.log(antman);
    console.log(falcon);
})();
//# sourceMappingURL=main.js.map
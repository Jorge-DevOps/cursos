"use strict";
(() => {
    class Mutante {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
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
    const wolverine = new Xmen("Logan", "Wolverine");
    const magneto = new villian("Magneto", "Magnus");
    console.log(wolverine);
    console.log();
    const printName = (character) => console.log(character.nombre);
    printName(wolverine);
})();
(() => {
    class Avenger {
        constructor(nombre, equipo, realName, puedePelear = false) {
            this.nombre = nombre;
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
        }
    }
    Avenger.puedePelear = true;
    const antman = new Avenger("Antman.", "Equipo A", "Scott Lang");
    Avenger.puedePelear = false;
    // console.log(antman);
})();
(() => {
    class Avenger {
        constructor(nombre, equipo, realName, puedePelear = false) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
            Avenger.puedePelear = puedePelear;
        }
    }
    Avenger.puedePelear = false;
    const antman = new Avenger("Antman.a", "Equipo A", "Scott Langs", true);
    // console.log(antman);
})();
(() => {
    class Avenger {
        constructor(nombre, nombreReal) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            console.log('Constructor Avenger llamado');
        }
        getNombre() {
            return this.nombre;
        }
    }
    class Hulk extends Avenger {
        getNombre() {
            return super.getNombre();
        }
    }
    class Xmen extends Avenger {
        constructor(a, b) {
            console.log('Constructor Xmen llamado');
            super(a, b);
        }
        getNombre() {
            return super.getNombre();
        }
    }
    const ciclope = new Xmen('Ciclope', 'Scott');
    console.log(ciclope);
    console.log(ciclope.getNombre());
    const fiona = new Hulk('Hulk', ' Hulk Scott');
    console.log(fiona);
    console.log(fiona.getNombre());
})();
// PATRON SINGLETON
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico');
    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
(() => {
    class Avenger {
        // static getnombreCapitalizado() {
        //     return this.nombre;
        // }
        constructor(nombre, equipo, realName, puedePelear = false) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
            Avenger.puedePelear = puedePelear;
        }
        bio() {
            const message = `Nombre: ${this.nombre} ${this.realName} `;
            return message;
        }
    }
    Avenger.puedePelear = false;
    const antman = new Avenger("Antman.a", "Equipo A", "Scott Langs", true);
    console.log(antman.bio());
})();
//# sourceMappingURL=main.js.map
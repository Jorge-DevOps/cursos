(() => {

    class Avenger {
        constructor(public nombre: string, private nombreReal: string) {
            console.log('Constructor Avenger llamado');
        }
        protected getNombre(): string {
            return this.nombre;
        }
    }
    class Hulk extends Avenger {
        public getNombre(): string {
            return super.getNombre();
        }
    }
    class Xmen extends Avenger {
        constructor(a: string, b: string) {
            console.log('Constructor Xmen llamado');
            super(a, b);
        }
        public getNombre(): string {
            return super.getNombre();
        }
    }

    const ciclope: Xmen = new Xmen('Ciclope', 'Scott');
    console.log(ciclope);
    console.log(ciclope.getNombre());

    const fiona: Hulk = new Hulk('Hulk', ' Hulk Scott');
    console.log(fiona);
    console.log(fiona.getNombre());
})()
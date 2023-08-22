(() => {

    class Avenger {
        static puedePelear: boolean = false;
        // static getnombreCapitalizado() {
        //     return this.nombre;
        // }

        constructor(
            private nombre: string,
            public equipo: string,
            public realName: string,
            puedePelear = false,
        ) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
            Avenger.puedePelear = puedePelear;

        }

        public bio(): string {
            const message = `Nombre: ${this.nombre} ${this.realName} `;
            return message;
        }

    }

    const antman = new Avenger("Antman.a", "Equipo A", "Scott Langs", true);
    console.log(antman.bio());
})();
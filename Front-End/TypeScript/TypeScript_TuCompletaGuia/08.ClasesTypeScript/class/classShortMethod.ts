(() => {

    class Avenger {
        static puedePelear: boolean = false;


        constructor(
            private nombre: string, 
            public equipo: string,
            public realName: string, 
            puedePelear = false,
            ) 
            {
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;
            Avenger.puedePelear = puedePelear;

        }
    }

    const antman = new Avenger("Antman.a", "Equipo A", "Scott Langs", true);
    // console.log(antman);
})();
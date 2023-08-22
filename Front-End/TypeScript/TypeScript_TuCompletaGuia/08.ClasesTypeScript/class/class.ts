(() => {

    class Avenger {
        // private nombre: string = "Scott Lang";
        public equipo: string;
        public realName: string;
        static puedePelear: boolean = true;


        constructor(private nombre: string, equipo: string, realName: string, puedePelear=false) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.realName = realName;

        }
    }

    const antman = new Avenger("Antman.", "Equipo A", "Scott Lang");
    Avenger.puedePelear = false;
    // console.log(antman);
})();
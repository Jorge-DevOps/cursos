(()=>{

    class avenger{
        nombre: string;
        equipo: string;
        nombreReal: string;
        constructor(nombre: string, equipo: string, nombreReal: string){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }

    class flyingAvanger extends avenger  {
        vuela: boolean;
        constructor(nombre: string, equipo: string, nombreReal: string){
            super(nombre, equipo, nombreReal);
            this.vuela = true;
        }
    }

    const antman = new avenger("Jorge", "Capitan America", "Scott Lang");
    const falcon = new flyingAvanger("Falcon", "Capitan America", "Sam Wilson");

    console.log(antman);
    console.log(falcon);


})()
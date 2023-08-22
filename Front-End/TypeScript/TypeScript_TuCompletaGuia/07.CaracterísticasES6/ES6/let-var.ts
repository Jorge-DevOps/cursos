(()=>{

    let nombre:string = 'Ricardo Tapia';
    let edad:number = 23;

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
        }
    }

    console.log(getAvenger()); 

    
})
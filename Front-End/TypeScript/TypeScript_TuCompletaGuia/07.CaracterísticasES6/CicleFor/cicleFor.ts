(() => {
    type avenger = {
        nombre: string,
        clave: string,
        poder: string
    }

    const ironman: avenger = {
        nombre: 'Tony Stark',
        clave: 'Ironman',
        poder: 'Dinero'
    }

    const CapitanAmerica: avenger = {
        nombre: 'Steve Rogers',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    const Thor: avenger = {
        nombre: 'Thor',
        clave: 'Thor',
        poder: 'Dios'
    }

    const avengers: avenger[] = [ironman, CapitanAmerica, Thor];

    for (const avenger of avengers) {
        console.log(avenger.nombre);
        console.log(avenger.clave);
        console.log(avenger.poder);
    }


})()
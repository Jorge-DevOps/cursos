(() => {
    // extraer( avenger );

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    // const [ loki, hombre, arana ] = avengers;

    // console.log( loki );
    // console.log( hombre );
    // console.log( arana );

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {

        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    // extraerArr(avengers);
})()
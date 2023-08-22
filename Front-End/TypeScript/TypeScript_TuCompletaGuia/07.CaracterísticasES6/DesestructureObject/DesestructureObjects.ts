(()=>{

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    // const { nombre, clave, poder } = avenger;

    // console.log( nombre );
    // console.log( clave );
    // console.log( poder );

    const extraer = ({ nombre, poder }: any) => {

        // const { nombre, poder } = avenger;

        console.log( nombre );
        console.log( poder );
    }

});
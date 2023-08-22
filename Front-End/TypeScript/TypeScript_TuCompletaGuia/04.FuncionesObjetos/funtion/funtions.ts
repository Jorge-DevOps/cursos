(()=>{
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => 'Batiseñal activada';

    // Funciones con parametros obligatorios
    const fullname = (firstname: string, lastname: string):string => {
        return `${firstname} ${lastname}`;
    }

    const name = fullname('Clark', 'Kent');
    console.log({name});

    // Funciones con parametros opcionales
    const fullname2 = (firstname: string, lastname?: string):string => {
        return `${firstname} ${lastname}`;
    }

    // Funciones con parametros por defecto
    const fullname3 = (firstname: string, lastname: string = 'Kent'):string => {
        return `${firstname} ${lastname}`;
    }
     

    // Funciones con parametros REST
    const fullname4 = (firstname: string, ...restOfName: string[]):string => {
        return `${firstname} ${restOfName.join(' ')}`;
    }

    const superman = fullname4('Clark', 'Joseph', 'Kent');
    console.log({superman});

})(); // Función anónima autoinvocada
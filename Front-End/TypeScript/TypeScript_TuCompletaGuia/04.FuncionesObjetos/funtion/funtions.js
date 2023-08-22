"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => 'Batiseñal activada';
    // Funciones con parametros obligatorios
    const fullname = (firstname, lastname) => {
        return `${firstname} ${lastname}`;
    };
    const name = fullname('Clark', 'Kent');
    console.log({ name });
    // Funciones con parametros opcionales
    const fullname2 = (firstname, lastname) => {
        return `${firstname} ${lastname}`;
    };
    // Funciones con parametros por defecto
    const fullname3 = (firstname, lastname = 'Kent') => {
        return `${firstname} ${lastname}`;
    };
    // Funciones con parametros REST
    const fullname4 = (firstname, ...restOfName) => {
        return `${firstname} ${restOfName.join(' ')}`;
    };
    const superman = fullname4('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})(); // Función anónima autoinvocada

"use strict";
// usado para especificar que una funcion nunca retorna nada
// funcion que usualmente termina en error de ejecucion 
(() => {
    const error = (mensaje) => {
        throw new Error(mensaje);
    };
    error('Auxilio!');
})();

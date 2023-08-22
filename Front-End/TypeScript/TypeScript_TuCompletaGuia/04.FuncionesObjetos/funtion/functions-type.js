"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => console.log('El mundo está salvado');
    // firma de la función, todos los parametros son obligatorios y el tipo de retorno es number
    let myFunction;
    // addNumbers es una función que cumple con la firma de myFunction
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
});

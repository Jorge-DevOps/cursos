(()=> {

    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = (): void => console.log('El mundo está salvado');
    // firma de la función, todos los parametros son obligatorios y el tipo de retorno es number
    let myFunction: (a: number, b: number) => number;
    // addNumbers es una función que cumple con la firma de myFunction
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    
     



})
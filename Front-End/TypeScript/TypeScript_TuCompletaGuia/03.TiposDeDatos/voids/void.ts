// usado para especificar que una funcion no retorna nada
(() => {

    function callBatman(): void {
        return;
    }

    const callSuperman = (): void => {
        return;
    }

    const a = callBatman();
    console.log(a);


})();
/*
Diseña una función checkCashRegister() que acepte el precio de compra 
como primer argumento (price), la cantidad pagada como segundo argumento (cash), 
y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja 
es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como 
valor de la clave change es igual al cambio que se debe entregar.

En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, 
con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, 
como valor de la clave change.
*/


function checkCashRegister(price, cash, cid) {
    //Necesito conocer cuánto vale cada moneda
    const monedas = [
        { name: "ONE HUNDRED", value: 100.0 },
        { name: "TWENTY", value: 20.0 },
        { name: "TEN", value: 10.0 },
        { name: "FIVE", value: 5.0 },
        { name: "ONE", value: 1.0 },
        { name: "QUARTER", value: 0.25 },
        { name: "DIME", value: 0.1 },
        { name: "NICKEL", value: 0.05 },
        { name: "PENNY", value: 0.01 },
    ];
    //Calculo el cambio que se debe entregar al cliente
    let cambio = cash - price;
    //Calculo cuánto en efectivo tengo en caja, para saber si tengo el dinero suficiente para entregar el cambio
    const caja = cid.reduce((sum, item) => sum + item[1], 0);
    //Armo el formato del resultado de la función
    let resultado = {
        status: '',
        change: [],
    };
    console.log('Datos de entrada', { price, cash, cambio, caja });
    /* Caso 1: si el efectivo en caja es menor que el cambio
    Devuelve {status: "INSUFFICIENT_FUNDS", change: []}
    */
    if (caja < cambio) {
        resultado.status = 'INSUFFICIENT_FUNDS'
        return resultado;
    }
    /* Caso 2: si el efectivo en caja es igual al cambio
    Devuelve {status: "CLOSED", change: [...]} -> change debe ser igual al arreglo cid
    */
    if (caja == cambio) {
        resultado.status = 'CLOSED';
        resultado.change = cid;
        return resultado;
    }

    /* Caso 3: si el efectivo en caja no es menor ni igual al cambio
    Devuelve {status: "OPEN", change: [...]} -> suma de monedas que completen el cambio
     */

    let cambioCalculado = [];
    cid = cid.reverse();

    for (let i = 0; i < cid.length; i++) {
        let valCambioAcumulado = 0;
        // console.log(monedas[i].value, "=valor moneda")
        // console.log(cid[i][0], "=nombre moneda en caja registradora")

        /* Buscamos una moneda menor al cambio para sumar y llegar al total cambio a entregar.
           Validamos que en la caja registradora tengamos efectivo de esa moneda.
           Eje: cambio:0.50, monedaMenor: 0.25, existeEnCajaRegistradora (cid[i][1] > 0) 
        */
        while (monedas[i].value <= cambio && cid[i][1] > 0) {
            console.log('ingresamos al while');
            //Restamos de la caja registradora la moneda. Ej: cid[i][1] - 0.25
            cid[i][1] -= monedas[i].value;

            //Del cambio total o calculado, restamos la moneda. Ejem: cambio - 0.25
            cambio = cambio.toFixed(2)
            cambio -= monedas[i].value
            console.log(cambio, "=cambio")

            //Vamos sumando hasta llegar al cambio total
            valCambioAcumulado += monedas[i].value
            console.log(valCambioAcumulado, "=valCambioAcumulado")
        }
        //Guardamos el valor de la moneda y su denominación
        if (valCambioAcumulado > 0) {
            cambioCalculado.push([cid[i][0], valCambioAcumulado])
        }
    }
    //Validación adicional
    if (cambio > 0) {
        resultado.status = "INSUFFICIENT_FUNDS";
        return resultado
    }
    //Armamos el resultado
    resultado.status = "OPEN";
    resultado.change = cambioCalculado;

    return resultado;
}


// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]));
//debe devolver 
// {
//     status: "OPEN";
//     change: [
//         ["QUARTER", 0.5]
//     ]
// }
console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));
// // debe devolver 
// {
//     status: "OPEN";
//     change: [
//         ["TWENTY", 60],
//         ["TEN", 20],
//         ["FIVE", 15],
//         ["ONE", 1],
//         ["QUARTER", 0.5],
//         ["DIME", 0.2],
//         ["PENNY", 0.04]
//     ]
// }

// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]);
// //debe devolver 
// {
//     status: "INSUFFICIENT_FUNDS";
//     change: []
// }

// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]);
// //debe devolver 
// {
//     status: "INSUFFICIENT_FUNDS";
//     change: []
// }
// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]);
// //debe devolver 
// {
//     status: "CLOSED";
//     change: [
//         ["PENNY", 0.5],
//         ["NICKEL", 0],
//         ["DIME", 0],
//         ["QUARTER", 0],
//         ["ONE", 0],
//         ["FIVE", 0],
//         ["TEN", 0],
//         ["TWENTY", 0],
//         ["ONE HUNDRED", 0]
//     ]
// }
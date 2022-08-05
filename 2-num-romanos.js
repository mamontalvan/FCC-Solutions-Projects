/*
Convierte el número proporcionado en un número romano.
Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

Números romanos	Números arábigos
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
*/

function convertToRoman(num) {
    //Almacenamos en un objeto los número romanos, porque vamos a necesitar la letra y su valor numérico
    const objRomanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    //En esta variable vamos almancenar el número romano
    let strNumRomano = '';
    //Recorremos el objeto de números romanos
    for (let i in objRomanos) {
        console.log(i, objRomanos[i]);

        //Mientras el número romano del objeto sea menor al número ingresado
        while (objRomanos[i] <= num) {
            //Vamos armando el número romano de menor a mayor
            strNumRomano += i;
            //Restamos el valor romano del número original o ingresado
            num -= objRomanos[i];
        }
    }
    return strNumRomano;
}

console.log(convertToRoman(36));

// Aprobado:convertToRoman(3) debe devolver la cadena III.
// Aprobado:convertToRoman(4) debe devolver la cadena IV.
// Aprobado:convertToRoman(5) debe devolver la cadena V.
// Aprobado:convertToRoman(9) debe devolver la cadena IX.
// Aprobado:convertToRoman(12) debe devolver la cadena XII.
// Aprobado:convertToRoman(16) debe devolver la cadena XVI.
// Aprobado:convertToRoman(29) debe devolver la cadena XXIX.
// Aprobado:convertToRoman(44) debe devolver la cadena XLIV.
// Aprobado:convertToRoman(45) debe devolver la cadena XLV.
// Aprobado:convertToRoman(68) debe devolver la cadena LXVIII
// Aprobado:convertToRoman(83) debe devolver la cadena LXXXIII
// Aprobado:convertToRoman(97) debe devolver la cadena XCVII
// Aprobado:convertToRoman(99) debe devolver la cadena XCIX
// Aprobado:convertToRoman(400) debe devolver la cadena CD
// Aprobado:convertToRoman(500) debe devolver la cadena D
// Aprobado:convertToRoman(501) debe devolver la cadena DI
// Aprobado:convertToRoman(649) debe devolver la cadena DCXLIX
// Aprobado:convertToRoman(798) debe devolver la cadena DCCXCVIII
// Aprobado:convertToRoman(891) debe devolver la cadena DCCCXCI
// Aprobado:convertToRoman(1000) debe devolver la cadena M
// Aprobado:convertToRoman(1004) debe devolver la cadena MIV
/*
Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, 
ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) 
y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.
*/

function palindrome(str) {
    //Limpiamos el string de espacios, caracteres especiales, guiones bajos, etc.
    const strClean = str.replace(/\s+|_+|\W/g, '');
    //Revertimos el orden del string
    const newStr = strClean.split('').reverse().join('');
    //Comparamos si el string original es igual al string reverso, esto luego de haber limpiado el string
    return (strClean.toLowerCase() === newStr.toLowerCase()) ? true : false;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));

// Aprobado:palindrome("eye") debe devolver true.
// Aprobado:palindrome("_eye") debe devolver true.
// Aprobado:palindrome("race car") debe devolver true.
// Aprobado:palindrome("not a palindrome") debe devolver false.
// Aprobado:palindrome("A man, a plan, a canal. Panama") debe devolver true.
// Aprobado:palindrome("never odd or even") debe devolver true.
// Aprobado:palindrome("nope") debe devolver false.
// Aprobado:palindrome("almostomla") debe devolver false.
// Aprobado:palindrome("My age is 0, 0 si ega ym.") debe devolver true.
// Aprobado:palindrome("1 eye for of 1 eye.") debe devolver false.
// Aprobado:palindrome("0_0 (: /-\ :) 0-0") debe devolver true.
// Aprobado:palindrome("five|\_/|four") debe devolver false.
/*
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como 
cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las 
letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados 
por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.
*/

function rot13(str) {
    //Declaramos la constante a sumar
    const rot13 = 13;
    //Guardamos el abecedario en un array para conocer la posición de cada letra
    const letrasAbce = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    //Almaceno la posición final en una variable ya que la voy a utilizar en varias ocasiones
    const poscFinalAbcd = letrasAbce.length - 1;
    //Recorremos cada letra del string proporcionado por el usuario
    return str.split('').map((item) => {
        // console.log(`${item} - ${letrasAbce.includes(item)}-${letrasAbce.indexOf(item)}`);
        // console.log(posicionCalculada);
        // Hacemos la conversión únicamente de los caracteres que son letras
        if (letrasAbce.includes(item)) {
            let posicionCalculada = letrasAbce.indexOf(item) + rot13;
            // console.log(`PosCal:${posicionCalculada} - PoscFinalABCD:${poscFinalAbcd}`);
            if (posicionCalculada > poscFinalAbcd) {
                let posicionRot13 = posicionCalculada - letrasAbce.length;
                item = letrasAbce[posicionRot13];
            } else {
                item = letrasAbce[posicionCalculada];
            }

        }
        return item;
    }).join('');
}

console.log(rot13("SERR PBQR PNZC"));

// Aprobado:rot13("SERR CVMMN!") debe decodificarse en la cadena FREE PIZZA!
// Aprobado:rot13("SERR YBIR?") debe decodificarse en la cadena FREE LOVE?
// Aprobado:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") debe decodificarse en la cadena THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
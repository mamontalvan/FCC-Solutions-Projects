/*
Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.
El usuario puede completar el campo del formulario de la forma que elija, 
siempre que tenga el formato de un número estadounidense válido. 
Los siguientes ejemplos son de formatos válidos para números estadounidenses 
(consulte las pruebas a continuación para otras variantes):
```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```
*/


function telephoneCheck(str) {
    const expReg = /^1?\s?(\d{3}|\(\d{3}\))(-|\s)?\d{3}(-|\s)?\d{4}$/;
    return expReg.test(str);
}


telephoneCheck("555-555-5555") //debe devolver un booleano.

// Aprobado:telephoneCheck("1 555-555-5555") debe devolver true.
// Aprobado:telephoneCheck("1 (555) 555-5555") debe devolver true.
// Aprobado:telephoneCheck("5555555555") debe devolver true.
// Aprobado:telephoneCheck("555-555-5555") debe devolver true.
// Aprobado:telephoneCheck("(555)555-5555") debe devolver true.
// Aprobado:telephoneCheck("1(555)555-5555") debe devolver true.
// Aprobado:telephoneCheck("555-5555") debe devolver false.
// Aprobado:telephoneCheck("5555555") debe devolver false.
// Aprobado:telephoneCheck("1 555)555-5555") debe devolver false.
// Aprobado:telephoneCheck("1 555 555 5555") debe devolver true.
// Aprobado:telephoneCheck("1 456 789 4444") debe devolver true.
// Aprobado:telephoneCheck("123**&!!asdf#") debe devolver false.
// Aprobado:telephoneCheck("55555555") debe devolver false.
// Aprobado:telephoneCheck("(6054756961)") debe devolver false.
// Aprobado:telephoneCheck("2 (757) 622-7382") debe devolver false.
// Aprobado:telephoneCheck("0 (757) 622-7382") debe devolver false.
// Aprobado:telephoneCheck("-1 (757) 622-7382") debe devolver false.
// Aprobado:telephoneCheck("2 757 622-7382") debe devolver false.
// Aprobado:telephoneCheck("10 (757) 622-7382") debe devolver false.
// Aprobado:telephoneCheck("27576227382") debe devolver false.
// Aprobado:telephoneCheck("(275)76227382") debe devolver false.
// Aprobado:telephoneCheck("2(757)6227382") debe devolver false.
// Aprobado:telephoneCheck("2(757)622-7382") debe devolver false.
// Aprobado:telephoneCheck("555)-555-5555") debe devolver false.
// Aprobado:telephoneCheck("(555-555-5555") debe devolver false.
// Aprobado:telephoneCheck("(555)5(55?)-5555") debe devolver false.
// Aprobado:telephoneCheck("55 55-55-555-5") debe devolver false.
// Aprobado:telephoneCheck("11 555-555-5555") debe devolver false.
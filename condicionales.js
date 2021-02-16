'use strict';
/*console.log('condicionales');

let numero1 = 5;
const numero2 = 8;

if (numero1<numero2) {
    console.log ("numero1 no es mayor que numero 2");
};
if (numero2>0){
    console.log ("numero2 es mayor que cero");
};

if (numero1 < 0 || numero1!=0 ) {
    console.log ("numero1 es negativo o distinto de cero");
};

if(numero1++<numero2) {
    console.log ("incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
};


const letras = ["a", "e", "i", "o", "u"]
console.log ("lenght", letras.length)
for (let i = 1; i < letras.length; i++ ) {
    console.log(letras[i]);*/








/*const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
let numero = prompt ("Dime el numero de tu DNI")
let letraDNI = numero%23

if (numero < 0 || numero>999999999) {
    alert("el numero proporcionado no es válido")
} else {
    alert (letra[letraDNI])
}
*/
















/*Ejercicio Bucles for.. of*///Bucle for...in //

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]
for(let i=2; i<7; i++){
    console.log(notas[i]);
};


const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]

for (const notas of notas){
    console.log (notas);
};



const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]
for (const notas in notas){
    console.log(notas);
};
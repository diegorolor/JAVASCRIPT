'use strict';
console.log('funciones');

/*const msj ="Hola";
const mensaje = msj.concat("mundo");


function checckNumber (number){
    if (isNaN(number) === false) {
        if (number%2 === 0) {
            console.log("par");
            return "es par"
        } else {
            console.log("inpar");
            return "es inpar"
    
        }
    }
    return"solo menores";
};

const resultado = checckNumber(26);
alert(resultado)


const frase = prompt("frase");
const controlMay =frase.toUpperCase();
const controlMin = mensaje.toLowerCase();
 if (mensaje === controlMay){
     alert("Mayusculas")
 } else if(mensaje == controlMin){
     return("Minusculas")
 } else {
     return ("Mayusculas y Minusculas")
 };

 //array ejercicio 1.9 Todo en mayúscula//

 const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];
 const topicsMayus = topic.map(function)
    return Element.toUpperCase();


const topicsArrow = topics.map(element => element.toUpperCase());

const topicFiltered = topics.filter(function(palabra) {
    return palabra.lenght > 6;
});

const topics2 = topics.filter(item => {
    var ola = 0;
    return item.lenght > 6;

});

console.log("topics", topics);
console.log("topicsFiltered", topicsFiltered);
console.log("topics2", topics2);

*/

const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = numbers.filter(function(num){
    
    return num%2 ===0;
});

console.log(pares)
const impares = numbers.filter(function(num){
    
    return true ===0;
});

console.log(numbers);
console.log(impares)

//media de los arrays NUMEROS//

const times = [60, 75, 79, 80, 55, 59];

let total=0;

times.reduce(function(acumulador, valorActual){total
= acumulador+valorActual;
return total
}, 0);

console.log(total);
const media = total / times.length;
console.log ("media", media)

//PALABRA MAS LARGA//

const words = ['Environmental', 'Systems', 'Research', 'Institute'];
const larga = words.reduce(function(acc, currentValue){
    if(acc.length > currentValue.length){
    return acc;
}   else{ 
    return currentValue;
}
},'');
console.log(larga)

//MESES QUE TIENEN MÁS DE 7 LETRAS Y EN MAYÚSCULAS//

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dicimebre'];
const filteredMeses = meses.filter(function(mes){
    return mes.lenght > 7;
});

console.log(filteredMeses);

const mesesMayus = filteredMeses.map(function(month){
    return month.toUpperCase();
});

console.log(mesesMayus);

const concatenacionMet = meses.filter(function(item){
    return item.lenght > 7
}).map (function(element) {
    return element.toUpperCase();
});

console.log(concatenacionMet);
//EJERCICIO CON ARRAYS DE OBJETOS//




//COSNTRUCTOR CLASES Y OBJETOS//
class Food {
    constructor (name, type, cal){
        this.name = name;
        this.type = type;
        this.cal = cal;
    }
};

const donut = new Food ("donut", "sweet",452);
const beer = new Food("beer", "drink", 43);
const apple = new Food("apple", "fruit", 32);
    

//EJERCICIO CLASES JAVA SCRIPT//

class Square {
     constructor(lado){
         this.lado = lado;
         this. perimetro = lado*4;
         this.area = lado*lado;
         this.informacion= {
            baseImponible:0,
            iva: 21,
            total: total,
         }
         this.calcularvolumen = function(){
             
             console.log(lado*3);
         }



         
     }
print(){
    console.log("printed");
}

}
const pequeño = new Square(2);
const mediano = new Square(5);
const grande = new Square(10);
console.log("pequeño", pequeño);
console.log("mediano", mediano);
console.log("grande", grande);

pequeño.print();

pequeño.calcularvolumen();



//EJERCICIO FACTURAS//

class Factura{
    constructor(nombre, elementos){

       this.cliente = cliente;
       this.elementos = elementos;
       this.informacion = {baseImponible:0,
        iva: 21,
        total: 0,
        pago:"efectivo"

       };
    }

};

this.calcularBaseImponible = function(){
    this.informacion.BaseImponible = this.elementos.cantidad * this.elementos.precio
};

this.calcularTotal = function(){
    this.informacion.total = this.informacion.BaseImponible * (1+(this.informacion.iva/100))
}
class cliente{
    constructor(nombre, direccion, tel, nif){
        this.definicion = direccion;
        this.tel = tel;
        this.nif = nif;
    }
};

class elemento {
    constructor(definicion, cantidad, precio){
this.definicion = definicion;
this.cantidad = cantidad;
this.precio = precio;
    }
};
const cliente1 = new cliente ("ana", "getafe", 652, 2035);
const objeto = new elemento ("botella", 1, 5);
const factura1 = new Factura(cliente1, objeto)

console.log(cliente1);
console.log();
factura1.calcularBaseImponible();
factura1.calcularTotal();


//DOM//



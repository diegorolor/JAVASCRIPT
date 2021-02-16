"use strict";
const enlaces = document.getElementsByClassName("a");
console.log ('Hay $(enlaces.lenght") enlaces');

const penultimo = enlaces[enlaces.lenght -2];

console.log(penultimo.href);

const tercer = document.getElementById
("thirdparagraph");

consola.log(tercer);

const enlacesTercer = tercer.getElementsByTagNameNS
("a");

console.log(enlacesTercer.lenght);

const resultados = document.getElementById

("resultados");
resultados.innerHTML = enlacesTercer.length;







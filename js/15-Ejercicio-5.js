'use strict'

/*
Programa que muestra todos los números divisores del número por el usuario
*/

var num;

num = prompt("Número 1");
while (!Number.isInteger(+num)) {
    num = parseInt(prompt("No es un número, vuelve a introducirlo!!"));
}

document.write("<h1>Numeros divisores de " + num + "</h1>");
for (var i = 1; i < num; i++) {
	if (num%i = 0) {
	document.write("<p>" + i + "</p>");
	}
}
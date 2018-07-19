'use strict'

/*
Programa que muestra todos los números impares entre los dos números introducidos por el usuario
*/
var num1, num2;

num1 = prompt("Número 1");
while (!Number.isInteger(+num1)) {
    num1 = parseInt(prompt("No es un número mayor de cero, vuelve a introducirlo!!"));
}

num2 = prompt("Número 2");
while (!Number.isInteger(+num2)) {
    num2 = parseInt(prompt("No es un número mayor de cero, vuelve a introducirlo!!"));
}


if (num1 > num2) {
	document.write("<h1>Numeros entre " + num2 + " y " + num1 + "</h1>");
	for (var i = +num2 + 1; i < num1; i++) {
		if (i%2 != 0) {
			document.write("<p>" + i + "</p>");
		}
	}
}else{
	document.write("<h1>Numeros entre " + num1 + " y " + num2 + "</h1>");
	for (var i = +num1 + 1; i < num2; i++) {
		if (i%2 != 0) {
			document.write("<p>" + i + "</p>");
		}
	}
}
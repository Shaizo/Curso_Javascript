'use strict'

/*
Tabla de multiplicar por pantalla
*/


var num = prompt("Introduce un número");
while(isNaN(num)){
	num = prompt("Número incorrecto, vuelve a introducirlo");
}
document.write("<h1>Tabla de multiplicar del " + num + "</h1>");
for (var i = 1; i <= 10; i++) {
	document.write("<p>" + i + " * " + num + " = " + i*num + "</p>");
}
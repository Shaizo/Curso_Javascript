'use strict'

/*
Programa que nos pida dos numero y nos diga cual es el mayor, el menor y si son iguales.
PLUS: Si nols valores no son numeros enteros mayores que 0, que vuelva a pedirlos.
*/
var num = 1, suma = 0, cont = 0;

while (num > 0) {
	num = parseInt(prompt("Introduce un número"));
	if(!isNaN(num) && num > 0){
		cont++;
		suma += num;
		console.log("Suma = " + suma);
		console.log("Media = " + parseInt(suma/cont));
		console.log("");
	}
}

console.log("Suma FINAL = " + suma);
console.log("Media FINAL = " + suma/cont);
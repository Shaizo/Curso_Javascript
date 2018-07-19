'use strict'

/*
Programa que nos dice si un número es par o impar
*/


var num = prompt("Introduce un número");
while(isNaN(num)){
	num = prompt("Número incorrecto, vuelve a introducirlo");
}

if(num%2 == 0){
	document.write("<h1>" + num + " es par!</h1>");
}else{
	document.write("<h1>" + num + " es impar!</h1>");
}
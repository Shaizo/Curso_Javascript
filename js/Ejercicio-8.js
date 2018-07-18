'use scrict'

/*
Programa que nos pida dos numero y nos diga muestre la suma, resta, multiplicación y division de ellos Por consola, por body y por alertas.
*/

var num1, num2;

num1 = prompt("Número 1");
while(isNaN(+num1)){
	alert("No es un número, vuelve a ponerlo:")
	num1 = prompt("Número 1");
}

num2 = prompt("Número 2");
while(isNaN(+num2)){
	alert("No es un número, vuelve a ponerlo:")
	num2 = prompt("Número 2");
}

num1 = +num1;
num2 = +num2;

var res_body = 	"<p>Suma de " + num1 + " + " + num2 + " = " + (+num1+num2) + "</p>" +
				"<p>Resta de " + num1 + " - " + num2 + " = " + (+num1-num2) + "</p>" +
				"<p>Multiplicación de " + num1 + " * " + num2 + " = " + (+num1*num2) + "</p>" +
				"<p>División de " + num1 + " / " + num2 + " = " + (+num1/num2) + "</p>";

var res_con = "Suma de " + num1 + " + " + num2 + " = " + (num1+num2) +
				"\nResta de " + num1 + " - " + num2 + " = " + (num1-num2) +
				"\nMultiplicación de " + num1 + " * " + num2 + " = " + (num1*num2) +
				"\nDivisión de " + num1 + " / " + num2 + " = " + (num1/num2);

document.write(res_body);
console.log(res_con);
alert(res_con);
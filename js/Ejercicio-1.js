'use scrict'

/*
Programa que nos pida dos numero y nos diga cual es el mayor, el menor y si son iguales.
PLUS: Si nols valores no son numeros enteros mayores que 0, que vuelva a pedirlos.
*/
var num1, num2;

num1 = prompt("Número 1");
while (!Number.isInteger(+num1) || num1 < 0) {
    num1 = prompt("No es un número mayor de cero, vuelve a introducirlo!!");
}

num2 = prompt("Número 2");
while (!Number.isInteger(+num2) || num2 < 0) {
    num2 = prompt("No es un número mayor de cero, vuelve a introducirlo!!");
}

console.log(num1);
console.log(num2);

if (num1 < num2) {
    console.log(num1 + " es menor que " + num2);
} else if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
} else {
    console.log("Los dos números son iguales");
}
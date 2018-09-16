'use strict'

/*
1. Pida 6 numeros y los meta en una array
2. Mostrar el array entero en el cuerpo de la página y la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Buscar un valor introducido por el usuario, que nos diga
   si esta y su posicion
*/

//1.
var numeros = [];
for (var i = 0; i < 6; i++) {
	var num = prompt("Introduce un número");
	while(isNaN(num)){
		num = prompt("No has introducido un número! Otra vez!");
	}
	numeros.push(num);
}

//2.
document.write("<h1>Array de números</h1>");
document.write("<ul style='list-style-type: decimal;'>")
console.log("Mostrar números");
numeros.forEach((elemento)=>{
	document.write("<li>" + elemento + "</li>");
	console.log(elemento);
})
document.write("</ul>");

//3.
numeros.sort();

document.write("<h1>Array de números ordenados</h1>");
document.write("<ul style='list-style-type: decimal;'>")
numeros.forEach((elemento)=>{
	document.write("<li>" + elemento + "</li>");
})
document.write("</ul>");

//4.
numeros.reverse();

document.write("<h1>Array de números ordenados a la inversa</h1>");
document.write("<ul style='list-style-type: decimal;'>")
numeros.forEach((elemento)=>{
	document.write("<li>" + elemento + "</li>");
})
document.write("</ul>");

//5.
document.write("<h1>La longitud de la array es: " + numeros.length + "</h1>");

//6.
function buscarNumero(){
	var num = prompt("Introduce número a buscar");
	while(isNaN(num)){
		num = prompt("No has introducido un número! Otra vez!");
	}
	if (numeros.find(numeroAbuscar => numeroAbuscar == num)){
		console.log("Numero encontrado en la posicion: " + numeros.findIndex(numeroAbuscar => numeroAbuscar == num));
	}else{
		console.log("Numero NO encontrado");
	}
}
 
buscarNumero();
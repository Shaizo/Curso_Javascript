'use strict'

// Transformacion de textos
var numero = 44;
var texto1 = "Bienvenido al curso de fulanito el killer";
var texto2 = "es muy buen curso";

var dato = numero;
	dato = texto1.toUpperCase();
//console.log(typeof dato)


//Hace tambien el .lenght() y el .concat()

//Encuetra la palabra, lastIndexOf() encuentra la última palabra
// var busqueda = texto1.match("curso");
// console.log(busqueda);
// .match() encuentra y lista con datos

// .include() booleano si esta en el string o no

//Reemplaza
var busqueda = texto1.replace("curso", "camaleon");
console.log(busqueda);

// .slice() muestra el string a partir del caracter que pongas, es como si cortaras

// .split() separa un string por el caracter que le indiques haciendo una array
var busquedaSplit = texto1.split(" ");
console.log(busquedaSplit);

// Quita los espacios por delante y por detras
var busquedaTrim = texto1.trim(" ");
console.log(busquedaTrim);
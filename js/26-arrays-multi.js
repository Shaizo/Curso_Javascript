'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'Antman', 'Salchicha'];

var cine = [categorias, peliculas]; 
console.log(peliculas);
//Añadir ultimo
peliculas.push("Batman");
console.log(peliculas);

//Borrar ultimo
peliculas.pop();
console.log(peliculas);

//Pasar de array a string
var texto = peliculas.join();

console.log(texto);

//Ordenar array
peliculas.sort(); //Orden alfabetico
peliculas.reverse() //Orden inverso


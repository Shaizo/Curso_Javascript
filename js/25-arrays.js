'use strict'

//Arrays, Arreglos, Matrices...

var nombre = "Aitor";
var nombres = ["Jose", "Carlos", "Koke"];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C++", "Phyton");


// for (var i = 0; i < lenguajes.length; i++) {
// 	console.log(lenguajes[i]);
// }

lenguajes.forEach((elemento)=>{
	console.log(elemento);
});

//Mostrar arrays
document.write("<h3>Mostrar array for in</h3>");
document.write("<ul>");
for(let lenguaje in lenguajes){
	document.write("<li>" + lenguaje + "- " + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");


//Busquedas
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "Go";
});
console.log("Busqueda con find");
console.log(busqueda);

var busqueda_simple = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda_simple);

var precios = [10,20,30,40,50,60];

var busqueda_precio = precios.some(precio => precio >= 30);
console.log(busqueda_precio);
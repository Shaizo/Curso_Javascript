'use strict'


// Funciones
// Funciones que no tienen nombre

function sumame(n1, n2, sumaYmuestra, sumaPorDos){
	var sumar = n1 + n2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

sumame(3,5, function(dato){
	console.log("La suma es: ", dato);
},
dato => {
	console.log("La suma por dos es: ", (dato*2));
});
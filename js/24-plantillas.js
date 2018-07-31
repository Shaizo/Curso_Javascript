'use strict'

// Plantillas de texto

var nombre = prompt("Pon tu nombre");
var apellidos = prompt("Pon tus apellidos");

var texto = `
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}<br><br>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);
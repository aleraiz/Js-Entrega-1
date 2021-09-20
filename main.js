// Un comentario de una sola linea

/*
comentario
multi linea



// Tipo de datos primitivos de JS

// String ""

"Julian matias fuoco" 

'Este tambien es un string'

// Number

17
23
2021

//Boolean

true
false

*/

// 3 formas de declarar una variable

// var ( No usar mas var)
// let 
// const (constante... no se puede cambiar el valor, va a ser siempre el primero q definimos.)

// Operadores Basicos     +   -   /   *

//prompt() nos sirve para guardar un dato desde el navegador

//console.log() - este  nos sirve para mostrar un mensaje en la consola

// alert() es para mostrar una alerta en el navegador 

//convertir tipo de dato a otro tipo de dato = parsear
//Number() pasar a numero
//parseInt() pasar a entero
//parseFloat() pasar a decimales





const espacio = " ";

let nombreIngresado = prompt("Ingrese su nombre");
console.log(nombreIngresado);

let apellidoIngresado = prompt("Ingrese su apellido");
console.log(apellidoIngresado);

let nombreCompleto = nombreIngresado + " " + apellidoIngresado;


let añoNacimiento  = Number(prompt("Ingrese el año de nacimiento"));
console.log(añoNacimiento);

const fecha = new Date();
const añoActual = fecha.getFullYear();
console.log(añoActual);

alert("Su nombre completo es:" +espacio + nombreCompleto + espacio +
"y su edad es:" + espacio + (añoActual - añoNacimiento) + espacio + "(o los cumple este año)");

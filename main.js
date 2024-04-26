//  Un programa de una sola línea que tire un alerta y diga "Hola Mundo"
alert("Hello World");

//Escribir por pantalla "Hola Mundo"
document.write("Hello World </br>");

//Escribir por pantalla la suma de dos números.
document.write(3+5 + "</br>");

// Pedir al usuario que ingrese su nombre y luego escribir "Hola + nombre de usuario."
let usr = prompt("Ingrese su nombre de Usuario:");
document.write("Hola " + usr + "</br>");

// Pedir un número y luego otro, escribir el resultado de la sumado de los números.
let a = parseInt(prompt("A) Ingrese un número: "));
let b = parseInt(prompt("B) Ingrese otro número: "));
document.write("El resultado de la suma de los dos números proporcionados es: " + (a + b) + "</br>");

// ¿Cuál es el mayor de dos números? (reutilizamos variables a + b)
if (a>b) {
    document.write("El número mayor es: " + a + "</br>");    
} else {
    document.write("El número mayor es: " + b + "</br>");
}

// Un programa de tres lineas que pida 3 numeros y escriba en la pantalla el mayor de ellos.

alert("Ahora el sistema le pedira tres numeros diferentes para comparar  cuál es el mayor.")
let c = parseInt(prompt("C) Ingrese un número: "));
let d = parseInt(prompt("D) Ingrese otro número: "));
let e = parseInt(prompt("E) Ingrese un número: "));

if ( c > d && c > e) {
    document.write( "El número mayor es: " + c);
} else if(d > c && d > e){
    document.write("El número mayor es: " + d);
} else if (e > c && e > d){
    document.write("El número mayor es: " + e);
}


// 1- Un programa de una sola línea que tire un alerta y diga "Hola Mundo"
alert("Hello World");
/*
// 2- Escribir por pantalla "Hola Mundo"
document.write("Hello World </br>");

// 3- Escribir por pantalla la suma de dos números.
document.write(3 + 5 + "</br>");

// 4- Pedir al usuario que ingrese su nombre y luego escribir "Hola + nombre de usuario."
let usr = prompt("Ingrese su nombre de Usuario:");
document.write("Hola " + usr + "</br>");

// 5- Pedir un número y luego otro, escribir el resultado de la sumado de los números.
let a = parseInt(prompt("A) Ingrese un número: "));
let b = parseInt(prompt("B) Ingrese otro número: "));
document.write("El resultado de la suma de los dos números proporcionados es: " + (a + b) + "</br>");

// 6- ¿Cuál es el mayor de dos números? (reutilizamos variables a + b)
if (a>b) {
    document.write("El número mayor es: " + a + "</br>");    
} else {
    document.write("El número mayor es: " + b + "</br>");
}

// 7- Un programa de tres lineas que pida 3 numeros y escriba en la pantalla el mayor de ellos.

alert("Ahora el sistema le pedira tres numeros diferentes para comparar  cuál es el mayor.")
let c = parseInt(prompt("C) Ingrese un número: "));
let d = parseInt(prompt("D) Ingrese otro número: "));
let e = parseInt(prompt("E) Ingrese un número: "));

if ( c > d && c > e) {
    document.write( "El número mayor es: " + c + "</br>");
} else if(d > c && d > e){
    document.write("El número mayor es: " + d + "</br>");
} else if (e > c && e > d){
    document.write("El número mayor es: " + e + "</br>");
}

// 8- Un programa que pida un número y diga si es divisible por 2 
alert("Ahora el programa evaluara si un número es divisible por 2");
// Declaramos variable para almacenar el número que ingresará el usuario
let numEvaluar = prompt("Ingrese el número a evaluar: ");
// Declaramos una variable para almacenar el resultado de la división
let resultado;
// Un número es divisible por otro siempre y cuando el resto sea exactamente 0
resultado = numEvaluar%2;
if (resultado === 0) {
    document.write("El número " + numEvaluar + " es divisible por 2" + "</br>");
} else {
    document.write("El número " + numEvaluar + " no es divisible por 2" + "</br>");
}

// 9- Programa que pide una frase y cuenta las veces que se repite la letra "a"
alert("El programa le pedirá que ingrese una frase y contará las veces que se repite la letra a.")
let frase = prompt("Ingrese una frase: ");
// Variable contador, incrementa cada vez que se encuentra la letra a.
let cantLetra = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a') {
        cantLetra++;
    }
}
document.write("Usted escribió esta frase: " + "</br>" + frase + "</br>")
document.write("La cantidad de veces que se repite la letra a es " + cantLetra + "</br>");

// 10- Programa que escribe las vocales que aparecen en la frase
// Declaramos la variable de tipo array donde se almacenaran las vocales encontradas
let vocales = [];

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u') {
        vocales.push(frase[i]);
    }
} document.write("Las vocales que aparecen en la frase son: " + vocales + "</br>");

// 11- Programa que escriba cuántas de las letras que tiene son vocales
El programa del punto 10 ya almacena en su array vocales[] las letras, por lo cual declararemos una variable para saber
la longitud de ese array y así saber la cantidad de vocales.

let longVocales = vocales.length;
document.write("La cantidad de vocales que tiene esta frase es: " + longVocales + "</br>");

// 12- Programa que escriba cuantas veces aparece cada vocal
// Declaramos una variable de tipo array para cada vocal. 
let vocalA = 0;
let vocalE = 0;
let vocalI = 0;
let vocalO = 0;
let vocalU = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase === 'a') {
        vocalA++;
    } else if (frase[i].toLowerCase() === 'e') {
        vocalE++;
    } else if (frase[i].toLowerCase() === 'i') {
        vocalI++;
    } else if (frase[i].toLowerCase() === 'o') {
        vocalO++;
    } else if (frase[i].toLowerCase() === 'u') {
        vocalU++;
    }
} document.write("La vocal A aparece: " + vocalA + "</br>" +
    "La vocal E aparece: " + vocalE + "</br>" +
    "La vocal I aparece: " + vocalI + "</br>" +
    "La vocal O aparece: " + vocalO + "</br>" +
    "La vocal U aparece: " + vocalU + "</br>");

    */

// 13 - Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
// 7(sólo hay que comprobar si lo es por uno de los cuatro)


/* alert("El programa comprobará si el número ingresado es divisible por alguno de estos: 2, 3, 5, 7");

let numEvaluar2 = prompt("Ingrese el número a evaluar: ");
let resultado2;
let flagControl = true;
let nDivisibles = [];
do {
    resultado2 = numEvaluar2 % 2;
    if (resultado2 === 0) {
        nDivisibles.push("2");
    }
    resultado2 = numEvaluar2 % 3;
    if (resultado2 === 0) {
        nDivisibles.push("3");
    }
    resultado2 = numEvaluar2 % 5;
    if (resultado2 === 0) {
        nDivisibles.push("5");
    }
    resultado2 = numEvaluar2 % 7;
    if (resultado2 === 0) {
        nDivisibles.push("7");
    }
    document.write("El número ingresado es divisible por: " + nDivisibles);
    flagControl = false;    
} while (flagControl); */

let dato = 123 + "1" ;
console.log(dato);





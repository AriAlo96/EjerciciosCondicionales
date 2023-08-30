//Ejercicio 1
let numero1 = 8
let numero2 = 7

function numeros (a,b) {
    let mayorOMenor = a - b
    if (mayorOMenor>0) {
        console.log("El primer numero es mayor que el segundo")
    }else{
        console.log("El primer numero es menor que es segundo")
    }   
    }

let resultado = numeros (numero1,numero2)

//Ejercicio 2

let numero_1 = 6
let numero_2 = 9

function numer (a,b) {
    let igualesODiferentes = a / b
    if (igualesODiferentes == 1){
        console.log("Los numeros son iguales")
    }else{
        console.log("Los numeros son diferentes")
    }
}

let resultadoIgualesODiferentes = numer(numero_1,numero_2)

//Ejercicio 3

let numero01 = 26
let numero02 = 30

function numero (a,b) {
   let mayorOIgual = Math.max (a,b)
    return mayorOIgual
    }

let resultadoMayorOIgual = numero(numero01,numero02)
console.log(resultadoMayorOIgual + " es el numero más grande")


//Ejercicio 4

let edad1 = 45
let edad2 = 26
let edad3 = 29

function edades (a,b,c) {
    let edadMinima = Math.min (a,b,c)
    return edadMinima
}
let resultadoEdadMinima = edades(edad1,edad2,edad3)
console.log(resultadoEdadMinima + " es el numero más chico")

//Ejercicio 5
let persona1 = {
    nombre: "Juan",
    edad: 36,
    altura: 1.70
} 

let persona2 = {
    nombre: "Pedro",
    edad: 28,
    altura: 1.65
} 

function propiedades (a,b){
    let propiedadesPersonas = Math.max(a,b)
    return propiedadesPersonas
}

let mayorEdad = propiedades(persona1.edad,persona2.edad)
let mayorAltura = propiedades(persona1.altura,persona2.altura)
console.log (mayorEdad , mayorAltura)

//Ejercicio 6
let datos = {
    nombre: prompt ("ingrese su nombre"),
    edad: prompt ("Ingrese su edad"),
    altura: prompt ("Ingrese su altura"),
    vision: prompt ("Ingrese su visión")
}
if (datos.edad>=18 & datos.altura>=1.50 & datos.vision>=8) {
alert ("Ud está capacitado para conducir")
}else{
alert ("Ud no está capacitado para conducir")
}

//Ejercicio 7
let datosCliente = {
    nombre: prompt ("ingrese su nombre"),
    pase: prompt ("Ingrese su tipo de pase (Vip o normal)"),
    entrada: prompt ("Indique si posee entrada (Si o no)")
}
if (datosCliente.nombre = "Ariana" || datosCliente.pase != "Vip") {
    alert ("¡Bienvenido al evento!")
}
if (datosCliente.entrada = "si"){
    prompt ("¿Deasea utilizarla?")
}
if (datosCliente.nombre != "Ariana" & datosCliente.pase != "Vip" & datosCliente.entrada != "si") {
    prompt ("¿Desea comprar?")
}

//Ejercicio 8 

let numeroIngresado = prompt ("Ingrese un numero del 1 al 10")


function adivinanza (a,b){
    let numeroIncognita = Math.random(a,b)
    return numeroIncognita
}

let resultadoAdivinanza = adivinanza(1,10)

if (numeroIngresado = resultadoAdivinanza) {
    alert("Felicitaciones! ¡Ha acertado!")
}else{
    alert("Incorrecto, siga participando")
}

//Ejercicio 9

let IngresarEdad = prompt ("Ingrese su edad")

if (IngresarEdad<=12){
    alert ("Soy infante")
}
if (IngresarEdad<=18) {
    alert ("Soy adolescente")
}
if (IngresarEdad<=45) {
    alert ("Soy mayor joven")
}
if (IngresarEdad<=99) {
    alert ("Soy anciano")
}
if (IngresarEdad>=100){
    alert ("¿Realmente tienes esa edad?")
}

//Ejercicio 10
let jugador1 = prompt ("Jugador 1 Ingrese PIEDRA , PAPEL o TIJERAS")
let jugador2 = prompt ("Jugador 2 Ingrese PIEDRA , PAPEL o TIJERAS")

if ((jugador1 = "PIEDRA") & (jugador2 = "PIEDRA")) {
    alert("Empate!");
}
if ((jugador1 = "PIEDRA") & (jugador2 = "PAPEL")) {
    alert("Ganó Jugador 2!");
}
if ((jugador1 = "PIEDRA") & (jugador2 = "TIJERAS")) {
    alert("Ganó Jugador 1!");
}
if ((jugador1 = "PAPEL") & (jugador2 = "PAPEL")) {
    alert("Empate!");
}
if ((jugador1 = "PAPEL") & (jugador2 = "PIEDRA")) {
    alert("Ganó Jugador 1!");
}
if ((jugador1 = "PAPEL") & (jugador2 = "TIJERAS")) {
    alert("Ganó Jugador 2!");
}
if ((jugador1 = "TIJERAS") & (jugador2 = "TIJERAS")) {
    alert("Empate!");
}
if ((jugador1 = "TIJERAS") & (jugador2 = "PIEDRA")) {
    alert("Ganó Jugador 2!");
}
if ((jugador1 = "TIJERAS") & (jugador2 = "PAPEL")) {
    alert("Ganó Jugador 1!");
}

//Ejercicio 11
let color = prompt ("Ingrese un color")

switch (color) {
    case ("blanco"):
        alert("Falta de color")
        break;
    case ("negro"):
        alert("Falta de color")
        break;
    case "verde":
        alert("El color de la naturaleza")
        break;
     case "azul":
        alert("El color del agua")
        break;
    case "amarillo":
        alert("El color del sol")
        break;    
    case "rojo":
        alert("El color del fuego")
        break;  
    case "marron":
        alert("El color de la tierra")
        break;
    default:
        alert("Exelente eleccion, no lo teniamos pensado")
}

//Ejercicio 12

let filas = prompt ("ingrese el numero de filas")
let columnas = prompt ("ingrese el numero de columnas")

function planilla (a,b){
    let totalCeldas = a * b
    return totalCeldas
}

let celdasPlanilla = planilla(filas,columnas)
alert ("Su planilla tiene un total de " + celdasPlanilla + " celdas")

//Ejercicio 13

let dni = {
numeroDni: prompt("Ingrese su n° de DNI"),
nacimiento: prompt("Ingrese su fecha de nacimiento"),
domicilio: prompt("Ingrese el domicilio que figura en su DNI"),
ciudadNatal: prompt("Ingrese su ciudad natal")
}

alert("Los datos ingresados son los siguientes: n° de DNI: " + dni.numeroDni + ". Fecha de nacimiento: " + dni.nacimiento + ". Domicilio: " + dni.domicilio + ". Ciudad Natal: " + dni.ciudadNatal + ".")

let verificacion = prompt("¿Son correctos? Responda si o no")

if (verificacion = "si") {
    console.table(dni)
}


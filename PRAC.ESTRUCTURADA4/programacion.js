//forEach(): Ejecuta una función para cada elemento del array.
//ejercicio1
let numbers = [1,2,3]
numbers.forEach(function(number){

    console.log(number * 2);
});

//ejercicio2
const products = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10}
]

let precioTotal = 0;
products.forEach(function(producto){
    precioTotal += producto.precio;
});

console.log('precio total a pagar: $',precioTotal)

//map(): Crea un nuevo array aplicando una función a cada elemento del array original.
//Ejercicio1
let numbers1 = [1,2,3];
let nuevoArreglo = numbers1.map(function(number){
    return number * 2
});

console.log(nuevoArreglo)

//ejercicio2
//convertir grados celsius a farenheit
const Gcelcius = [0,15,30,5,10];
const Gfarenheit = Gcelcius.map(function(celsius){
    //formula = °F = (°C * 9/5) + 32
    return (celsius * 9/5) + 32;
});

console.log('Grados Celsius: ',Gcelcius);
console.log('Grados Farenheit: ',Gfarenheit);

//filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).
//ejercici01
const nums = [2,8,3,6,10,4,7]

const nums2 = nums.filter(function(number){
    return number > 5
});

console.log(nums2);

//ejercicio2
const personas = [
    {nombre: 'Yancy', edad: 24},
    {nombre: 'Jose', edad: 17},
    {nombre: 'Luciana', edad: 30},
    {nombre: 'Kevin', edad: 15},
    {nombre: 'Plutarca', edad: 20}
]

const adultos = personas.filter(function(person){
    return person.edad > 18
});

console.log(adultos)

//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.
//ejercicio1
let num = [1,2,3,4];
let sum = num.reduce(function(acumulador,valorActual){
    return acumulador + valorActual
}, 0);

console.log(sum)

//every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.
//ejercicio1
let numberr = [1,2,3,4,5];
let mayorCero = numberr.every(function(number){
    return number > 0
})

console.log(mayorCero)

//some(): Comprueba si al menos un elemento de un arreglo cumple una condición dada y devuelve true o false
//ejercicio1
let number2 =[1,2,3,4,5];
let numeroPar = number2.some(function(number){
    return number % 2 == 0
});

console.log(numeroPar)

//sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo).
//ejercicio1
let nombres = ['Gustavo','Androso','Stacy','Oscar','Michelle'];
nombres.sort();
console.log(nombres)


// TAREA DE LA SEMANA....................................................................
//1
const Gmetros = [100, 500, 1000, 2500, 5000];
const Gkilometros = Gmetros.map(function(metros) {
    // fórmula: kilómetros = metros / 1000
    return metros / 1000;
});

console.log('Metros: ', Gmetros);
console.log('Kilómetros: ', Gkilometros);


//2
let transporte = ['Avion','Helicoptero','Barco','Tren','Motocicleta','Automovil'];
transporte.sort();

console.log(transporte)


//3
const Eventos = [
    {nombre: 'WW1', año: 1914},
    {nombre: 'WWW2', año: 1939},
    {nombre: 'GUERRA DE COREA', año: 1950},
    {nombre: 'GUERRA FRIA', año: 1940},
    {nombre: 'GUERRA DE IRAK', año: 2003}
]

const Evento = Eventos.filter(function(evento){
    return evento.año > 1910
});

console.log(Evento)
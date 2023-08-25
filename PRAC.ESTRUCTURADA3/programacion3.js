//Metodos de Manipulacion

//1 . push(): Agrega uno o mas elementos al final del array.
let numeros = [1,2,3]
numeros.push(4,5)

console.log(numeros)

//2 . pop(): Elimina y devuelve el ultimo elemeto del array.
let frutas = ["manzanas","naranjas","peras"]
let ultimafrutas = frutas.pop();

console.log(ultimafrutas)
console.log(frutas)

//3 . unshift(): Agrega uno o mas elementos al inicio del array.
let colores = ["verde","rojo"]
colores.unshift("azul","blanco");

console.log(colores)

//4 . shift(): Elimina y devuelve el primer elemento del array.
let paises = ["El Salvador","Ucrania","Rusia"]
let primerPais = paises.shift()

console.log(primerPais)
console.log(paises)

//5 . concat(): Combina dos o más arrays para crear un nuevo array.
let array1 = [1,2]
let array2 = [3,4]
let CombinarArray = array1.concat(array2)
let CombinarArray2 = array2.concat(array1)

console.log(CombinarArray2)
console.log(CombinarArray)

//6 . slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.
let ArrayOriginal = [1,2,3,4,5]
let copiaArray = ArrayOriginal.slice(1,4)

console.log(copiaArray)
console.log(ArrayOriginal)

//7 . splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos
let Frutas = ["Banana","Uvas","Kiwi","Sandia","Melon"]
let removerFruta = Frutas.splice(2,1,"fresa")

console.log(Frutas)
console.log(removerFruta)
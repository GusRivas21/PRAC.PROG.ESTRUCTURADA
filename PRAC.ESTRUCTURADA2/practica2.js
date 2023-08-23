//EJERCICIO 1 : Array de frutas
let animales = ["Halcon", "Zorro", "Leon", "Tortuga", "Buho"]

console.log(animales)

//EJERCICIO 2 : Array Marcas de autos
let autos = ["Toyota", "Ferrari", "Nissan", "Chevrolet", "Honda"]

console.log(autos)
console.log(autos[4])

//EJERCICIO 3 : Array de frutas
let frutas = ["Manzana", "Banana", "Pera", "Fresa", "Mango"]

console.log(frutas)
alert(frutas[2])

//EJERCICIO 4 :Modificando el Array
let numeros = ["12","24","36","48", "50"]

console.log(numeros)
console.log(numeros[3]="18")

//EJERCICIO 5 : Array de Colonias
let Colonias = ["Unidas", "15 de Septiembre", "Prados", "Aguilas", "Satelite"]

console.log(Colonias)
console.log(`El arreglo contiene ${Colonias.length} colonias.`)

//EJERCICIO 6 : Array de Elementos
let nElementos = prompt("Ingrese cuantos elementos quiere agreagar al Array")
let Elementos = []

for (let i = 0; i < nElementos; i++){
    let elemento = prompt(`Ingrese el siguiente elemento ${i + 1}`)
    Elementos.push(elemento);
}

console.log(Elementos)
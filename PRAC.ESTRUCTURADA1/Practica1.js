// alert("(: Mensaje de Alerta en JavaScript :)");

// console.log("Estas usando la consola >:v");
// console.log(20);
// console.log(1.2);
// console.log(true);
// console.log(false);

//var 
// var x = 10;
// console.log(x);
// x = 20;
// console.log(x);
// var x = 100;
// console.log(x);

// let
// let y = 5;
// console.log(y)
// y = 20;//es valido
// console.log(y)
// let y = 25;
// console.log(y);//no es valido porque ya se declaro

//const
// const pi = 3.1415;
// console.log(pi);
// pi = 325111;
// console.assert(pi);

// let nombre = " Gustavo Rivas";
// let edad = 18;
// let mensaje = "Mi Nombre es" + nombre + " y Tengo " + edad + " Años";
// console.log(mensaje)
// alert(mensaje)

/*const numero = parseInt(prompt("Ingrese un Número para Generar su Tabla de Multiplicar"));

console.log(`Tabla de Multiplicar del ${numero}`);

for (let i = 1; i <= 10; i++){
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}*/

const numero = parseInt(prompt("Ingrese un Número para Verificar si es Positivo o Negativo"));

if(numero > 0){
    console.log("El numero es Positivo")
} else if (numero < 0){
    console.log("El Numero es Negativo")
} else {
    console.log("El Numero no es Valido")
}
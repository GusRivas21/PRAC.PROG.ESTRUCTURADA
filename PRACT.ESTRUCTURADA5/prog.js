//EJEMPLOS DE LA CLASE
//EJEMPLO1:
//Declaracion de la Funcion "Saludar".
function saludar(){
    //contenido de la funcion
    console.log("Hola, soy una Funcion");
}
//Ejecucion de la funcion
saludar()

//EJEMPLO2:
//Declaracion
function tablaDelUno(hasta){
    for(let i = 1; i <= hasta; i++){
        console.log("1 x",i,"=",1*i);
    }
}
//Ejecucion
tablaDelUno(10)
tablaDelUno(5)

//EJEMPLO3:
//Declaracion
function tablaMultiplicar(tabla,hasta){
    for(let i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }
}
//Ejecucion
tablaMultiplicar(1,10)
tablaMultiplicar(5,10)

//EJEMPLO4
//Declaracion
function tabla(tabla,hasta = 10){
    for(let i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }
}
//Ejecucion
tabla(2)
tabla(2,15)

//EJEMPLO5
function sumar(a,b){
    return a + b;
}

const resultado = sumar(5,5);
console.log("Tu Resultado es = ", resultado)

//EJERCICIOS DE LA CLASE
//EJERCICIO1:
function saludo(){
    console.log("Hola Estrellitas!!! La Tierra les dice Holaa!!!");
}
saludo()

//EJERCICIO2:
function suma(a,b){
    return a + b
}
console.log(suma(5,3));

//EJERCICIO3:
function resta(a2,b2){
    return a2 - b2;
}
console.log(resta(20,5))

//EJERCICIO4:
function multi(a3,b3){
    return a3 * b3;
}
console.log(multi(3,12))

//EJERCICIO5:
function calcularAreaRectangulo(longitud,anchura){
    return longitud * anchura;
}
console.log(calcularAreaRectangulo(4,8))

//EJERCICIO6:
function numeroPar(numero){
    return numero % 2 == 0;
}
console.log(numeroPar(8))
console.log(numeroPar(9))

//EJERCICIO7:
function obtenerCalificacion(puntuacion){
    if (puntuacion >= 9 && puntuacion <= 10){
        return "Excelente";
    } else if (puntuacion >= 8 && puntuacion < 9){
        return "Muy Bueno";
    } else if (puntuacion >= 7 && puntuacion < 8){
        return "Bueno";
    } else if (puntuacion >= 6 && puntuacion < 7){
        return "Regular";
    } else if (puntuacion >= 1 && puntuacion < 6){
        return "Definiciente"
    } else {
        return "Puntuacion no Valida"
    }
}
console.log(obtenerCalificacion(8.7))
console.log(obtenerCalificacion(3.6))
console.log(obtenerCalificacion(9.6))
console.log(obtenerCalificacion(100))
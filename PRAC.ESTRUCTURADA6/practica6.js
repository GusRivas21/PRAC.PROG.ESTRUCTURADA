//Definimos la clase nodo
class nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecho = null;
    }
}

//Definimos la clase arbols binario
class ArbolBinario{
    constructor(){
        this.raiz = null;
    }
    //metodo insertar
    insertar(valor){
        const nuevoNodo = new nodo(valor);

        if(!this.raiz){
            this.raiz = nuevoNodo;
        }else{
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }
    //Metodo de insertar nodo
    insertarNodo(nodo, nuevoNodo){
        if(nuevoNodo.valor < nodo.valor){
            if(!nodo.izquierda){
                nodo.izquierda = nuevoNodo;
            }else{
                this.insertarNodo(nodo.izquierda,nuevoNodo);
            }
        }else{
            if(!nodo.derecho){
                nodo.derecho = nuevoNodo;
            }else{
                this.insertarNodo(nodo.derecho,nuevoNodo)
            }
        }
    }
    recorridoAmplitud(){
        const resultado = [];
        const cola = [];

        if(!this.raiz){
            return resultado;
        }
        cola.push(this.raiz)

        while(cola.length > 0){
            const nodoActual = cola.shift();
            resultado.push(nodoActual.valor);

            if (nodoActual.izquierda){
                cola.push(nodoActual.izquierda);
            }
            if(nodoActual.derecho){
                cola.push(nodoActual.derecho);
            }
        }
        return resultado;
    }
    //Recorrido en profundidad preorden
    recorridoPreorden(){
        return this.recorridoPreordenNodo(this.raiz,[]);
    }
    recorridoPreordenNodo(nodo,resultado){
        if (nodo){
            resultado.push(nodo.valor);
            this.recorridoPreordenNodo(nodo.izquierda, resultado);
            this.recorridoPreordenNodo(nodo.derecho, resultado);
        }
        return resultado;
    }
    //Recorrido en profundidad central
    recorridoOrdenCentral(){
        return this.recorridoOrdenCentralNodo(this.raiz,[]);
    }
    recorridoOrdenCentralNodo(nodo,resultado){
        if(nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado);
            resultado.push(nodo.valor);
            this.recorridoOrdenCentralNodo(nodo.derecho,resultado);
        }
        return resultado;
    }
    //Recorrido en profundidad postorden
    recorridoPostorden(){
        return this.recorridoPostordenNodo(this.raiz,[]);
    }
    recorridoPostordenNodo(nodo,resultado){
        if (nodo){
            this.recorridoPostordenNodo(nodo.izquierda,resultado);
            this.recorridoPostordenNodo(nodo.derecho,resultado);
            resultado.push(nodo.valor);
        }
        return resultado;
    }
}

//Crear un arbol binario
const Arbol = new ArbolBinario();
Arbol.insertar(10);
Arbol.insertar(5);
Arbol.insertar(15);
Arbol.insertar(3);
Arbol.insertar(7);
Arbol.insertar(12);
Arbol.insertar(18);

console.log("Recorrido en Amplitud: ", Arbol.recorridoAmplitud());
console.log("Recorrido de Profundidad Preorden: ", Arbol.recorridoPreorden());
console.log("Recorrido de Profundidad Orden Central: ", Arbol.recorridoOrdenCentral());
console.log("Recorrido de Profundidad Post-orden: ", Arbol.recorridoPreorden());
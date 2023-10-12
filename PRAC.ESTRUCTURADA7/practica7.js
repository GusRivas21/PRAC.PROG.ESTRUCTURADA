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

    //Metodo de Validacion
    esArbolBinarioBusqueda(){
        return this.validarABB(this.raiz, -Infinity, Infinity)
    }

    validarABB(nodo, min, max){
        if(nodo){
            return true;
        }
        if(nodo.valor < min || nodo.valor > max){
            return false;
        }
        return(
            this.validarABB(nodo.izquierda, min, nodo.valor -1) &&
            this.validarABB(nodo.derecha, nodo.value + 1, max)
        );
    }

    //Metodo para el conteo de nodos
    contarNodos(){
        return this.contarNodosEnSubarbol(this.raiz);
    }

    contarNodosEnSubarbol(nodo){
        if(!nodo){
            return 0;
        }
        return (1 + this.contarNodosEnSubarbol(nodo.izquierda) +
        this.contarNodosEnSubarbol(nodo.derecha)
        );
    }

    //Metodo para buscar un valor especifico
    buscarValor(valor){
        return this.buscarEnSubarbol(this.raiz,valor);
    }

    buscarEnSubarbol(nodo,valor){
        if (!nodo){
            return false;
        }
        if(nodo.valor === valor){
            return true;
        }
        return (this.buscarEnSubarbol(nodo.izquierda,valor) ||
        this.buscarEnSubarbol(nodo.derecha,valor)
        );
    }

    //Metodo para eliminar nodos
    eliminarValor(valor){
        this.raiz = this.eliminarEnSubarbol(this.raiz,valor);
    }

    eliminarEnSubarbol(nodo,valor){
        if(!nodo){
            return null;
        }
        if(valor < nodo.valor){
            nodo.izquierda = this.eliminarEnSubarbol(nodo.izquierda,valor);
        }else if(valor > nodo.valor){
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha,valor);
        }else{
            if(!nodo.izquierda){
                return nodo.derecha;
            }else if(!nodo.derecha){
                return nodo.izquierda;
            }
            nodo.valor = this.encontrarMinimoValor(nodo.derecha);
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha, nodo.valor);
        }
        return nodo;
    }

    encontrarMinimoValor(nodo){
        while(nodo.izquierda){
            nodo = nodo.izquierda;
        }
        return nodo.valor;
    }

    //Recorrido de Amplitud
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
Arbol.insertar(4);
Arbol.insertar(2);
Arbol.insertar(20);
Arbol.insertar(0);
Arbol.insertar(3);
Arbol.insertar(9);
Arbol.insertar(23);
Arbol.insertar(1);
Arbol.insertar(8);
Arbol.insertar(16);
Arbol.insertar(22);
Arbol.insertar(25);
Arbol.insertar(6);
Arbol.insertar(11);
Arbol.insertar(19);
Arbol.insertar(21);
Arbol.insertar(24);
Arbol.insertar(30);

console.log("Recorrido en Amplitud: ", Arbol.recorridoAmplitud());
console.log("Recorrido de Profundidad Preorden: ", Arbol.recorridoPreorden());
console.log("Recorrido de Profundidad Orden Central: ", Arbol.recorridoOrdenCentral());
console.log("Recorrido de Profundidad Post-orden: ", Arbol.recorridoPreorden());

console.log("Es un arbol binario de busqueda", Arbol.esArbolBinarioBusqueda());
console.log("Numero de Nodos en el arbol: ",Arbol.contarNodos());
const valorBuscar = 7;
console.log(`¿El valor ${valorBuscar} se encuentra en el arbol ?`,Arbol.buscarValor(valorBuscar));

Arbol.eliminarValor(10);
console.log("Arbol despues de eliminar el valor 10: ",Arbol.recorridoOrdenCentral());
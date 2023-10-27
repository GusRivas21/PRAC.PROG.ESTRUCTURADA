//ejercicio1: bubble sort (ordenamiento por burbujas)
/*function blubleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len -1; j++){
            if(arr[j]> arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

let arr = [64,34,25,12,22,11,90];
console.log(blubleSort(arr));*/

//ejercicio2: ordenar un array de objetos por una propiedad especifica
/*function BlubleSort(arr,prop){
    let len = arr.length;
    for( let i = 0; i < len; i++){
        for(let j = 0; j < len - 1; j++){
            if(arr[j][prop]> arr[j + 1][prop]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [
    {name: "Isaac", age: 21},
    {name: "Nicole", age: 20},
    {name: "Gustavo", age: 19},
];
console.log(BlubleSort(arr,"age"));*/


//Selection

//ejercicio3:
/*function SelectionSort(arr, prop){
    let len = arr.length;
    for (let i = 0; i < len - 1; i++){
        let min = i;
        for (var j = 1; j < len; j++){
            if (arr[j][prop] < arr[min][prop]){
                min = j;
            }
        }
        if (min <= i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;

        }
    }
    return arr;
}

let arr = [
    {name: "John", age: 25},
    {name: "Mary", age: 30},
    {name: "Bob", age: 20}
];
console.log(SelectionSort(arr, "age"));*/

//ejercicio4: Selection Sort: ordenar un array de numeros en orden ascendente.
/*function SelectionSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let min = i;
        for( let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if (min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [54,14,75,32,92,131,10];
console.log(SelectionSort(arr));*/

//Insertion

//ejercicio5: insertion sort: ordenar un array de numeros de orden ascendente
/*function insertionSort(arr){
    let len = arr.length;
    for (let i = 1; i < len; i++){
        let key = arr[i];
        let j = i -1;
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j -1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [23,46,78,90,32,12,45];
console.log(insertionSort(arr));*/


//ejercicio6:
function insertionSort(arr, prop){
    let len = arr.length;
    for ( let i = 1; i < len; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j][prop] > key[prop]){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [
    {name: "john", age: 25},
    {name: "Mary", age: 30},
    {name: "Bob", age: 20}
];
console.log(insertionSort(arr,"age"));
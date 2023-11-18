/* Ejercicio 1
Teniendo un Arreglo de números al azar (llamado numbers), usá .reduce() para obtener la multiplicación total de todos los números. */

/* let numbers = [6, 1, 34, 94, 3, 17];

const multiplicaciónTotal = numbers.reduce((total, num) => total * num, 1)

console.log (multiplicaciónTotal)

/* Ejercicio 2
Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo que contenga solo los números impares. */

/* let numeros = [3, 7, 6, 13, 2, 24, 99];

let numImpares = numeros.filter(num => num % 0 === 1)

console.log (numImpares)

/* Ejercicio 3
Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor que posea el Arreglo.*/

/* let numbers = [20,5, 4, 1, 9, 2]

let ftNumMax = numbers.reduce(function(prev,acc){ 
    return (acc < prev) ? acc : prev
})

console.log(ftNumMax) */

/* Ejercicio 4
Completá la Función join que reciba un Arreglo de números y retorne un String con todos los números concatenados. */

/* let numbers = [1,2,3,4]

let unir = arr => {
    return arr.join().normalize("NFD").replace(/,/g,"")
}
console.log(unir(numbers)) */

/* Ejercicio 5
Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo con los mismos números pero eliminando los repetidos. */

/* let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]


let seRepite =  numeros.filter((num, index) => {
    return numeros.indexOf(num) != index
}) */

/* Ejercicio 6
Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota promedio final de todos los trabajos prácticos de este curso.*/

/* let notasDeTPs = [4, 7, 8, 5, 10];
let promedioTotal = 0;

let promedio = function ftPromedio(arr) {
    promedioTotal = arr.reduce((acc, current) => acc + current, 0) / arr.length;
    return promedioTotal;
}

console.log(promedio(notasDeTPs));
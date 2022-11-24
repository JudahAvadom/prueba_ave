const numeros = [2,3,5,6,7,2,7,7,4,12,13]

const pares = []
const inpares = []

for (var i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i])
    } else {
        inpares.push(numeros[i])
    }
}

console.clear()
console.log(`El arreglo tiene ${numeros.length} elementos`);
console.log(`El porcentaje de numeros pares es de ${(pares.length * 100) / numeros.length}%`);
console.log(`El porcentaje de numeros inpares es de ${(inpares.length * 100) / numeros.length}%`);
console.log(`El numero mayor es ${Math.max(...numeros)}`);
console.log(`El numero menor es ${Math.min(...numeros)}`);

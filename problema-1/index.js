const X = 5;
const Y = 2;

/** Esta variable actua como contador para mostrar el resultado final y siempre de tener un valor inicial de 0 */
let total = 0;

// Este ciclo suma el total por la cantidad de veces indicado por X
for (let i = 0; i < Y; i++) {
    total += X;
}

console.log(`El total de ${X}*${Y} es: ${total}`);
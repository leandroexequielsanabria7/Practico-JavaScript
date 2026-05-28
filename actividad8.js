let notas = [8, 6, 4, 9, 7];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}

let promedio = suma / notas.length;

if (promedio >= 6) {
    console.log(`Promedio: ${promedio}, Aprobado`);
} else {
    console.log(`Promedio: ${promedio}, Desaprobado`);
}
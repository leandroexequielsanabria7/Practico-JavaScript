const nombre = "Leandro";
const notas = [8, 6, 4, 9, 7];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}

let promedio = suma / notas.length;

if (promedio >= 7) {
    console.log(`Nombre: ${nombre}, Promedio: ${promedio.toFixed(1)}, Muy bueno`);
} else if (promedio >= 6) {
    console.log(`Nombre: ${nombre}, Promedio: ${promedio.toFixed(1)}, Aprobado`);
} else {
    console.log(`Nombre: ${nombre}, Promedio: ${promedio.toFixed(1)}, Desaprobado`);
}
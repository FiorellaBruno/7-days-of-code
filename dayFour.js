/*Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 
para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas,
te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
*/

const VALOR_MIN =0;
const VALOR_MAX = 10;
let numeroSecreto = Math.floor(Math.random() *(VALOR_MAX - VALOR_MIN +1))+VALOR_MIN;
let cantIntentos = 0;
let intentosMax = 3;
let numeroIngresado;

do {
    numeroIngresado = prompt("Elegí un número entre 0 y 10, tenes " + (intentosMax - cantIntentos) + " intentos.");
    numeroIngresado = parseInt(numeroIngresado); // Asegurarse de que sea un número
    
    if (numeroIngresado > VALOR_MAX || numeroIngresado < VALOR_MIN) {
        alert("El valor debe estar entre 0 y 10.");
    } else if (numeroIngresado === numeroSecreto) {
        alert("¡Felicitaciones, acertaste el número secreto!");
        break;
    } else {
        cantIntentos++;
        if (cantIntentos < intentosMax) {
            alert("No era correcto, ¡intenta nuevamente!");
        }
    }
} while (cantIntentos < intentosMax);

if (cantIntentos === intentosMax && numeroIngresado !== numeroSecreto){
        alert("Lo siento, no lograste adivanar el número secreto. El número era:" + numeroSecreto);
}


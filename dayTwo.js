/*
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?
*/

alert('Cuál es tu nombre?');
let nombre = prompt;

alert('Cuántos años tenes?');
let edad = prompt;

alert('Qué lenguaje de programación estás estudiando?');
let lenguaje = prompt;

//"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
alert(`Hola ${nombre}, tienes ${edad} y ya estás aprendiendo ${lenguaje}!`);

/* EXTRA
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.


Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:


1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

alert(`Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
let respouesta =prompt;

if (respuesta === '1'){
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');

}else if (respuesta === '2'){
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
} else{
    alert('Opción incorrecta, introducí el número 1 por SÍ o 2 por NO.')
}

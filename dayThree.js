/* Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End,
podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose
en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.

Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. 
Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta:
"¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología
en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/

const areaProgramming = prompt("¿En qué área de programación te interesa seguir?");
const specializationFronEnd = prompt("¿Te gustaría aprender React o Vue?");
const specializationBackEnd = prompt("¿Te gustaría aprender C# O Java?")


//Elige entre FrontEnd o BackEnd y sus respectivas especializaciones.

if (areaProgramming =='FrontEnd'){
    if(specializationFronEnd =='React' || specializationFronEnd =='Vue'){
        console.log(`"¡Muy bien, elegiste ${specializationFronEnd} en tu formación Front-End!"`);
    }console.log("Por favor seleccioná entre React o Vue");
} else if (areaProgramming =='BackEnd'){
    if(specializationBackEnd =='C#'|| specializationBackEnd =='Java'){
        console.log(`"¡Muy bien, elegiste ${specializationBackEnd} en tu formación Back-End!"`);	
    } console.log("Por favor seleccioná entre C# o Java");
}else {
    console.log("Por favor, ingresá un área válida entre FrontEnd o BackEnd");
}

//Elige entre continuar especializandose o ser Fullstack
const continuarOFullstack = prompt("Si queres seguir especializando ingresá '1' o convertirte en Fullstack ingresá '2'");

if (continuarOFullstack == '1'){
    console.log("¡Qué bueno que desees continuar especializandote!");
} else if(continuarOFullstack == '2'){
    console.log("¡Qué bueno que desees convertirte en Fullstack!");
} console.log("Por favor, selecciona entre '1' o '2'");

//Indica si desea aprender otras tecnologias
const otherTechnologies = prompt("¿Hay alguna otra tecnología que te gustará aprender? Escribí 'ok' en caso afirmativo");

while (otherTechnologies == 'ok'){
    const technologie = prompt ("¿Cuál?");
    console.log(`"¡Es realmente interesante aprender ${technologie}!"`);
    otherTechnologies = prompt("¿Hay alguna otra tecnología que te gustará aprender?");
}

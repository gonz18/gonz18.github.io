// Juego de preguntas, te responderá si acertaste y te pondrá un puntaje
// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...
let preguntas = [
    ["¿Cuánto es 3 elevado al cubo?","27"],
    ['¿Qué color resulta al mezclar el azul con el amarillo?',"verde"],
    ['¿Qué color resulta de blanco y negro',"gris"],
    ["¿Cuál es el quinto planeta en el sistema solar?","jupiter"]
]
//variables para el programa
let pregunta, respuesta
let formuladas = 0
let acertadas = 0
/*
	Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
	También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/

document.getElementById("boton").addEventListener("click",function(){
    var entrada = document.getElementById("dato").value;
    //Se comparan las variables
    if(entrada == respuesta){
        acertadas++
    }
    //Cuántas se formularan
    if(formuladas < 5){
        hazpregunta()
    }
    else{
        muestraResultado()
    }
})

//formula una pregunta al usuario

function hazpregunta(){
    let e //variable auxiliar
    //se extrae una pregunta /respuesta al azar del array
    e = preguntas.splice(numAleat(0, preguntas.legth-1),1)
    //se guardan las preguntas y respuestas
    pregunta = e[0][0]
    respuesta = e[0][1]

    //se muestra la pregunta
    document.getElementById("pregunta").innerHTML=pregunta;
    // se muestra la respuesta
    document.getElementById("dato").value="";
    //contara cada pregunta que se realice
    formuladas++
}
function muestraresultado(){
    let resultado //varable auxiliar
    switch (acertadas) {
        case 0:
            resultado = "debes estudiar mas"
            break;
    
        case 1:
            resultado = "aceraste por poco"
            break;

        case 2:
            resultado = "regular,puedes mejorar"
            break;

        case 3:
            resultado = "vas bien muchacho, vas bien"
            break;

        case 4:
            resultado = "casi ganas"
            break;
    }
}

//devuelve un numero aleatorio entero entre miin y macx (ambos

function numAleat(min,max){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}



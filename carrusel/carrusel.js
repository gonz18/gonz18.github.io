//Seleccionamos sólo una clase
const carruseljs = document.querySelector(".lista")

// Utilizaremos las siguientes variables(let)
let izquierda = carruseljs.scrollLeft - carruseljs.clientWidth
let intervalo = null
let paso = 1



// Lo que pasará automáticamente
const start = () =>{
    // Tiempo que se dará
    intervalo = setInterval(function() {
        // Me indica la dirección y los pasos a realizar
        carruseljs.scrollLeft = carruseljs.scrollLeft + paso
        //Si la lista es igual a la variable izq --> avanzará de 1 en 1
        if(carruseljs.scrollLeft === izquierda){
            paso = paso * -1
        }
        else if(carruseljs.scrollLeft === 0){
            paso = paso * -1
        }
    },10
    )
}

//qué pasara cuando se detenga, se detendrá todo
const stop = () =>{
    clearInterval(intervalo)
}

//Creamos un evento para detener la acción al pasar el mouse
carruseljs.addEventListener("mouseover", () => {
    stop()
})

carruseljs.addEventListener("mouseout", () =>{
    start()
})

// Ya está funcionando
start();
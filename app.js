// Darle funcionalidad a los botones y 
// reflejar el resultado en mi pantalla

// variable para guardar el valor del contador
let count = 0

// traemos el elemento span para reflejar el contador
let value = document.getElementById('contador')

// funcion incrementar los botones mediante eventos
function incrementar() {
    count++
    value.textContent = count
}

// funcion de decrementar: no puede haber numeros negativos
function decrementar() {
    if (count > 0) {
        count--;
        value.textContent = count
    }
}
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;
let numeroMaxIntentos = 2;
console.log(numeroSecreto);
function asignacionHTML(elemntoHTML,mostrarTexto){
    let titulo = document.querySelector(elemntoHTML);
titulo.innerHTML = mostrarTexto;
return;
}
function verificarUsuario() {
    //si llego al numero maximo de intentos terminar todo
    if(intentos==numeroMaxIntentos){
        asignacionHTML('p','LO SIENTO PERDISTE AMIGO :-(');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignacionHTML('p',`Felicidades Ganaste Amigo lo hiciste en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto<numeroUsuario){
            asignacionHTML('p','El numero secreto es Menor');
        }else{
            asignacionHTML('p','El numero secreto es Mayor');
        }
        intentos++
        limpiarCaja();
    }
    return;
    }
}
condicionesIniciales();

function condicionesIniciales(){
    asignacionHTML('h1','Bienvenido al adivina el nÚmero!!');
    asignacionHTML('p',`Ingresa un numero del 1 al ${numeroMaximo}, por favor`);
    numeroSecreto = generaNumSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generaNumSecreto() {
    //Generar un numero secreto
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya no hay mas numero para sorterar terminamos
    if(listaNumerosSecretos.length == numeroMaximo){
        asignacionHTML('p','YA SE LLEGO AL MAXIMO DE INTENTOS');
    }else{
    //Si el numero generado existe en la lista regresa la funcion
    if(listaNumerosSecretos.includes(numeroGenerado)){
        return generaNumSecreto();
    }else{
        listaNumerosSecretos.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}



function reiniciaJuego(){
    //Limpiar caja
    limpiarCaja();
    //Cambiar la Bienvenida
    //Reiniciar el contador
    //Cambiar el numero secreto
    condicionesIniciales();
    //Desactivar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
    }
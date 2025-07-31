let intentos = 0;
let numeroSecreto=0;
let listaNumerosSorteados= [];
let numeroMaximo=10;
let maximoJuegos=3;
function asignarTextoElementos(elemento,texto) {
 let titulo= document.querySelector(elemento);
 titulo.innerHTML=texto;


}
 function verificarIntento() {
    let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos); // devuelve el número de intentos
    if(numeroSecreto === numeroUsuario)
    {
      asignarTextoElementos('p',`acertaste el numero en ${intentos + 1} ${(intentos===1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else
   {
      //el usuario no acerto
      if(numeroUsuario > numeroSecreto)
      {
         asignarTextoElementos('p','el numero es menor');
      }
      else
      {
         asignarTextoElementos('p','el numero es mayor');
      }
      intentos++;
   }
   return;
 }
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto()
{
   let numeroGnerado=Math.floor(Math.random() * 10) + 1;

   // si ya sorteamos todos los numero
   if(listaNumerosSorteados.length == maximoJuegos)
   {
      asignarTextoElementos('p','Ya no puedes jugar mas');
      return;
   }
   if(listaNumerosSorteados.length == numeroMaximo)
   {
      asignarTextoElementos('p','Ya no hay mas numeros para sortear');
   }
   else
   {

   if(listaNumerosSorteados.includes(numeroGnerado))// retorna si esta en la lista
   {
      // si el numero ya fue generado, se vuelve a llamar a la funcion
      return generarNumeroSecreto();
   }else
   {
      listaNumerosSorteados.push(numeroGnerado);
      return numeroGnerado;
   }
   }
}
function condicionesIniciales() {
   asignarTextoElementos('h1','Adivina el numero secreto');
   asignarTextoElementos('p','indica un numero del 1 al 10');
   numeroSecreto=generarNumeroSecreto();
   intentos = 0;
}
function reiniciarJuego() {
   // limpiar caja
   limpiarCaja();
   // indicar mensaje de intervalo de numeros
   condicionesIniciales();
   // generar el umero aleatorio

   // deshabilitar el boton de reinicio
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   // iniciar el numero de intentos en 0
}
condicionesIniciales();
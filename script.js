let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')

let numIntentos = 0


// function mostrarRandom(respuesta){
 
//   document.getElementById('numRandom').innerHTML = numeroAzar
//   numeroAzar.innerText += respuesta
  //  console.log(numeroAzar)
// }


 function guardar(){
  document.getElementById('intentos').value = numIntentos ++
  
  intentos.textContent = "Intento Numero: " + numIntentos
    // console.log(numIntentos)


   let valorIngresado = parseInt(numeroEntrada.value)

   if(valorIngresado < 1 || valorIngresado > 100 || isNaN(valorIngresado))
    { 
      mensaje.textContent = "INGRESE UN NUMERO ENTRE 1 Y 100"
      return
    }
    if(numeroAzar === valorIngresado)
       {
       mensaje.textContent = "LE PEGASTE"
       mensaje.style.color = 'green';
      }
       else if(valorIngresado < numeroAzar){
        mensaje.textContent = "UN POCO MAS ARRIBA"
        mensaje.style.color = 'red';
       }else
       {mensaje.textContent = "UN POCO MAS ABAJO"
       mensaje.style.color = 'red';
       }
      
}

 // mostrar el objeto matematico random en pantalla
 
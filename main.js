// Simulador cancion de cancha actualizado clase3

function pedirRespuesta(pregunta) {
  return prompt(pregunta); 
}
function validarRespuesta(respuesta, correcta) {
  return respuesta && respuesta.toLowerCase() === correcta;
}
const mostrarMensaje = (mensaje) => alert(mensaje);
const RESPUESTA_CORRECTA = "es un ingles";
let intentos = 0;
let acierto = false;

while (intentos < 3 && !acierto) {
  const respuestaUsuario = pedirRespuesta("Complete la frase: El que no salta ");

  if (validarRespuesta(respuestaUsuario, RESPUESTA_CORRECTA)) {
    acierto = true;
    mostrarMensaje("Tené que cerrar el estadio, los genios hacen eso.Sapee!");
  } else {
    intentos++;

    switch (intentos) {
      case 1:
        mostrarMensaje;("se te escapo la tortuga, maestro")
        break;
      case 2:
        mostrarMensaje("Are you, by any chance, the little witch Veron?");
        break;
      case 3:
        mostrarMensaje(" Usté se tiene que arrepentir de lo que dijo.");
        break;
    }
  }
}

if (!acierto) {
  mostrarMensaje("Anda pa' alla bobo.");
}

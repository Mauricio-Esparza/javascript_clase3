function pedirRespuesta(pregunta) {
  return prompt(pregunta);
}
function validarRespuesta(respuestaUsuario, respuestaCorrecta) {
  return respuestaUsuario && respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase();
}
const mostrarMensaje = (mensaje) => alert(mensaje);
let puntaje = 0;
let pregunta = 1;
while (pregunta <= 3) {
  let respuesta;
  switch (pregunta) {
    case 1:
      respuesta = pedirRespuesta("a que equipo pertenece el estadio antonio vespucio liberti?");
      if (validarRespuesta(respuesta, "river plate")) {
        puntaje++;
        mostrarMensaje("lo genio hacen eso!");
      } else {
        mostrarMensaje("se te escapo la tortuga, la respuesta era river plate");
      }
      break;
    case 2:
      respuesta = pedirRespuesta("a que estadio le falta la mitad?");
      if (validarRespuesta(respuesta, "boca")) {
        puntaje++;
        mostrarMensaje("tiraste gas, abandonasteee");
      } else {
        mostrarMensaje("jaja la respuesta era boca");
      }
      break;
    case 3:
      respuesta = pedirRespuesta("a que equipo le dicen la academia?");
      if (validarRespuesta(respuesta, "racing")) {
        puntaje++;
        mostrarMensaje("la respuesta era racing, el racing de pepe argento");
      } else {
        mostrarMensaje("moni vos sabes algo de esto??");
      }
      break;
  }
  pregunta++;
}
mostrarMensaje("pitazo final,tus puntos son: " + puntaje + " de 3");
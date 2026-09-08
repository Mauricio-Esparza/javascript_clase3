// quiz de cultura general

function pedirRespuesta(pregunta) {
  return prompt(pregunta);
}

function validarRespuesta(respuestaUsuario, respuestaCorrecta) {
  return respuestaUsuario && respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase();
}

const mostrarMensaje = (mensaje) => alert(mensaje);

const preguntas = [
  { pregunta: "a que equipo pertenece el estadio antonio vespucio liberti?", respuesta: "river plate" },
  { pregunta: "a que estadio le falta la mitad?", respuesta: "boca" },
  { pregunta: "a que equipo le dicen el pincha?", respuesta: "estudiantes" },
  { pregunta: "yo me equivoque y pague, pero la pelota...:", respuesta: "no se mancha" }
];

let puntaje = 0;

for (let i = 0; i < preguntas.length; i++) {
  const respuestaUsuario = pedirRespuesta(preguntas[i].pregunta);

  if (validarRespuesta(respuestaUsuario, preguntas[i].respuesta)) {
    puntaje++;
    mostrarMensaje("buena esa! puntaje actual: " + puntaje);
  } else {
    mostrarMensaje("ni ahi!! la respuesta era: " + preguntas[i].respuesta);
  }
}


mostrarMensaje("pitazo final, tus puntos son: " + puntaje + " de " + preguntas.length);


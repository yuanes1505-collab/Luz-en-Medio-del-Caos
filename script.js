function mostrarFrase() {
  const mensajes = [
    "Respira. Todo lo que sientes pasará, pero tú te quedarás más fuerte.",
    "No estás solo. Siempre hay una nueva oportunidad esperándote.",
    "Cada día que eliges seguir adelante, ya estás ganando.",
    "Perdonarte a ti mismo también es parte de sanar.",
    "Dios no te deja solo, incluso cuando el silencio parece hablar más fuerte.",
    "No necesitas tener todas las respuestas hoy. Solo da el siguiente paso.",
    "A veces el dolor no se va, pero tú aprendes a brillar incluso con él."
  ];

  const indice = Math.floor(Math.random() * mensajes.length);
  const mensaje = mensajes[indice];
  document.getElementById("frase").textContent = mensaje;
}

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase(); // lo que escribe el usuario
  const tarjetas = document.querySelectorAll(".card");

  tarjetas.forEach(card => {
    const nombre = card.dataset.nombre.toLowerCase();
    if (nombre.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

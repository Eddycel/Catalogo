const buscador = document.getElementById("buscador");
if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    document.querySelectorAll(".producto").forEach((prod) => {
      const nombre = prod.querySelector(".nombre-producto").textContent.toLowerCase();
      const coincide = nombre.includes(texto);
      prod.style.display = coincide ? "flex" : "none";
    });
  });
}

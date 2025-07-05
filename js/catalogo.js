const telefono = "5353427960";

fetch("data/productos.json")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("productos");
    let productosFiltrados = [];

    if (categoria === "destacados") {
      productosFiltrados = data.filter(p => p.destacado === true).slice(0, 4);
    } else {
      productosFiltrados = data.filter(p => p.categoria === categoria);
    }

    productosFiltrados.forEach(prod => {
      const mensaje = `Hola, estoy interesado en el producto: ${encodeURIComponent(prod.nombre)}`;
      const tarjeta = `
        <section class="producto">
          <img src="${prod.imagen}" alt="${prod.nombre}" />
          <h2 class="nombre-producto">${prod.nombre}</h2>
          <p class="precio">${prod.precio}</p>
          <p class="descripcion">${prod.descripcion}</p>
          <a class="whatsapp" href="https://wa.me/${telefono}?text=${mensaje}" target="_blank">
            Contactar por WhatsApp
          </a>
        </section>
      `;
      contenedor.innerHTML += tarjeta;
    });
  })
  .catch(error => {
    document.getElementById("productos").innerHTML = "<p>Error al cargar los productos.</p>";
    console.error(error);
  });

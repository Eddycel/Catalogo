fetch("productos.json")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("productos");
    const telefono = "5355555555";
    const categoria = "telefonos"; // Puedes hacer que esto dependa de la página

    const productosFiltrados = data.filter(p => p.categoria === categoria);

    productosFiltrados.forEach(prod => {
      const mensaje = encodeURIComponent(`Hola, estoy interesado en el producto: ${prod.nombre}`);
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
  });


// Productos disponibles para mostrar en la portada
const productos = [
  {
    nombre: "Samsung Galaxy S24",
    precio: "$799",
    descripcion: "Pantalla AMOLED, cámara triple, rendimiento profesional.",
    imagen: "img/telefonos/samsung-s24.jpg"
  },
  {
    nombre: "iPhone 16",
    precio: "$899",
    descripcion: "Chip A18, Face ID, ecosistema Apple de última generación.",
    imagen: "img/telefonos/iphone-16.jpg"
  },
  {
    nombre: "Cover para iPhone 16",
    precio: "$20",
    descripcion: "Funda de silicona con MagSafe, resistente y elegante.",
    imagen: "img/accesorios/cover-iphone16.jpg"
  },
  {
    nombre: "Cargador Inalámbrico",
    precio: "$25",
    descripcion: "Carga rápida con diseño compacto y seguro.",
    imagen: "img/accesorios/cargador-inalambrico.jpg"
  },
  {
    nombre: "Ventilador Recargable",
    precio: "$32",
    descripcion: "Compacto, potente, ideal para el verano.",
    imagen: "img/electrodomesticos/ventilador-recargable.jpg"
  },
  {
    nombre: "Lámpara Recargable",
    precio: "$18",
    descripcion: "Luz LED ajustable, portátil y elegante.",
    imagen: "img/electrodomesticos/lampara-recargable.jpg"
  }
];

const contenedor = document.getElementById("ofertas");
const telefono = "5353427960"; // 👈 Reemplaza con tu número

// Mezclar y mostrar 2 ofertas aleatorias
const seleccionadas = productos.sort(() => Math.random() - 0.5).slice(0, 2);

seleccionadas.forEach(prod => {
  const mensaje = `Hola, estoy interesado en el producto: ${encodeURIComponent(prod.nombre)}`;
  const card = `
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
  contenedor.innerHTML += card;
});

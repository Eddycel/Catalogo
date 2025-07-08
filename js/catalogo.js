document.addEventListener("DOMContentLoaded", () => {
  // Variables generales
  const telefono = "5353427960";
  // Esta línea NO debe estar aquí si ya defines `categoria` en el HTML.
  // const categoria = "accesorios";

let productosData = [];

fetch("data/productos.json")
  .then(res => res.json())
  .then(data => {
    let productosFiltrados = [];

    if (typeof categoria === "string" && categoria === "destacados") {
      productosFiltrados = data.filter(p => p.destacado === true).slice(0, 4);
    } else if (typeof categoria === "string") {
      productosFiltrados = data.filter(p => p.categoria === categoria);
    }

    productosData = productosFiltrados;

    console.log("Categoría activa:", categoria);
    console.log("Productos encontrados:", productosData.map(p => p.nombre));

    renderProductos(productosData);
  });

  // Aquí comienza la función que pinta los productos en el HTML
  function renderProductos(productos) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(prod => {
      const mensaje = encodeURIComponent(`Hola, estoy interesado en el producto: ${prod.nombre}`);
      contenedor.innerHTML += `
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
    });
  }

  // 📦 Conectamos los filtros dinámicos si existen en el HTML
  const filtroMarca = document.getElementById("filtro-marca");
  const filtroTipo = document.getElementById("filtro-tipo");

  if (filtroMarca && filtroTipo) {
    filtroMarca.addEventListener("change", aplicarFiltros);
    filtroTipo.addEventListener("change", aplicarFiltros);
  }

  function aplicarFiltros() {
    const marca = filtroMarca.value;
    const tipo = filtroTipo.value;

    const resultado = productosData.filter(p =>
      (marca === "" || p.marca === marca) &&
      (tipo === "" || p.tipo === tipo)
    );

    console.log("Filtro aplicado → Marca:", marca, "Tipo:", tipo);
    console.log("Resultado del filtro:", resultado.map(p => p.nombre));

    renderProductos(resultado);
  }
});

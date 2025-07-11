document.addEventListener("DOMContentLoaded", () => {
  const telefono = "5353427960";
  let productosData = [];

  fetch("data/productos.json")
    .then(res => res.json())
    .then(data => {
      let productosFiltrados = [];

      if (typeof categoria === "string" && categoria === "destacados") {
        productosFiltrados = data.filter(p => p.destacado === true);
      } else if (typeof categoria === "string") {
        productosFiltrados = data.filter(p => p.categoria === categoria);
      }

      productosData = productosFiltrados;

      console.log("Categoría activa:", categoria);
      console.log("Productos encontrados:", productosData.map(p => p.nombre));

      renderProductos(productosData);
    });

  function renderProductos(productos) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(prod => {
      const mensaje = encodeURIComponent(`Hola, estoy interesado en el producto: ${prod.nombre}`);

      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");

      tarjeta.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" class="product-image" />
        <h3 class="product-title">${prod.nombre}</h3>
        <p class="product-price">$${prod.precio}</p>
        <p class="product-description">${prod.descripcion || ""}</p>
        <div class="product-buttons">
          <a class="btn btn-primary" href="https://wa.me/${telefono}?text=${mensaje}" target="_blank">
            Contactar por WhatsApp
          </a>
        </div>
      `;

      contenedor.appendChild(tarjeta);
    });
  }

  // 🎯 Filtros dinámicos
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

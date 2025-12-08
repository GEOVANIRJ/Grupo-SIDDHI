// PRODUCTOS DEMO
const productos = [
    { id: 1, nombre: "Letrero MDF 3mm", precio: 120, categoria: "letras", imagen: "https://via.placeholder.com/300x200" },
    { id: 2, nombre: "Decoración Mandala", precio: 250, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200" },
    { id: 3, nombre: "Llaveros personalizados", precio: 60, categoria: "regalos", imagen: "https://via.placeholder.com/300x200" },
    { id: 4, nombre: "Nombre en acrílico", precio: 180, categoria: "personalizados", imagen: "https://via.placeholder.com/300x200" },
    { id: 5, nombre: "Portarretratos", precio: 150, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200" },
];

// MOSTRAR PRODUCTOS
function mostrarProductos(lista) {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${p.imagen}">
                <h4>${p.nombre}</h4>
                <p>$${p.precio}</p>
                <button onclick="agregarCarrito(${p.id})">Agregar</button>
            </div>
        `;
    });
}

mostrarProductos(productos);

// FILTRAR
function filtrar(cat) {
    if (cat === "todos") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === cat);
        mostrarProductos(filtrados);
    }
}

// CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarCarrito() {
    const lista = document.getElementById("carrito-lista");
    const total = document.getElementById("carrito-total");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((p, index) => {
        lista.innerHTML += `
            <li>
                ${p.nombre} - $${p.precio}
                <button onclick="quitar(${index})">X</button>
            </li>
        `;
        suma += p.precio;
    });

    total.textContent = suma;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

actualizarCarrito();

function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function quitar(i) {
    carrito.splice(i, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// WhatsApp
function enviarWhatsApp() {
    let mensaje = "Hola, quiero cotizar mi pedido:%0A";

    carrito.forEach(p => {
        mensaje += `• ${p.nombre} - $${p.precio}%0A`;
    });

    mensaje += `%0ATotal: $${document.getElementById("carrito-total").textContent}`;

    window.open(`https://wa.me/5215512345678?text=${mensaje}`);
}

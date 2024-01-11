let carrito = []; // Array para almacenar los productos del carrito

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    actualizarCarrito(); // Llamamos a la función para actualizar la visualización del carrito
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    // Obtener el elemento del carrito en el DOM
    let carritoElemento = document.getElementById('carrito');

    // Limpiar el contenido del carrito en el DOM
    carritoElemento.innerHTML = '';

    // Recorrer los productos en el carrito y agregarlos al DOM
    carrito.forEach(function(producto) {
        let productoElemento = document.createElement('li');
        productoElemento.textContent = producto.nombre + ' - $' + producto.precio;
        carritoElemento.appendChild(productoElemento);
    });
}

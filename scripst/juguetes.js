
fetch('../json/juguetes.json')
  .then(response => response.json())
  .then(data => {
    // Obtenemos el contenedor donde deseamos mostrar los productos
    const contenedorJuguetes = document.getElementById('contenedorJuguetes');

    // Estos divs van fuera del forech para que no se cree un container por cada producto
    const contDiv = document.createElement('div');
    contDiv.classList.add('container', 'card-Json');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Recorremos los datos obtenidos del archivo juguetes.json
    // y creamos elementos HTML para cada producto
    data.forEach(producto => {
      // creamos los elementos div 
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-3');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      // creamos un elemento img para la imagen del producto
      const img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = `Producto ${producto.id}`;
      img.classList.add('card-img-top');

      // creamos un elemento div para el cuerpo de la card
      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.classList.add('card-body');

      // creamos un elemento h3 para el nombre del producto
      const h3 = document.createElement('h3');
      h3.textContent = producto.nombre;
      h3.classList.add('card-title');

      // creamos un elemento p para el precio del producto
      const pPrecio = document.createElement('p');
      pPrecio.textContent = `Precio: $${producto.precio}`;
      pPrecio.classList.add('card-text');

      // creamos un elemento button para el botón "Agregar al Carrito"
      const btnAgregar = document.createElement('button');
      btnAgregar.textContent = 'Agregar al Carrito';
      btnAgregar.classList.add('btn', 'btn-primary');

      // Agregamos los elementos creados como hijos en el orden deseado
      cardBodyDiv.appendChild(h3);
      cardBodyDiv.appendChild(pPrecio);
      cardBodyDiv.appendChild(btnAgregar);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
      rowDiv.appendChild(colDiv);
    });

    // Agregamos la fila a la columna
    contDiv.appendChild(rowDiv);

    // Agrega el contenedor al contenedor principal
    contenedorJuguetes.appendChild(contDiv);   
      
  })
  .catch(error => {
    console.error('Error al cargar los datos de juguetes.json:', error);
  });


  // Hacer una solicitud HTTP para obtener los datos del archivo mangas.json
  fetch('../json/mangas.json')
  .then(response => response.json())
  .then(data => {
    // Los datos del archivo mangas.json están disponibles en la variable "data"
    // Aquí puedes realizar las operaciones necesarias con los datos, por ejemplo, mostrarlos en la página
    console.log(data); // Puedes ver los datos en la consola del navegador
  })
  .catch(error => {
    console.error('Error al cargar los datos de mangas.json:', error);
  });
  
  
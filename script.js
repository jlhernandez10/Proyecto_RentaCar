// Obtener el elemento del botón
const btn = document.querySelector('button');

// Agregar un evento al botón
btn.addEventListener('click', () => {
  // Obtener el elemento del párrafo
  const parrafo = document.querySelector('p');

  // Cambiar el contenido del párrafo
  parrafo.textContent = 'Este párrafo ha sido cambiado con JavaScript';
});

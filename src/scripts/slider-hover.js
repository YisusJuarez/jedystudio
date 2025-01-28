const carousel = document.querySelectorAll("carousel");
const images = carousel.querySelectorAll("img");

// Evento para detectar si el mouse está sobre una imagen
// carousel.addEventListener("mousemove", (event) => {
//   // Obtener la posición del mouse
//   const mouseX = event.clientX;

//   // Reiniciar el filtro de todas las imágenes
//   images.forEach((img) => {
//     img.classList.add("grayscale");
//   });

//   // Identificar la imagen debajo del mouse
//   images.forEach((img) => {
//     const rect = img.getBoundingClientRect();
//     if (mouseX >= rect.left && mouseX <= rect.right) {
//       img.classList.remove("grayscale"); // Quitar el filtro gris
//     }
//   });
// });

// // Asegurarse de que todas las imágenes vuelvan a ser grises al salir del carrusel
// carousel.addEventListener("mouseleave", () => {
//   images.forEach((img) => {
//     img.classList.add("grayscale");
//   });
// });

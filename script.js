const input = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

function agregarTarea() {
  const textoTarea = input.value.trim();

  if (textoTarea === "") {
    mensaje.textContent = "⚠️ Escribe una tarea antes de agregar.";
    return;
  }

  mensaje.textContent = "";

  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  const botonEliminar = document.createElement("button");

  spanTexto.textContent = textoTarea;
  botonEliminar.textContent = "X";
  botonEliminar.classList.add("btn-eliminar");

  spanTexto.onclick = function() {
    spanTexto.classList.toggle("completada");
  };

  botonEliminar.onclick = function() {
    li.remove();
  };

  li.appendChild(spanTexto);
  li.appendChild(botonEliminar);
  lista.appendChild(li);

  input.value = "";
}

botonAgregar.onclick = agregarTarea;

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});





// agregarBtn.addEventListener('click', function() {
//     const tarea = tareaInput.value.trim();
//     if (tarea) {
//         lista.textContent = `${tarea}`;
//     } else {
//         lista.textContent = `Por favor, escribe tu tarea.`;
//     }
// }); 


// // Cambiar tema
// let cambiarTema = document.getElementById('temaBtn');
// temaBtn.onclick = function () {
//     document.body.classList.toggle('dark');
// };

// // Mostrar - Ocultar Imagen
// const mostrarBtn = document.getElementById('mostrarBtn');
// const foto = document.getElementById('foto');

// mostrarBtn.onclick = function () {
//     if (foto.style.display === 'none') {
//         foto.style.display = 'block';
//         mostrarBtn.textContent = 'Ocultar Imagen';
//     } else {
//         foto.style.display = 'none';
//         mostrarBtn.textContent = 'Mostar Imagen';
//     }
// };

// // Contador
// const likeBtn = document.getElementById('likeBtn');
// const contador = document.getElementById('contador');
// let likes = 0;

// likeBtn.addEventListener('click', function () {
//     likes ++
//     contador.textContent = `Likes: ${likes}`;
// });
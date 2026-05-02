// Muestra la pantalla de detalle con datos de prueba
function showDetail(name) {
  // Oculta pantalla principal y muestra la de detalle
  document.getElementById("main-screen").style.display = "none";
  document.getElementById("detail-screen").style.display = "block";

  // Rellena la información (temporal)
  document.getElementById("detail-name").textContent = name;
  document.getElementById("detail-image").src = "https://via.placeholder.com/250";
  document.getElementById("detail-ki").textContent = "KI de prueba";
  document.getElementById("detail-description").textContent = "Aquí irá la descripción completa del personaje.";
}

// Regresa a la pantalla principal
function goBack() {
  document.getElementById("detail-screen").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
}

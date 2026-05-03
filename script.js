function showDetail(name) {
  document.getElementById("main-screen").style.display = "none";
  document.getElementById("detail-screen").style.display = "block";

  document.getElementById("detail-name").textContent = name;
  document.getElementById("detail-image").src = "https://via.placeholder.com/250";
  document.getElementById("detail-ki").textContent = "KI de prueba";
  document.getElementById("detail-description").textContent = "Aquí irá la descripción completa del personaje.";
}

function goBack() {
  document.getElementById("detail-screen").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
}

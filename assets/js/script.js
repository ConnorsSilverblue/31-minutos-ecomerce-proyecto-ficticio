// BOTÓN SUBIR
const botonsubir = document.getElementById("botonsubir");

botonsubir.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const botonAtrasIndex = document.getElementById("botonatras");

if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  botonAtrasIndex.addEventListener("click", function () {
    alert("No hay página anterior 😅 (pero el botón funciona!)");
  });
}

const botonsubir = document.getElementById("botonsubir");

botonsubir.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("Subiendo ⬆️");
});

const botonatras = document.getElementById("botonatras");

botonatras.addEventListener("click", function () {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    alert("No hay página anterior 😅 (pero el botón funciona!)");
  }
});

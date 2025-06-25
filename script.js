const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
  const clickDentro = e.target.closest(".envoltura-sobre");

  if (clickDentro) {
    if (!envoltura.classList.contains("abierto")) {
      envoltura.classList.add("abierto");
      carta.classList.add("abierta");
    }
  } else {
    if (envoltura.classList.contains("abierto")) {
      envoltura.classList.remove("abierto");
      carta.classList.remove("abierta");
      carta.classList.add("cerrando");

      setTimeout(() => {
        carta.classList.remove("cerrando");
      }, 800);
    }
  }
});
  
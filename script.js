function abrirFoto(caminho) {
  const modal = document.getElementById("modalFoto");
  const foto = document.getElementById("fotoModal");

  if (!modal || !foto) {
    console.error("Modal de foto não encontrado.");
    return;
  }

  foto.src = caminho;
  modal.classList.add("ativo");
  document.body.classList.add("modal-aberto");
}

function fecharFoto() {
  const modal = document.getElementById("modalFoto");
  const foto = document.getElementById("fotoModal");

  if (!modal || !foto) return;

  modal.classList.remove("ativo");
  foto.src = "";
  document.body.classList.remove("modal-aberto");
}

function fecharFotoFora(event) {
  if (event.target && event.target.id === "modalFoto") {
    fecharFoto();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharFoto();
  }
});

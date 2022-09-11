let imagem = document.getElementById("troca-imagem");

imagem.style.opacity = 0;

function trocarImagem() {
  if (imagem.style.opacity == 0) {
    imagem.style.opacity = 1;
  } else {
    imagem.style.opacity = 0;
  }
}

setInterval(() => {
  trocarImagem();
}, 4000);

// assets/scripts/carrossel.js

let indiceAtual = 0;
const itens = document.querySelectorAll(".carrossel-item");
const total = itens.length;
const intervalo = 4000; // tempo em ms (4 segundos)

function mostrarItem(index) {
  itens.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

// Botão próximo
document.querySelector(".carrossel-btn.next").addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % total;
  mostrarItem(indiceAtual);
});

// Botão anterior
document.querySelector(".carrossel-btn.prev").addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + total) % total;
  mostrarItem(indiceAtual);
});

// Troca automática
setInterval(() => {
  indiceAtual = (indiceAtual + 1) % total;
  mostrarItem(indiceAtual);
}, intervalo);

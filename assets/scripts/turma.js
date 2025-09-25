let alunos = [];

// Carregar JSON
fetch("assets/data/turma.json")
  .then(res => res.json())
  .then(dados => {
    alunos = dados;
    renderizarAlunos(alunos);
  });

// Renderizar lista
function renderizarAlunos(lista) {
  let listaDiv = document.getElementById("listaAlunos");
  listaDiv.innerHTML = "";

  if (lista.length === 0) {
    listaDiv.innerHTML = `<p class="text-center text-secondary">Nenhum aluno encontrado.</p>`;
    return;
  }

  lista.forEach(aluno => {
    listaDiv.innerHTML += `
      <div class="col-md-4">
        <div class="card bg-dark text-white shadow h-100">
          <div class="card-body">
            <h5 class="card-title text-warning">${aluno.nome}</h5>
            <p class="card-text">${aluno.email}</p>
          </div>
        </div>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const busca = document.getElementById("busca");
  if (busca) {
    busca.addEventListener("input", e => {
      let termo = e.target.value.toLowerCase();
      let filtrados = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(termo)
      );
      renderizarAlunos(filtrados);
    });
  }
});

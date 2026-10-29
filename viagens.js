// Filtra as viagens pelas abas Todas / Pessoais / Trabalho
const filtros = document.querySelectorAll(".filtro");
const viagens = document.querySelectorAll(".viagem");
const meses = document.querySelectorAll(".mes");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    filtros.forEach((f) => f.classList.remove("filtro-ativo"));
    filtro.classList.add("filtro-ativo");

    const tipo = filtro.dataset.tipo;

    // mostra só as viagens do tipo escolhido
    viagens.forEach((viagem) => {
      const mostrar = tipo === "todas" || viagem.dataset.tipo === tipo;
      viagem.style.display = mostrar ? "flex" : "none";
    });

    // esconde o mês que ficou sem nenhuma viagem
    meses.forEach((mes) => {
      const temViagem = [...mes.querySelectorAll(".viagem")].some(
        (v) => v.style.display !== "none"
      );
      mes.style.display = temViagem ? "block" : "none";
    });
  });
});
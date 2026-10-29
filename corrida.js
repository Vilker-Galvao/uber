const opcoes = document.querySelector(".opcao");
const botao = document.getElementById("botao-confirmar");

opcoes.forEach((opcao) => {
    opcao.addEventListener("click", () => {
        opcoes.forEach((o) => o.classList.remove("opcao-ativa"));
        opcoes.classList.add("opcao-ativa");
        botao.textContent = "Confirm" + opcao.dataset.nome;
    });
})
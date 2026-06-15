const input = document.getElementById("input-codigo");

input.addEventListener("beforeinput", (e) => {
    if (e.data && /[^a-zA-Z0-9]/.test(e.data)) {
        e.preventDefault();
    }
});

const telaBusca = document.getElementById("pagina1");
const telaRastreio = document.getElementById("pagina2");

const btnBuscar = document.getElementById("btn-buscar");
const btnVoltar = document.getElementById("btn-voltar");

const rastreio = {
    codigo: "AB123456789BR",
    status: "Em trânsito",
    origem: "Curitiba - PR",
    destino: "São Paulo - SP",
    ultimaAtualizacao: "14/06/2026 - 15:30"
};

btnBuscar.addEventListener("click", () => {

    if (input.value === rastreio.codigo) {

        document.getElementById("codigo-rastreio").textContent = rastreio.codigo;
        document.getElementById("status-rastreio").textContent = rastreio.status;
        document.getElementById("origem-rastreio").textContent = rastreio.origem;
        document.getElementById("destino-rastreio").textContent = rastreio.destino;
        document.getElementById("ultima-atualizacao").textContent = rastreio.ultimaAtualizacao;

        telaBusca.style.display = "none";
        telaRastreio.style.display = "block";
    }
    
});

btnVoltar.addEventListener("click", () => {
    input.value = "";

    telaRastreio.style.display = "none";
    telaBusca.style.display = "block";
});
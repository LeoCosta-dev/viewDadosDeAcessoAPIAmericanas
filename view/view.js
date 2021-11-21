const pesquisaHeader = document.getElementById("pesquisa-header");
const buscarHeader = document.getElementById("buscar-header")
const pesquisaSection = document.getElementById("pesquisa-section");
const buscarSection = document.getElementById("buscar-section")
const botaoBusca = document.getElementsByClassName("buscar");

function campoDeBuscaSection(){
    pesquisaHeader.style.display = "flex";
    pesquisaSection.style.display = "none";
    busca(buscarSection.value)
}

function campoDeBuscaHeader(){
    busca(buscarHeader.value)
}
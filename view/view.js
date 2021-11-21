const pesquisaHeader = document.getElementById("pesquisa-header");
const buscarHeader = document.getElementById("buscar-header")
const pesquisaSection = document.getElementById("pesquisa-section");
const buscarSection = document.getElementById("buscar-section")
const botaoBusca = document.getElementsByClassName("buscar");
const cards = document.getElementById("cards");

function campoDeBuscaSection(){
    pesquisaHeader.style.display = "flex";
    pesquisaSection.style.display = "none";
    busca(buscarSection.value)
}

function campoDeBuscaHeader(){
    busca(buscarHeader.value)
}

function insereCards(arr){
    cards.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        cards.innerHTML+=`<div class = "card-produtos">
        <div class = "nome"> 
            <h3> ${arr[i].name} </h3> 
        </div>
        <div class = "id">
            <p>Id</p>
            <p> ${arr[i].id} </p>
        </div>
        <div class = "tipo">
            <p>Tipo</p>
            <p> ${arr[i].type} </p>
        </div>
        <div class = "meta">
            <div class = "pontos">
                <p>Pontuação</p>
                <p> ${arr[i]._meta.score} </p>
            </div>
            <div class = "visitas">
                <p>visitas no site</p>
                <p> ${arr[i]._meta.visitsClickCount} </p>
            </div>
        </div>

    </div>`
    }
}
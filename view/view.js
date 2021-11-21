const pesquisaHeader = document.getElementById("pesquisa-header");
const buscarHeader = document.getElementById("buscar-header")
const pesquisaSection = document.getElementById("pesquisa-section");
const buscarSection = document.getElementById("buscar-section")
const botaoBusca = document.getElementsByClassName("buscar");
const cards = document.getElementById("cards");
const titulo = document.getElementById("titulo");

function campoDeBuscaSection(){
    event.preventDefault();
    if(buscarSection.value){
        pesquisaHeader.style.display = "flex";
        pesquisaSection.style.display = "none";
        cards.style.display = "grid"
        busca(buscarSection.value)
        buscarSection.value = ''
    } else {
        let mensagem = document.createElement('p')
        mensagem.textContent = 'Você não pode fazer uma pesquisa vazia!'
        mensagem.setAttribute('id', 'naoconfirma')
        mensagem.style.color = 'red'
        if (!document.getElementById('naoconfirma')) {
            pesquisaSection.appendChild(mensagem)
            setTimeout(() => {
                mensagem.remove()
            }, 3000)
        }
        buscarSection.value = ''
    }
}

function campoDeBuscaHeader(){
    event.preventDefault();
    if(buscarHeader.value){
        busca(buscarHeader.value)
        buscarHeader.value = ''
    } else {
        let mensagem = document.createElement('p')
        mensagem.textContent = 'Você não pode fazer uma pesquisa vazia!'
        mensagem.setAttribute('id', 'naoconfirma')
        mensagem.style.color = 'yellow'
        if (!document.getElementById('naoconfirma')) {
            pesquisaHeader.appendChild(mensagem)
            setTimeout(() => {
                mensagem.remove()
            }, 3000)
            buscarHeader.value = ''
        }
    }
}

function telaInicial(){
    pesquisaHeader.style.display = "none";
    pesquisaSection.style.display = "flex";
    cards.style.display = "none"
    buscarSection.value = ''
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
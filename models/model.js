function busca(str){
    $.ajax({
        url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${str}&source=nanook`,
        method: 'get',
        success: (response) => {
            console.log(response)           
        }
    })
    }
const btn = document.getElementById('btn')

function valida(){
    const url = document.getElementById('inpt').value
    if(!url){
        alert('Url invalida')
        return
    }
    console.log(`Sua url ${url}`)


    let heards = {
        "content-Type" : "application/json",
        "apiKey" : "sua_chave_aqui"
    }

    let request = {
        destination: url,
        domain: { fullname : "rebrand.ly"}
    }

    fetch('https://api.rebrandly.com/v1/links', {
        method: 'POST',
        headers: heards,
        body: JSON.stringify(request)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json.shortUrl);
        let table = document.getElementById('inpt')
        table.value = json.shortUrl
    })
}
btn.addEventListener('click', valida);
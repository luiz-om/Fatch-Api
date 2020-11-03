let cep = document.querySelector('#cep')


let showData = (result) => {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
  
d
        }
    }
}


cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '')

    var options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then(response => {
            response.json()
            .then(data => showData(data))
        })
        .catch(e => console.log('Deu erro Mensagem:' + e.message))

    console.log(search)
})
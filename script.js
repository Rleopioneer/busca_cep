/****************CONSULTA CEP********************/

const formulario = document.querySelector('#formCadastro')
const container = document.querySelector('.container')
const inputs = document.querySelector('.inputs')
const cep = document.querySelector('#cep')
const rua = document.querySelector('#rua')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')
const enviar = document.querySelector('#enviar')
const erro = document.querySelectorAll('.erro')
const msgErro = document.querySelector('.erro')

//Requisição ao digitar CEP
const foradeFoco = (e) => {
    
    function transformarEmJson(response){
        return response.json()
    }
    
    function exibirNaTela(response){        
        const efeito = () => {
            bairro.value = `........`
            cidade.value = `........`
            rua.value = `........`
            estado.value = `........`
        }
    
        setTimeout(function(){
            bairro.value = `${response.bairro}`
            cidade.value = `${response.localidade}`
            rua.value = `${response.logradouro}`
            estado.value = `${response.uf}`
        }, 3000)
    
        return efeito()
        
    }
    
    function exibirErro(){
        let cepDigitado = cep.value
        
        if (cepDigitado.length > 8 || cepDigitado == '' || !cepDigitado ) {
            console.log('digite somente valores numéricos e no máximo 8')
            let span = cep.nextSibling.nextSibling
            span.innerText = 'digite somente valores numéricos e no máximo 8'

        }  else {
            let span = cep.nextSibling.nextSibling
            span.innerText = ''

        }

    }
        
    
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`).then(transformarEmJson).then(exibirNaTela).catch(exibirErro)
    
}

cep.addEventListener('blur', foradeFoco)


//Envio do Formulário
formulario.onsubmit = (e) => {
    e.preventDefault()

    let temErro = false

    if (!cep.value) {
        temErro = true
        let span = cep.nextSibling.nextSibling
        span.innerText = 'Digite um CEP válido'
    } else {
        let span = cep.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!rua.value) {
        temErro = true
        let span = rua.nextSibling.nextSibling
        span.innerText = 'Digite uma rua válida'
    } else {
        let span = rua.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!bairro.value) {
        temErro = true
        let span = bairro.nextSibling.nextSibling
        span.innerText = 'Digite um Bairro válido'
    } else {
        let span = bairro.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!cidade.value) {
        temErro = true
        let span = cidade.nextSibling.nextSibling
        span.innerText = 'Digite uma Cidade válida'
    } else {
        let span = cidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!estado.value) {
        temErro = true
        let span = estado.nextSibling.nextSibling
        span.innerText = 'Digite um Estado válido'
    } else {
        let span = estado.nextSibling.nextSibling
        span.innerText = ''
    } 

    if (!temErro) {
        formulario.submit()
    }

}

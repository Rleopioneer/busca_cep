/****************DESAFIO CONSULTA CEP********************/
/* 1 -​ Criar um formulário com os campos CEP, logradouro, cidade, uf e número. ***
2 - Estilizar os campos de formulários. ***
3 - Atribuir os campos dos formuários em variáveis.****
3 - criar preventDefault. ***
4 - Criar função para fazer requisição para a API viaCEP.****
5 - Encontrar a resposta da API equivalente ao valor digitado no campo CEP (filter() ou reduce()) ****Não foi necessário***
6 - Validar o valor digitado (8 dígitos e sem espaço ou traço) ****???
7 - Inserir os valores da resposta nos outros campos do formulário****

Quando o usuário preencher o CEP os outros campos deverão ser preenchidos automaticamente.
​O usuário deverá digitar o CEP e quando chegar no valor de 8 digitos ou fizer o evento blur, deverá ser feita uma requisição do tipo GET para a api do ViaCEP (https://viacep.com.br/) passando o valor do CEP.

Exemplo: ​viacep.com.br/ws/VALOR_DO_CEP/json/

A API retornará os valores que devem ser inseridos nos campos, conforme na imagem.​ 
*/

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

# Busca_CEP

Cria página simples simulando formulário de preenchimento de endereço. Endereço é preenchido de acordo com o CEP informado pelo usuário.

Desenvolvendo habilidades adquiridas no curso de formação   [Formação Fullstack JavaScript ](https://go.hotmart.com/O72157469D) 



## Conteúdo

- [Meu Processo](#my-process)
  - [Desenvolvido com](#built-with)
  - [O que aprendi](#what-i-learned)
  - [Recursos Úteis](#useful-resources)
- [Autor](#author)



## Meu Processo

### Desenvolvido com

- HTML5 
- CSS3
- SASS
- JavaScript

### O que aprendi

Validação do formulário antes do envio. Valor do CEP informado é capturado após evento de blur, o valor é utilizado para preencher a URL para requisição da API. Após alguns segundos a resposta é inserida preenchendo o restante do formulário com o endereço informado de acordo com o CEP.

Evento blur:

```javascript
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
```

### Conteúdos úteis

- [ViaCEP](https://viacep.com.br/)

## Author

- [Ramon Leonardo](https://www.linkedin.com/in/ramon-leonardo-rx/)
- Frontend Mentor - [@Rleopioneer](https://www.frontendmentor.io/profile/yourusername)
- Instagram- [@rcl.leo](https://www.instagram.com/rcl.leo/)

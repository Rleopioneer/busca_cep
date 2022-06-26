# Frontend Mentor - QR code component solution

Esta é a minha solução  para o  [QR code component challenge ](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H) do Frontend Mentor.

Desenvolvendo habilidades adquiridas no curso de formação   [Formação Fullstack JavaScript ](https://go.hotmart.com/O72157469D) 



## Conteúdo

- [Visão Geral](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu Processo](#my-process)
  - [Desenvolvido com](#built-with)
  - [O que aprendi](#what-i-learned)
  - [Recursos Úteis](#useful-resources)
- [Autor](#author)


## Links

- GitHub: (https://rleopioneer.github.io/qr_code/)

## Meu Processo

### Desenvolvido com

- HTML5 
- CSS3
- SASS
- Position Relative e Absolute
- Transform Translate

### O que aprendi

Desenvolvi a página posicionando os elementos com position relative e absolute em duas situações diferentes, ao invés de margin: 0 auto ou Flexbox, para tentar garantir sua centralização.

Posicionamento do QR code:

```css
body .container .qrcard {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 400px;
```
Footer:

```css
body .attribution {
  color: #1f3251;
  position: absolute;
  bottom: 10%;
  left: 50%;
  margin-bottom: -10px;
  margin-left: -191.9px;
  text-align: center;
```

### Conteúdos úteis

- [Google Fonts]([Browse Fonts - Google Fonts](https://fonts.google.com/)) 

## Author

- [Ramon Leonardo](https://www.linkedin.com/in/ramon-leonardo-rx/)
- Frontend Mentor - [@Rleopioneer](https://www.frontendmentor.io/profile/yourusername)
- Instagram- [@rcl.leo](https://www.instagram.com/rcl.leo/)

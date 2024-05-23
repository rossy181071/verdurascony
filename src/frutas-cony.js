import { LitElement, css, html } from 'lit'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FrutasCony extends LitElement {
  static get properties() {
    return {
      /**
       * Este  es el titulo de mi pagina
       */
      title:  { type: String },
      
      /**
       * Este es el subtitulo de mi pagina
       */
      subtitulo: { type: String },

      /**
       *Este es el parrafo 1 
       */
      paragraph1: { type: String },

       /**
       * Esta es la url de la imagen 1
       */
       image1Url: { type: String },

       /**
        * Este es el parrafo 2
        */
       paragraph2: { type: String },
 
       /**
        * Esta es la url de la imagen 2
        */
       image2Url:  { type: String },
 
       /**
        * Este es el parrafo 3
        */
       paragraph3: { type: String },
 
       /**
        * Esta es la url de la imagen 3
        */
       image3Url: { type: String },
 
       /**
        * Este es el parrafo 4
        */
       paragraph4: { type: String },
 
       /**
        * Esta es la url de la imagen 4
        */
       image4Url: { type: String },
 
       /**
        * Este es el parrafo 5
        */
       paragraph5: { type: String },
 
       /**
        * Esta es la url de la imagen 5
        */
       image5Url: { type: String } ,
      

    }
  }

  constructor() {
    super()
    this.title = 'FRUTAS'
    this.subtitulo  = 'Tambien tenemos ofrecemos ricas frutas de buena calidad como:'
    this.paragraph1 = ' Mango, manila y petacon '
    this.image1Url = 'https://www.gastrolabweb.com/u/fotografias/m/2021/3/2/f1280x720-9423_141098_4829.jpeg'
    this.paragraph2 = 'Platano tabasco y macho'
    this.image2Url = 'https://huerto-en-casa.com/wp-content/uploads/2021/11/tipos-de-platano.jpg'
    this.paragraph3 = 'Naranjas'
    this.image3Url = 'https://citrofrut.com/noticias/wp-content/uploads/2023/02/shutterstock_173674910-scaled.jpg'
    this.paragraph4 = 'Peras'
    this.image4Url = 'https://tse3.mm.bing.net/th?id=OIP.xbffBjmbjel3v_pOw2Bi7gEnDT&pid=Api&P=0&h=180'
    this.paragraph5 = 'Uvas verdes, rojas y sin semillas'
    this.image5Url = 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/50/1513015699-red-green-grapes.jpg'

      
  }

  render() {
    return html`
      <div id="main">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
        <p>${this.paragraph1}</p>
        <img src="${this.image1Url}">
        <p>${this.paragraph2}</p>
        <img src="${this.image2Url}">
        <p>${this.paragraph3}</p>
        <img src="${this.image3Url}">
        <p>${this.paragraph4}</p>
        <img src="${this.image4Url}">
        <p>${this.paragraph5}</p>
        <img src="${this.image5Url}">
        </div>`
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      body{
        background-color: plum;
      }
      p {
        background-color: chartreuse;
        font-family: Georgia;
        color: rgb(165, 42, 144);
      }
      #frutascony {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      div{
        padding: 15vw ;
      }
      #frutascony {
        background-color: cadetblue;
      }
      img {
        width:25vw;
      }
      p {
        font-size:10vh;
      }
      h1{
        font-size:15vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;

 
        }
  
    `
  }
}

window.customElements.define('frutas-cony', FrutasCony)

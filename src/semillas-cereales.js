import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SemillasCereales extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina.
       */
      title: { type: String },

      /**
       * Este es el subtitulo de mi pagina.
       */
      subtitle: { type: String },

      /**
       * Este es el parrafo 1
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
      image2Url: { type: String },

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
      image5Url: { type: String },
    }
  }

  constructor() {
    super()
    this.title = 'SEMILLAS Y CERALES'
    this.subtitle = 'Tenemos variedad en semillas y cereales como:'
    this.paragraph1 = 'Avena'
    this.image1Url = 'https://www.mentta.com/blog/wp-content/uploads/2021/10/Header_Avena_Integral.jpg'
    this.paragraph2 = 'Frijol'
    this.image2Url = 'https://www.gob.mx/cms/uploads/article/main_image/85892/frijol__1_.jpg'
    this.paragraph3 = 'Lenteja'
    this.image3Url = 'https://tse4.mm.bing.net/th?id=OIP.jqtH8gxXQEqSoSVyAaovVQHaD3&pid=Api&P=0&h=180'
    this.paragraph4 = 'Arroz'
    this.image4Url = 'https://tse4.mm.bing.net/th?id=OIP.Y6kV5LT2Zfzt0ViI0WzHcQHaE9&pid=Api&P=0&h=180'
    this.paragraph5 = 'Maiz palomero y Maiz quebrado'
    this.image5Url = 'https://tse2.mm.bing.net/th?id=OIP.eyB-FYJoxCXssN7-WPqG2QHaE7&pid=Api&P=0&h=180'

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
      #semillas-cereales {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      div{
        padding: 15vw ;
      }
      #semillas-cereales {
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

window.customElements.define('semillas-cereales', SemillasCereales)

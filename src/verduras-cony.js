import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class VerdurasCony extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },

      /**
       * Este es el subtitulo de mi pagina
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
    this.title = 'VERDULERIA CONY'
    this.subtitle = 'Ofrecemos Verduras de 1ra. calidad como :'
    this.paragraph1 = ' Jitomate saladet '
    this.image1Url = 'https://tse1.mm.bing.net/th?id=OIP.BGAdRSuXHHvRf8Xcw8EfdQHaE6&pid=Api&P=0&h=180'
    this.paragraph2 = ' Tomate y tomatillo '
    this.image2Url = 'https://cdn-qa.britannica.com/82/201482-050-D800BFD0/tomatillos.jpg'
    this.paragraph3 = ' Papa de hidalgo de la mejor calidad y variedad '
    this.image3Url = 'https://nedik.com/wp-content/uploads/2012/11/papas.jpg'
    this.paragraph4 = ' Ricos y jugosos limones de michoacan '
    this.image4Url = 'https://www.victoriaide.com/wp-content/uploads/limones123.jpg'
    this.paragraph5 = ' Cebolla de Veracruz limpia y buen estado '
    this.image5Url = 'https://tse1.mm.bing.net/th?id=OIP.k_jDqotXr7UFS_sEHQX21gHaE7&pid=Api&P=0&h=180'

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
      #verdurascony {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      div{
        padding: 15vw ;
      }
      #verdurascony {
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

window.customElements.define('verduras-cony', VerdurasCony)

import { LitElement, css, html } from 'lit'
import './frutas-cony.js'
import './semillas-cereales.js'
import './verduras-cony.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * The number of page currently displayed
       */
      position: { type: Number },
    }
  }

  constructor() {
    super()
    this.position = 0

  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 2
    } else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position === 2) {
      this.position = 0
    } else {
      this.position++
    }
  }

  render() {
    return html`
      <div>
      <button @click="${this.setPrevious}">Anterior</button>
      <button @click="${this.setNext}">Siguiente</button>
      <h1>${this.position}</h1>
      ${this.position === 0 ? html` <verduras-cony></verduras-cony>` : ''}
      ${this.position === 1 ? html`<frutas-cony></frutas-cony>` : ''}
      ${this.position === 2 ? html`<semillas-cereales></semillas-cereales>` : ''}
    
    </div>
    
    `
  }

 

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    
      
    `
  }
}

window.customElements.define('my-element', MyElement)

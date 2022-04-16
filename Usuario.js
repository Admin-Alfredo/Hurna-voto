class Usuario extends HTMLElement {

  constructor() {
    super()
    // this.attachShadow({ mode: 'open'})
    this.textContent = "Hello"
  }

}

customElements.define('new-usuario', Usuario)

export default Usuario
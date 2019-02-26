import template from './app.html';
import './header/header'
class App extends HTMLElement {
    constructor() {
        super();

        let tmpl = document.createElement('template');
        tmpl.innerHTML = template;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}
customElements.define('my-app', App);
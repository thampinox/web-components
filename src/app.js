import template from './app.html';
import './header/header'
class App extends HTMLElement {
    constructor() {
        super();

        let tmpl = document.createElement('template');
        tmpl.innerHTML = template;

        // Note: In the above snippet we use a template element to clone DOM, 
        // instead of setting the innerHTML of the shadowRoot. 
        // This technique cuts down on HTML parse costs because the content of the template 
        // is only parsed once, whereas calling innerHTML on the shadowRoot will parse the HTML 
        // for each instance.

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}
customElements.define('my-app', App);
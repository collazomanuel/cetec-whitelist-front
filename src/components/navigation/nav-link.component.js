import { LitElement, html } from "lit-element";
import { navigator } from "lit-element-router";
import { NavLinkStyles }  from './nav-link.styles'

class NavLink extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  static get styles() {
    return NavLinkStyles
  }

  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <a href="${this.href}" @click="${this.handleClick}">
        <slot></slot>
      </a>
    `;
  }
  handleClick(e) {
    e.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define("nav-link", NavLink);
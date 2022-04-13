import { LitElement, html } from "lit-element";
import { NavBarStyles }  from './nav-bar.styles';
import '@material/mwc-tab-bar';
import "./nav-link.component";

class NavBar extends LitElement {
  static get styles() {
    return NavBarStyles
  }
  
  static get properties() {
    return {
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <mwc-tab-bar>
        <nav-link href="/whitelist">
          <mwc-tab label="Whitelist"></mwc-tab>
        </nav-link>
        <nav-link href="/add-user">
          <mwc-tab label="Add user"></mwc-tab>
        </nav-link>
        <nav-link href="/edit-user">
          <mwc-tab label="Edit user"></mwc-tab>
        </nav-link>
        <nav-link href="/remove-user">
          <mwc-tab label="Remove user"></mwc-tab>
        </nav-link>
      </mwc-tab-bar>
    `;
  }
}

customElements.define("nav-bar", NavBar);
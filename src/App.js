//para test del CRUD https://gorest.co.in/
import { LitElement, html } from "lit";
import { router } from "lit-element-router";
import "@material/mwc-list/mwc-list.js";
import "@material/mwc-list/mwc-list-item.js";

//Components
import "./components/navigation/nav-link.component";
import "./components/header/header.component";
import "./router-outlet";

//pages
import "./pages/home/home.page";
import "./pages/whitelist/whitelist.page";
import "./pages/addUser/add-user.page";
import "./pages/editUser/edit-user.page";
import "./pages/removeUser/remove-user.page.js";

class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "/",
        data: { title: "Home" },
      },
      {
        name: "whitelist",
        pattern: "/whitelist",
        data: { title: "Whitelist" },
      },      
      {
        name: "add-user",
        pattern: "/add-user",
        data: { title: "Add user" },
      },
      {
        name: "edit-user",
        pattern: "/edit-user",
        data: { title: "Edit user" },
      },
      {
        name: "remove-user",
        pattern: "/remove-user",
        data: { title: "Remove user" },
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <app-header></app-header>
      <div class="nav-container">
        <mwc-list activatable>
          <nav-link href="/">
            <mwc-list-item> Home </mwc-list-item>
          </nav-link>
          <nav-link href="/whitelist">
            <mwc-list-item> Whitelist </mwc-list-item>
          </nav-link>
          <nav-link href="/add-user">
            <mwc-list-item> Add user </mwc-list-item>
          </nav-link>
          <nav-link href="/edit-user">
            <mwc-list-item> Edit user </mwc-list-item>
          </nav-link>
          <nav-link href="/remove-user">
            <mwc-list-item> Remove user </mwc-list-item>
          </nav-link>
        </mwc-list>
      </div>

      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <whitelist-page route="whitelist"></whitelist-page>
        <add-user-page route="add-user"></add-user-page>
        <edit-user-page route="edit-user"></edit-user-page>
        <remove-user-page route="remove-user"></remove-user-page>
        <h1 route="not-found">Not Found</h1>
      </router-outlet>
    `;
  }
}

customElements.define("app-container", App);

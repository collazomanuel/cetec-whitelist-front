import { LitElement, css, html } from "lit";
import axios from "axios";
import { WhitelistStyles }  from './whitelist.styles'

class Whitelist extends LitElement {
  //registering styles
  static get styles() {
    return WhitelistStyles
  }
  //registering data
  static get properties() {
    return {
      data: Object
    }
 }

 constructor() {
  super();
}

connectedCallback() {
  super.connectedCallback();
  this.fetchData();
}
   
fetchData() {
  axios
  .get("http://localhost:8080/" + "whitelist")
  .then(response => response.data)
  .then(data =>{
    this.data = data
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

render() {
    if (!this.data) {
        return html` 
            <h4>Loading...</h4>
        `;
    }
    return html`
        <link rel="stylesheet" href="/node_modules/@material/data-table/data-table/">
           <div>
            <h1>Lista Blanca</h1>
            <table class="container">
                <thead>
                  <tr>
                    <th><h1>Nombre</h1></th>
                    <th><h1>Apellido</h1></th>
                    <th><h1>Email</h1></th>
                    </tr>
                </thead>
            <tbody>
                ${this.data.map((user) => (html`  
                                                 <tr>
                                                   <td>${user.name}</td>
                                                   <td>${user.surname}</td>
                                                   <td>${user.email}</td>
                                                 </tr>     
                                            `)
                 )}
            </tbody>
          </table>        
        </div>
        
    `;
}

}
customElements.define("whitelist-page", Whitelist);
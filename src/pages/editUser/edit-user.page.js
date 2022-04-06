import { LitElement, css, html } from "lit";
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-formfield';

class EditUser extends LitElement {
  static get styles() {
    return [css``];
  }

  static get properties() {
    return {
             name: String,
             surname: String,
             email: String
    };
  }

  constructor() {
    super();
  }

  render() {
    return html` 
    <div>
      <h1>Editar Usuario</h1>
         <mwc-textfield id="name" label="Ingresar nombre" helper="El nombre del docente" @change=${(event)=>{this.name=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="surname" label="Ingresar apellido" helper="El apellido del docente" @change=${(event)=>{this.surname=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="email" label="Ingresar email" helper="El email del docente" @change=${(event)=>{this.email=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchCreate}>Editar</mwc-button>
    </div>`;
  }

  fetchCreate(){
     var myHeaders = new Headers();
     myHeaders.append("Authorization", "Bearer 0a85f0126790d4f1f65a226bce0141381878ad14f9e14df033ba84b61fadc575");
     myHeaders.append("Content-Type", "application/json");
     var raw = JSON.stringify({ 
                                name:this.name, 
                                surname:this.surname, 
                                email:this.email
                             });
    var requestOptions = {
                          method: 'PUT',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                         };
    fetch("https://gorest.co.in/public/v2/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

     window.location.reload();
    } 
}

customElements.define("edit-user-page", EditUser);

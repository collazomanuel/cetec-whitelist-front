import { LitElement, css, html } from "lit";
import axios from "axios";
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'

class AddUser extends LitElement {
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
      <h1>Agregar Usuario</h1>
         <mwc-textfield id="name" label="Ingresar nombre" helper="El nombre del docente" @change=${(event)=>{this.name=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="surname" label="Ingresar apellido" helper="El apellido del docente" @change=${(event)=>{this.surname=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="email" label="Ingresar email" helper="El email del docente" @change=${(event)=>{this.email=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchCreate}>Agregar</mwc-button>
    </div>`;
  }

  fetchCreate(){
    var newUser = { 
      name:this.name, 
      surname:this.surname, 
      email:this.email
    };

    axios
      .post("http://localhost:8080/" + "user", null, { params: newUser })
      .then(returnedUser => {
        console.log(returnedUser.data);
      })
      .catch(error => {
        console.log('error', error);
        window.location.reload();
      })
    } 
}

customElements.define("add-user-page", AddUser);

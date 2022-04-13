import { LitElement, css, html } from "lit";
import axios from "axios";
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'

class RemoveUser extends LitElement {
  static get styles() {
    return [css``];
  }

  static get properties() {
    return {
      id: String,
      name: String,
      surname: String,
      email: String
    };
  }

  constructor() {
    super();
    this.name = "";
    this.surname = "";
    this.email = "";
  }

  render() {
    return html` 
    <div>
      <h1>Remover Usuario</h1>
        <mwc-textfield id="name" label="Ingresar nombre" helper="El nombre del docente" .value="${this.name}" @change=${(event)=>{this.name=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="surname" label="Ingresar apellido" helper="El apellido del docente" .value="${this.surname}" @change=${(event)=>{this.surname=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="email" label="Ingresar email" helper="El email del docente" .value="${this.email}" @change=${(event)=>{this.email=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchSearch}>Buscar</mwc-button>
        <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchCreate}>Eliminar</mwc-button>
    </div>`;
  }

  fetchCreate(){
    axios
      .delete("http://localhost:8080/" + "user/" + this.id)
      .then(returnedNLU => {
        console.log("Usuario eliminado exitosamente.");
      })
      .catch(error => {
        console.log("error", error);
      })

    window.location.reload();
  }
  
  fetchSearch(){
    axios
      .get("http://localhost:8080/" + "user?email="+ this.email)
      .then(response => {
        if(!response.data) {
          console.log("Usuario no encontrado.");
        } else {
          this.id = response.data._id;
          this.name = response.data.name;
          this.surname = response.data.surname;
          this.email = response.data.email;
        }
      })
      .catch(error => {
        console.log("error", error);
      })
  }
}

customElements.define("remove-user-page", RemoveUser);

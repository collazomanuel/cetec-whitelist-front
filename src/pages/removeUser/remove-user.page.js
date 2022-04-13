import { LitElement, css, html } from "lit";
import axios from "axios";
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'
import '@material/mwc-dialog'
import { RemoveUserStyles }  from './remove-user.styles'

class RemoveUser extends LitElement {
  static get styles() {
    return RemoveUserStyles;
  }

  static get properties() {
    return {
      id: String,
      name: String,
      surname: String,
      email: String,
      found: Boolean,
      created: Boolean,
      error: String
    };
  }

  constructor() {
    super();
    this.name = "";
    this.surname = "";
    this.email = "";
    this.found = false;
    this.created = false;
    this.error = "";
  }

  render() {
    return html` 
    <div class="remove-user-nav">
      <h1>Remover Usuario</h1>
        <mwc-textfield id="email" label="Ingresar email" helper="El email del docente" .value="${this.email}" @change=${(event)=>{this.email=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="name" label="Ingresar nombre" helper="El nombre del docente" .value="${this.name}" .disabled=${true} @change=${(event)=>{this.name=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="surname" label="Ingresar apellido" helper="El apellido del docente" .value="${this.surname}" .disabled=${true} @change=${(event)=>{this.surname=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-button slot=primaryAction dialogAction=yes raised .disabled=${this.found} @click=${this.fetchSearch}>Buscar</mwc-button>
        <mwc-button slot=primaryAction dialogAction=yes raised .disabled=${!this.found} @click=${this.fetchCreate}>Eliminar</mwc-button>
   
        <mwc-dialog id="dialog1" heading="Exito!" .open=${this.created}>
          Usuario eliminado con éxito
          <mwc-button slot="primaryAction" dialogAction="ok" @click=${this.reload}>OK</mwc-button>
        </mwc-dialog>

        <mwc-dialog id="dialog1" heading="Error" .open=${this.error}>
          ${this.error}
          <mwc-button slot="primaryAction" dialogAction="ok">OK</mwc-button>
        </mwc-dialog>   
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
        this.error = error.response.data.name;
        this.found = false;
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
          this.found = true;
        }
      })
      .catch(error => {
        console.log("error", error);
        this.error = error.response.data.name;
        this.found = false;
      })
  }

  reload(){
    window.location.reload();
  }
}

customElements.define("remove-user-page", RemoveUser);

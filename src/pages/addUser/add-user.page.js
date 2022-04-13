import { LitElement, css, html } from "lit";
import axios from "axios";
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'
import '@material/mwc-dialog'
import { AddUserStyles }  from './add-user.styles'

class AddUser extends LitElement {
  static get styles() {
    return AddUserStyles;
  }

  static get properties() {
    return {
      name: String,
      surname: String,
      email: String,
      created: Boolean,
      error: String
    };
  }

  constructor() {
    super();
    this.created = false;
    this.error = "";
  }

  render() {
    return html` 
    <div class="add-user-nav">
      <h1>Agregar Usuario</h1>
        <mwc-textfield id="name" label="Ingresar nombre" helper="El nombre del docente" @change=${(event)=>{this.name=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="surname" label="Ingresar apellido" helper="El apellido del docente" @change=${(event)=>{this.surname=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="email" label="Ingresar email" helper="El email del docente" @change=${(event)=>{this.email=event.target.value}}></mwc-textfield>
        <p></p>
        <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchCreate}>Agregar</mwc-button>
        
        
        <mwc-dialog id="dialog1" heading="Exito!" .open=${this.created}>
          Usuario creado con éxito
          <mwc-button slot="primaryAction" dialogAction="ok" @click=${this.reload}>OK</mwc-button>
        </mwc-dialog>

        <mwc-dialog id="dialog1" heading="Error" .open=${this.error}>
          ${this.error}
          <mwc-button slot="primaryAction" dialogAction="ok">OK</mwc-button>
        </mwc-dialog>
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
        this.created = true;
      })
      .catch(error => {
        console.log('error', error);
        this.error = error.response.data.name;
      })
  } 

  reload(){
    window.location.reload();
  }
}

customElements.define("add-user-page", AddUser);

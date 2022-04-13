import { LitElement, css, html } from "lit";
import axios from "axios";
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-formfield';

class EditUser extends LitElement {
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
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchSearch}>Buscar</mwc-button>
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchCreate}>Editar</mwc-button>
    </div>`;
  }

  fetchCreate(){
    var newUser = { 
      name:this.name, 
      surname:this.surname, 
      email:this.email,
    };
    
    axios
      .put("http://localhost:8080/" + "user" + "/" + this.id + "/" + "?name=" + this.name + "&surname=" + this.surname + "&email=" + this.email, null)
      .then(returnedUser => {
        console.log("Usuario editado sin problemas.");
        //dispatch(nluActions.data({id: '', name: '', text: ''}));
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
          //dispatch(nluActions.data({id: '', name: '', text: ''}));
        
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

customElements.define("edit-user-page", EditUser);

import { LitElement, html } from "lit";
import axios from "axios";
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'
import '@material/mwc-dialog'
import { RemoveUserStyles }  from './remove-user.styles'
import { store } from '../../app/store';
import { connect } from 'pwa-helpers';
import * as userActions from "../../app/actions/UserActions";
import * as stateActions from "../../app/actions/StateActions";
import "../../components/searchButton/search-button.component";

class RemoveUser extends connect(store)(LitElement) {
  static get styles() {
    return RemoveUserStyles;
  }

  static get properties() {
    return {
      id: String,
      name: String,
      surname: String,
      email: String,
      state: String,
      msg: String,
    };
  }

  constructor() {
    super();
    this.id = "";
    this.name = "";
    this.surname = "";
    this.email = "";
    this.state = "";
    this.msg = "";
  }

  stateChanged(state) {
    this.id = state.user.id;
    this.name = state.user.name;
    this.surname = state.user.surname;
    this.email = state.user.email;
    this.state = state.state.state;
    this.msg = state.state.msg;
  }

  render() {
    return html` 
    <div class="remove-user-nav">
      <h1>Remover Usuario</h1>
        <mwc-textfield id="email" label="Ingresar email" helper="El email del docente" .value="${this.email}" @change=${(event)=>{store.dispatch(userActions.email(event.target.value))}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="name" label="Ingresar nombre" helper="El nombre del docente" .value="${this.name}" .disabled=${true} @change=${(event)=>{store.dispatch(userActions.name(event.target.value))}}></mwc-textfield>
        <p></p>
        <mwc-textfield id="surname" label="Ingresar apellido" helper="El apellido del docente" .value="${this.surname}" .disabled=${true} @change=${(event)=>{store.dispatch(userActions.surname(event.target.value))}}></mwc-textfield>
        <p></p>
        <search-button-component></search-button-component>
        <mwc-button slot=primaryAction dialogAction=yes raised .disabled=${this.id === ''} @click=${this.fetchCreate}>Eliminar</mwc-button>
   
        <mwc-dialog id="dialog1" heading="Exito!" .open=${this.state === 'Success'}>
          ${this.msg}
          <mwc-button slot="primaryAction" dialogAction="ok" @click=${this.reload}>OK</mwc-button>
        </mwc-dialog>

        <mwc-dialog id="dialog1" heading="Error" .open=${this.state === 'Error'}>
          ${this.msg}
          <mwc-button slot="primaryAction" dialogAction="ok" @click=${this.reload_state}>OK</mwc-button>
        </mwc-dialog> 
   </div>`;
  }

  fetchCreate(){
    axios
      .delete("http://localhost:8080/" + "user/" + this.id)
      .then(returnedNLU => {
        store.dispatch(stateActions.data({state: 'Success', msg: 'Usuario eliminado con éxito'}))
      })
      .catch(error => {
        store.dispatch(stateActions.data({state: 'Error', msg: error.response.data.name}))
      })

    window.location.reload();
  }

  reload(){
    store.dispatch(userActions.user({id: '', name: '', surname: '', email: ''}));
    store.dispatch(stateActions.data({state: '', msg: ''}));
    window.location.reload();
  }

  reload_state(){
    store.dispatch(stateActions.data({state: '', msg: ''}));
  }
}

customElements.define("remove-user-page", RemoveUser);

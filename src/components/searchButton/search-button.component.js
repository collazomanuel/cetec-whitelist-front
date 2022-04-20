import { LitElement, html } from "lit";
import axios from "axios";
import '@material/mwc-button';
import { SearchButtonStyles }  from './search-button.styles'
import { store } from '../../app/store';
import { connect } from 'pwa-helpers';
import * as userActions from "../../app/actions/UserActions";
import * as stateActions from "../../app/actions/StateActions";

class SearchButton extends connect(store)(LitElement) {
  static get styles() {
    return SearchButtonStyles;
  }

  static get properties() {
    return {
      id: String,
      email: String,
    };
  }

  constructor() {
    super();
    this.id = "";
    this.email = "";
  }

  stateChanged(state) {
    this.id = state.user.id;
    this.email = state.user.email;
  }

  render() {
    return html` 
      <mwc-button slot=primaryAction dialogAction=yes raised .disabled=${this.id !== ''} @click=${this.fetchSearch}>Buscar</mwc-button>
    `;
  }

  fetchSearch(){
    axios
      .get("http://localhost:8080/" + "user?email="+ this.email)
      .then(response => {
        if(!response.data) {
          store.dispatch(stateActions.data({state: 'Error', msg: 'Usuario no encontrado.'}))
          store.dispatch(userActions.user({id: '', name: '', surname: '', email: ''}))
        } else {
          const newData = {
            id: response.data._id,
            name: response.data.name,
            surname: response.data.surname,
            email: response.data.email,
          }
          store.dispatch(userActions.user(newData));
        }
      })
      .catch(error => {
        store.dispatch(userActions.user({id: '', name: '', surname: '', email: ''}))
        store.dispatch(stateActions.data({state: 'Error', msg: error.response.data.name}))
      })
  }
}

customElements.define("search-button-component", SearchButton);

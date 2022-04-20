
import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/UserReducer";
import { stateReducer } from "./reducers/StateReducer";
//import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    user: userReducer,
    state: stateReducer
  })

export const store = createStore(reducer);
//export default createStore(store, composeWithDevTools());

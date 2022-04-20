const initialState = { state: '', msg: '' };

export function stateReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA":
      return {
        state: action.payload.state,
        msg: action.payload.msg
      };

    case "STATE":
      return {
        ...state,
        state: action.newState
      };

    case "MSG":
      return {
        ...state,
        msg: action.newMsg
      };

    default:
      return state;
  }
}

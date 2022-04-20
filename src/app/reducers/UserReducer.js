const initialState = { id: '', name: '', surname: '', email: '' };

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER":
      return {
        id: action.payload.id,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
      };

    case "ID":
      return {
        ...state,
        id: action.newId
      };

    case "NAME":
      return {
        ...state,
        name: action.newName
      };

    case "SURNAME":
      return {
        ...state,
        surname: action.newSurname
      };

    case "EMAIL":
      return {
        ...state,
        email: action.newEmail
      };

    default:
      return state;
  }
}

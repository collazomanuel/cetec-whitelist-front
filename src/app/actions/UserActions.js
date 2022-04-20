export const USER = "USER";
export const ID = "ID";
export const NAME = "NAME";
export const SURNAME = "SURNAME";
export const EMAIL = "EMAIL";

export const user = (payload) => ({
  type: USER,
  payload
});

export const id = (newId) => ({
  type: ID,
  newId
});

export const name = (newName) => ({
  type: NAME,
  newName
});

export const surname = (newSurname) => ({
  type: SURNAME,
  newSurname
});

export const email = (newEmail) => ({
  type: EMAIL,
  newEmail
});

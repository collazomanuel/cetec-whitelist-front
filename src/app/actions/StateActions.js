export const DATA = "DATA";
export const STATE = "STATE";
export const MSG = "MSG";

export const data = (payload) => ({
  type: DATA,
  payload
});

export const state = (newState) => ({
  type: STATE,
  newState
});

export const msg = (newMsg) => ({
  type: MSG,
  newMsg
});

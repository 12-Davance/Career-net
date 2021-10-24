import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [payload];
    case REMOVE_ALERT:
      const index = state.indexOf(state.find((alert) => alert.id === payload));
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
}

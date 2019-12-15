import { CONTACT_DETAIL_LOAD_REQUEST } from "../actions/ContactListActions";

const initialState = { payload: null };

export function contactSelectedReducer(state = initialState, action: any) {
  switch (action.type) {
    case CONTACT_DETAIL_LOAD_REQUEST:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
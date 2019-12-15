import {
    CONTACT_LIST_LOAD_REQUEST,
    CONTACT_DETAIL_LOAD_REQUEST
  } from "../actions/ContactListActions";
  
  const initialState = { payload: null };
  
  export function contactListReducer(state = initialState, action: any) {
    switch (action.type) {
      case CONTACT_LIST_LOAD_REQUEST:
        return { ...state, payload: action.payload };
      default:
        return state;
    }
  }
  
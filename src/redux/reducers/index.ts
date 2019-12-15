import {combineReducers} from "redux";
import {contactListReducer}from "./ContactListReducer";
import {contactSelectedReducer}from "./ContactSelectedReducer";

export default  combineReducers({
    contactList:contactListReducer,
    contactSelected:contactSelectedReducer
})
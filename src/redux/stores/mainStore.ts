import {createStore} from  "redux";
import myreducer from "../reducers";
export function createMainStore(){

    return createStore(myreducer);
}
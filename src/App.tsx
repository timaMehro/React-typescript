import React from "react";
import Contactlist from "./views/Contactlist";

import { createMainStore } from "./redux/stores/mainStore";
import { Provider } from "react-redux";
import  PersonalInfo  from "./views/PersonalInfo";
import AddContact from "./views/AddContact";


export default class App extends React.Component {
   
    render() { 
        const StyleInline: React.CSSProperties = {
            float: "right",
            width: '20%'
        }

        const styleInline2: React.CSSProperties = {
            float: "left",
            width: "60%"
        }
        const styleInline3: React.CSSProperties = {
            float: "left",
            width: "18%"
        }

        return <Provider store={createMainStore()}>
            <div className="page-wrap">
                <div style={{ ...styleInline3 }}><h1>1- Create an Account</h1> <AddContact /></div>
               <div style={{ ...styleInline2 }}><h1>2- View &amp; Remove Accounts</h1><Contactlist /></div>
                <div style={{ ...StyleInline }}> <h1>3- Detail of an  Account </h1>  < PersonalInfo /></div>

            </div>
        </Provider>

    }
}
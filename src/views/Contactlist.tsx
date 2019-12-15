import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { load, setDetailsContact } from "../redux/actions/ContactListActions";
import "./style.css"

export type DataItem = {
    id: number,
    name: string,
    number: string,
    location: string,
    description: string,
    avatar: string
}
export interface ContactListProps {
    dispatch?: Dispatch;
    items: DataItem[];
}

class ContactList extends React.Component<ContactListProps>{
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch && dispatch(load());
    }

    public setDetails = (value: any) => () => {
        const { dispatch } = this.props;
        dispatch && dispatch(setDetailsContact(value));
    }
    render() {
        const { items } = this.props;
        return <div className="flex-container">
            {items && items.map((item, ix) => {
                return <div key={ix} >
                    <div className="center" onClick={this.setDetails(item.id).bind(this)}>
                    <input type="button" value="" className="btnDelet" onClick={() => {
                        if (items) {
                            items.splice(ix, 1);
                            this.forceUpdate();
                        }
                    }} />
                        <div className="profile">
                            <div className="image">
                              <img src={item.avatar} width="50" height="50"
                                    alt="Jessica Potter" />
                                <div className="textCard">  <span >{item.name}</span>
                                <div>{item.number}</div></div>
                                <div className="locationCard">
                                    <span className="location"></span><span>{item.location}</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    }
}
const mapStateToProps = (states: any) => {

    return { items: states.contactList.payload }
}

export default connect(mapStateToProps)(ContactList as any);
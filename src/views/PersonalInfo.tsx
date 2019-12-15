
import React from "react";
import { connect } from "react-redux";

export type DataItem = {
    id: number,
    name: string,
    number: string,
    location: string,
    description: string,
    avatar: string
}
export interface PersonalInfoProps {
    Data: DataItem[];
}
class PersonalInfo extends React.Component<PersonalInfoProps>{
    render() {
        const { Data } = this.props;
        return <div>
            {Data && Data.map((item, ix) => {
                return <div key={ix} >
                    <div className="personalItems">
                        <img className="personalImg" src={item.avatar} width="80" height="80"
                            alt="Jessica Potter" />
                        <h2>{item.name}</h2>
                        <div>{item.number}</div>
                        <div><span><img src="../src/images/loc.png" width="20" height="20"
                        /></span>{item.location}</div>
                        <input type="button" className="Btn" value="ask for Quote " />
                        <input type="button" className="Btn" value="Chat " />
                        <div className="description">{item.description}</div>
                    </div>
                </div>
            })}
        </div>
    }
}

const mapStateToProps = (states: any) => {
    return { Data: states.contactSelected.payload }
}

export default connect(mapStateToProps)(PersonalInfo as any);



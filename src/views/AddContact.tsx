import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import axios from "axios";

export interface AddContactProps {
  data?: {
    items?: Array<{
      id: number,
      name: string,
      number: string,
      location: string,
      description: string,
      avatar: string
    }>
  };
}

export interface MyState {
  selectedFile?: any;
  id: number;
  name: string;
  number: string;
  location: string;
}
export default class addContact extends React.Component<
  AddContactProps,
  MyState
> {
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    console.log(event.target.files[0]);
  };

  onClickHandler = () => {
    const dataForm = new FormData();
    //Save Image
    dataForm.append("file", this.state.selectedFile);

    //It has to be in Action  files
    axios.post("http://127.0.0.1:5500/src/images", dataForm, {}).then(res => {
      console.log(res.statusText);
    });
  };

  handleSubmit(e: any) {
    e.preventDefault();
    //Dispatch ADD Function from Action
    let contactInfo = this.state.name;
    fetch("url", {
      method: "POST",
      body: JSON.stringify(contactInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="AccoundAdd">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            {" "}
            <input
              className="TxtBox"
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
              placeholder="Name"
            />{" "}
          </div>
          <div>
            {" "}
            <input
              className="TxtBox"
              type="text"
              onChange={e => this.setState({ number: e.target.value })}
              placeholder="Number"
            />{" "}
          </div>
          <div>
            {" "}
            <input
              className="TxtBox"
              type="text"
              onChange={e => this.setState({ location: e.target.value })}
              placeholder="Location"
            />{" "}
          </div>
          <input
            type="file"
            className="TxtBox"
            onChange={this.onChangeHandler}
          />
          <input
            type="button"
            className="Btn"
            value="Upload"
            onClick={this.onClickHandler}
          />
        </form>
      </div>
    );
  }
}

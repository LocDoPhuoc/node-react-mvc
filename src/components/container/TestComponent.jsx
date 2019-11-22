import React, { Component } from "react";
import ReactDOM from "react-dom";
class TestComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    if(this.state.title != "") {
      return(
        <h1>{this.state.title}</h1>
      )
    }
    return (
      <div>
        <button onClick={() => this.setState({ title: "OK good" })} >Click here</button>
      </div>
    );
  }
}
export default TestComponent;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import TestComponent from './TestComponent.jsx';
class FormContainer extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div>
        <div>Hello {this.state.title}</div>
        <a onClick={() => this.setState({title: 'Loc'})}>Test</a>
        <p> {window.data} </p>
        <p>This is pros: {this.props.name}</p>
        <TestComponent />
      </div>
    );
  }
}
export default FormContainer;
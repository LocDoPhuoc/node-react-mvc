import React, { Component } from "react";
import ReactDOM from "react-dom";
class TestComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "Xin chao",
      age: 0,
      user: {}
    };

    this.incrementAge = this.incrementAge.bind(this);
    this.callApi = this.callApi.bind(this);
  }

  incrementAge(){
    this.setState({
      age: this.state.age + 1
    });
  }

  componentDidMount() {
    console.log('Mount');
    this.callApi();
  }

  callApi() {
    fetch('/api')
        .then(response => response.json())
        .then(json => {
          this.setState({ user: json });
        });
  }

  render() {
    return (
      <div>
        <h1>Title: {this.state.title}</h1>
        <h1>Age: {this.state.age}</h1>
        <p>Name: {this.state.user.name}</p>
        <button onClick={this.incrementAge} >Click age</button>
        <button onClick={() => {this.setState({title: 'Loc'})}} >Click title</button>
        <button onClick={this.callApi} >Click call api</button>
      </div>
    );
  }
}
export default TestComponent;
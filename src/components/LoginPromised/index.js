import React from 'react';
import ReactPromisedComponent from 'react-promised-component';
import LoadingComponent from './components/loading_component.js';
import ErrorComponent from './components/error_component.js';
import SuccessComponent from './components/success_component.js';

// Sample sleep method
// function sleep (time)
// {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

var PromisedReactComponent = ReactPromisedComponent(
  "promise_name",
  LoadingComponent,
  ErrorComponent,
  SuccessComponent
);

export default class PromisedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // Promise creator method
  promiseGenerator(params) {
    return fetch(params.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": params.username,
        "password": params.password
      })
    })
    .then((response) => response.json());
  }

  // Method to supply parameters to promise method
  promiseParams() {
    return {
      url: "http://localhost:9000/user",
      // username: "uniliver",
      // password: "pass1"
      username: this.props.username,
      password: this.props.password
    };
  }

  render() {
    return (
      <PromisedReactComponent
        promise_name={this.promiseGenerator.bind(this)}
        promise_name_params={this.promiseParams.bind(this)}
        successHandler={this.props.successHandler}
        />
    );
  }
}

import React from 'react';

export default class ErrorComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  retryPromise() {
    // Use retry from props, in case you want to implement retry-able promise
    this.props.retry();
  }

  render() {
    // Add your render code here for the Error Component
    return (
      <div>
        <div className="container">
          <h3 className="center">Login</h3>
          <div className="box">
            <h1>Error occured! Try to contact administrator.</h1>
          </div>
          <button onClick={() => { this.props.retry() }}>Retry</button>
        </div>
      </div>
    );
  }
}

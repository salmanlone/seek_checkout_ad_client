import React, { Component } from 'react';

function sleep (time)
{
  return new Promise((resolve) => setTimeout(resolve, time));
}

class SuccessComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    sleep(500).then(() => this.handleSuccess(this.props.result.username));
  }

  handleSuccess = (username) => {
    this.props.successHandler(username);
  }

  render() {
    // this.props.result could be used to retrieve promise results
    return (
      <div className="container">
        <div>
          <h3 className="center">Login Successful</h3>
        </div>
      </div>
    );
  }
}

export default SuccessComponent;
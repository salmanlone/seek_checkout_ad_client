import React from 'react';

export default class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="display-loader">
          <div class="loader"></div>
        </div>
      </div>
    );
  }
}

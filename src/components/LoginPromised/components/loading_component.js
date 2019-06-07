import React from 'react';

export default class LoadingComponent extends React.Component
{
  // constructor(props)
  // {
  //   super(props);
  // }

  render()
  {
    // Add your render code here for the Loading Component
    return (
            <div className="container">
        <div class="display-loader">
          <div class="loader"></div>
        </div>
      </div>
    );
  }
}

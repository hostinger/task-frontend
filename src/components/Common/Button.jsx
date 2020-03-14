import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <div className="promotion-btn btn">
        { this.props.btnText }
      </div>
    );
  }
}

export default Button;

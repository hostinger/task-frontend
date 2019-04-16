import React from 'react';

class Tooltip extends React.Component {
  render() {
    return(
      <p className="tooltip"> { this.props.text } </p>
    );
  }
}

export default Tooltip;
import React from 'react';
import Program from './Program.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ie: 0
      }
    }

    componentWillMount() {
      //Check if using <=IE9.
      const ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('msie') != -1 && parseInt(ua.split('msie')[1]) <= 9) {
        this.setState({
          'ie': parseInt(ua.split('msie')[1])
        })
      }
    }

    renderProgram() {
      if (this.state.ie > 0) {
        return (
          <div className="unsupported ie-wrapper">
            <h1>Your Internet Explorer version is outdated and is not supported.</h1>
            <h2>You should update or use different browser for security reasons.</h2>
          </div>
        );
      }

      return (
        <Program />
      );
    }

    render() {
      return (
        <div>
          { this.renderProgram() }
        </div>
      );
    }
}

export default App;

import React from 'react';

class MainMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobile: '',
      hidden: 'hidden',
    };
  }
  //Init a resize event listener, call once on load.
  componentWillMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const screenSize = window.innerWidth;

    if (screenSize <= 800) {
      this.setState({
        mobile: true,
        hidden: true
      })
      return;
    }
    this.setState({
      mobile: false,
      hidden: false
    });
  }

  handleBurger() {
    this.setState({
      mobile: !this.state.mobile,
      hidden: !this.state.hidden
    })
  }

  render() {
      return (
        <React.Fragment>
          <div className= { "mobile-menu-toggle " + (this.state.hidden ? '' : 'close') }
              onClick={ this.handleBurger.bind(this) }>
          </div>
          <div className= { "main-menu-wrapper " + (this.state.mobile ? 'mobile' : '') } >
            <ul className= { "main-menu " + (this.state.hidden ? 'hidden' : '') }>
              <li>Web hosting</li>
              {/* Business logic would help me determine which items are on sale. */}
              <li className="on-sale">Cloud hosting</li>
              <li>Vps hosting</li>
              <li>Domain checker</li>
              <li>Website builder</li>
            </ul>
          </div>
        </React.Fragment>
      );
  }
}

export default MainMenu;
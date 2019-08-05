import React from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import MenuContent from "./components/MenuContent/MenuContent";
export default class App extends React.Component {
  state = {
    drawerToggled: false
  };

  drawerHandler = () => {
    this.setState(prev => {
      return {
        drawerToggled: !prev.drawerToggled
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <NavBar
            drawerHandler={this.drawerHandler}
            drawerActive={this.state.drawerToggled}
          />
          <MenuContent
            className={`drawer${this.state.drawerToggled ? " active" : ""}`}
          />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

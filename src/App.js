import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./components/Index";
import WebHosting from "./components/WebHosting";
import CloudHosting from "./components/CloudHosting";
import VpsHosting from "./components/VpsHosting";
import DomainChecker from "./components/DomainChecker";
import WebsiteBuilder from "./components/WebsiteBuilder";
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={"app"}>
          <div className={"app__img"}/>
          <Navigation/>
          <div className={'container'}>
            <Route path="/" exact component={Index} />
            <Route path="/webHosting/" component={WebHosting} />
            <Route path="/cloudHosting/" component={CloudHosting} />
            <Route path="/vpsHosting/" component={VpsHosting} />
            <Route path="/domainChecker/" component={DomainChecker} />
            <Route path="/websiteBuilder/" component={WebsiteBuilder} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Header from "./components/layout/header/Header";

import Home from "./components/pages/home/Home";
import WebHosting from "./components/pages/web-hosting/WebHosting";
import CloudHosting from "./components/pages/cloud-hosting/CloudHosting";
import VpsHosting from "./components/pages/vps-hosting/VpsHosting";
import DomainChecker from "./components/pages/domain-checker/DomainChecker";
import WebsiteBuilder from "./components/pages/website-builder/WebsiteBuilder";
import NotFound from "./components/pages/not-found/Not-found";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/web-hosting' component={WebHosting}/>
                        <Route exact path='/cloud-hosting' component={CloudHosting}/>
                        <Route exact path='/vps-hosting' component={VpsHosting}/>
                        <Route exact path='/domain-checker' component={DomainChecker}/>
                        <Route exact path='/website-builder' component={WebsiteBuilder}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;

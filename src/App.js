import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Header from "./components/layout/header/Header";
import Home from "./components/pages/home/Home";
import notFound from "./components/pages/not-found/Not-found";
import underConstruction from "./components/pages/under-construction/Under-construction";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/web-hosting' component={underConstruction}/>
                        <Route exact path='/cloud-hosting' component={underConstruction}/>
                        <Route exact path='/vps-hosting' component={underConstruction}/>
                        <Route exact path='/website-builder' component={underConstruction}/>
                        <Route component={notFound}/>
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;

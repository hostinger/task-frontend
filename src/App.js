import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';


import Home from "./components/layout/section-hero/Section-hero";
import notFound from "./components/pages/not-found/Not-found";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route component={notFound}/>
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;

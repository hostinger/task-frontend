import React, { Component } from 'react';
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import Footer from './components/footer/footer.js'

class App extends Component {
    render () {
        return (
            <div className="container-fluid main-page">
                <Header />
                <Main />
                <Footer />
            </div> 
        );
    }
}

export default App;
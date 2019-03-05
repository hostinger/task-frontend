import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from "./Content";


class Layout extends Component {
    render() {
        return (
            <div className="app">
                <div className="container">
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Layout;
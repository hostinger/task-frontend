import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-custom navbar-expand-lg navbar-light px-0 py-5">
                <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">&nbsp;</span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/">Web hosting</a>
                        </li>
                        <li className="nav-item">
                            <span className="badge-on-sale d-none d-md-block d-lg-block">On sale</span>
                            <a className="nav-link" href="/">Cloud hosting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">vps hosting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Domain checker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Website builder</a>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}

export default Header;
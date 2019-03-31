import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        };
    }

    // SETS STATE AFTER HOVERING OR uhh ? UNHOVERING ? TO FALSE OR TRUE 
    handleMouseEnter = () => this.setState({ hovering: true });
    handleMouseLeave = () => this.setState({ hovering: false });

    // WHEN HOVERED UPON, THE APPROPRIATE FUNCTION IS FIRED
    onSaleHover = () => {
        this.handleMouseEnter()
    }
    // SAME OPERATION
    onSaleOut = () => {
        this.handleMouseLeave()
    }

    render() {
        const onHoverFontSizeChange = {
            fontSize: this.state.hovering ? '11px' : undefined,
            // marginTop: this.state.hovering ? '-3px' : undefined,
            transition: this.state.hovering ? '250ms all 0.10s' : '250ms all',
            letterSpacing: this.state.hovering ? '1.5px' : undefined,
            marginTop: this.state.hovering ? '-.5px' : undefined,
            filter: this.state.hovering ? 'brightness(70%)' : 'brightness(100%)'
        }
        return (
            <div className="container p-0">
                <div className="navbar mobile-navbar-bg navbar-light navbar-expand-sm">
                    <div className="navbar-brand">
                        <a href="/"><img src="https://www.hostinger.com/assets/images/logo-90afefce3c.png" alt="Hostinger" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hostNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Site Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="hostNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Web Hosting</a>
                            </li>
                            <li className="nav-item onSalePromotion" onMouseEnter={this.onSaleHover.bind(this)} onMouseLeave={this.onSaleOut.bind(this)}>
                                <span className="onSale" style={onHoverFontSizeChange} >On Sale</span>
                                <a href="/" className="nav-link">Cloud Hosting</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">VPS Hosting</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Domain Checker</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Website Builder</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

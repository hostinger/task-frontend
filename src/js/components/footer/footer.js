import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer className="container footer-container">
                <ul className="footer-list">
                    <li className="list-item">
                        <div className="checkmark"/>
                        <div>Guaranteed 99.9% Uptime </div>     
                    </li>
                    <li className="list-item">
                        <div className="checkmark"/>
                        <div>Superior Speed Performance</div>
                    </li>
                    <li className="list-item">
                        <div className="checkmark"/>
                        <div>24/7 Support Chat</div>
                    </li>
                    <li className="list-item">
                        <div className="checkmark"/>
                        <div>30-Day Money-Back Guarantee</div>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <ul className="py-4 footer-links text-white justify-content-center text-center">
                <li><i className="fa fa-1x fa-check" aria-hidden="true"></i> Guaranteed 99.9% Uptime</li>
                <li><i className="fa fa-1x fa-check" aria-hidden="true"></i> Superior Speed Performance</li>
                <li><i className="fa fa-1x fa-check" aria-hidden="true"></i> 24/7 Support Chat</li>
                <li><i className="fa fa-1x fa-check" aria-hidden="true"></i> 30-Day Money-Back Guarantee</li>
            </ul>
        );
    }
}

export default Footer;

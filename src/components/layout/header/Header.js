import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Hostinger</Link>
                    <Link key="1" to='/web-hosting'>web hosting</Link>
                    <Link key="2" to='/cloud-hosting'>cloud hosting</Link>
                    <Link key="3" to='/vps-hosting'>vps hosting</Link>
                    <Link key="4" to='/domain-checker'>domain checker</Link>
                    <Link key="5" to='/website-builder'>website builder</Link>
                </nav>
            </header>
        )
    }
}

export default Header
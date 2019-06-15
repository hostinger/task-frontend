import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from "../navigation/Navigation";

const MenuModal = (props) => {
    return (
        <div className="menu-modal">
            <div className="menu-modal__close" onClick={props.close}>x</div>
            <Link to="/"
                  onClick={props.close}
                  className="navigation__item navigation__item--home"
                  key={'home'}>
                home
            </Link>
            <Navigation name={'menu-modal__navigation navigation'} close={props.close}/>
        </div>
    )
};

export default MenuModal
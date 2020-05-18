import React from 'react';
import './DrawerToggleButton.scss';

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="button-line" />
        <div className="button-line" />
        <div className="button-line" />
    </button>
);

export default drawerToggleButton;
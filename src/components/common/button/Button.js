import React from 'react';

const Button = (props) => {
    return (
        <button className="btn" type="button">
            {props.label}
        </button>
    )
};

export default Button
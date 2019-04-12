import React from 'react';

const Tag = (props) => {
    return (
        <div className={props.name}>
            <div className="tag__rectangle">{props.label}</div>
            <div className="tag__triangle-down"></div>
        </div>
    )
};

export default Tag
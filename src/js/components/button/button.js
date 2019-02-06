import React, { Component } from 'react';

class Button extends Component {
    render () {
        return (
            <div className="button-container">
                <button className="button">
                 <a>
                    Get started now
                 </a>
                </button>
            </div>
        );
    }
}

export default Button;
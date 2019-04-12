import React from 'react';
import Header from "../../layout/header/Header";

const NotFound = (props) => {
    return (
        <div className="notFound">
            <Header/>
            <div className="notFound__content">
                <h1 className="notFound__message">Page not found</h1>
            </div>
        </div>
    )
};

export default NotFound
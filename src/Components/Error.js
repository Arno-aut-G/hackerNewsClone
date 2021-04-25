import React from 'react';
import '../App.css';

const Error = ({ errorIn }) => {

    return (
        <h3 className="errMessages" >Error: {errorIn}</h3>

    )
}

export default Error
import React from 'react';
import './Hello.css'

const Hello = (props) => {
    return (
        <div className='tc'>
            <h1 className='f1'>Hello world </h1>
            <p className='b'>{props.greating}</p>
        </div>
    );
};

export default Hello;
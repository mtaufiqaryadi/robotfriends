import React from 'react';

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='robot' />
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
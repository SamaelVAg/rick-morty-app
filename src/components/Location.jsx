import React from 'react';

const Location = ( { name, type, dimension, population } ) => {
    return (
        <div className='location-wrapper'>
            <article className='location-item'>
                <h2>Name:</h2>
                <p>{ `${name[0].toUpperCase()}${name.substring(1)}` }</p>
            </article>
            <article className='location-item'>
                <h2>Type:</h2>
                <p>{ `${type[0].toUpperCase()}${type.substring(1)}` }</p>
            </article>
            <article className='location-item'>
                <h2>Dimension:</h2>
                <p>{ `${dimension[0].toUpperCase()}${dimension.substring(1)}` }</p>
            </article>
            <article className='location-item'>
                <h2>Population:</h2>
                <p>{ population }</p>
            </article>
        </div>
    );
};

export default Location;
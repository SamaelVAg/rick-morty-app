import React from 'react';
import Location from './Location';
import Residents from './Residents';

const MainComp = ( { apiData } ) => {

    const { name, type, dimension, residents } = apiData

    return (
        <div className='main-comp'>
            <Location name={ name } type={ type } dimension={ dimension } population={ residents.length } />
            <Residents residents={ residents } />
        </div>
    );
};

export default MainComp;
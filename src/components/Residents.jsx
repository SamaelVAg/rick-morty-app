import React, { useState } from 'react';
import ResidentCard from './ResidentCard';
import PagesComp from './PagesComp';

const Residents = ( { residents } ) => {

    const [ currentPage, setCurrentPage ] = useState( 1 )
    
    const lRIndex = currentPage * 8
    const fRIndex = lRIndex - 8
    const resShow = residents.slice( fRIndex, lRIndex )

    const chgPage = ( pgNumber ) => {
        setCurrentPage( pgNumber )
    }

    return (
        <div className='residents-page'>
            <div className='residents-container'>
                {
                    resShow.map( resident => (
                        <ResidentCard resident={ resident } key={ resident }/>
                    ) )
                }
            </div>
            <PagesComp totalResidents={ residents.length } chgPage={ chgPage } currentPage={ currentPage }/>
        </div>
    );
};

export default Residents;
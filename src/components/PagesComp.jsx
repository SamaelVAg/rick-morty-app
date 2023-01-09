import React from 'react';

const PagesComp = ( { totalResidents, chgPage, currentPage } ) => {

    const pages = Math.ceil( totalResidents / 8 )
    const pageNumbers = []

    for( let i = 1; i <= pages; i++ ){
        pageNumbers.push(i)
    }

    return (
        <div className='page-container'>
            {
                pageNumbers.map( number => (
                    <li key={ number }>
                        <a onClick={ () => chgPage( number ) } href='!#' className={`page-number ${ currentPage === number ? 'active' : '' }`}>
                            { number }
                        </a>
                    </li>
                ) )
            }
        </div>
    );
};

export default PagesComp;
import { React, useEffect, useState } from 'react';
import axios from 'axios'
import '../assets/css/residentCard.css'

const ResidentCard = ( { resident } ) => {

    const [ apiResident, setApiResident ] = useState( {} )
    
    const resStatus = () => {
        switch ( status ){
            case 'unknown':
                return ''
            case 'Alive':
                return 'alive'
            case 'Dead':
                return 'dead'
        }
    }

    useEffect( () => {
        axios.get( resident )
        .then( res => setApiResident( res.data ) )
    }, [] )

    const { status, image, name, species, origin, episode } = apiResident

    return (
        <div className='resident-card'>
            <section className='resident-profile'>
                <img src={ image } alt={ `${ name } image` } />
                <h2>{ name }</h2>
            </section>

            <section className='resident-desc'>
                <article className='desc-item'>
                    <p className='resident-cat'>
                        SPECIE
                    </p>
                    <p className='resident-atr'>
                        { species }
                    </p>
                </article>
                <article className='desc-item'>
                    <p className='resident-cat'>
                        ORIGIN
                    </p>
                    <p className='resident-atr'>
                        { `${origin?.name[0].toUpperCase()}${origin?.name.substring(1)}` }
                    </p>
                </article>
                <article className='desc-item'>
                    <p className='resident-cat'>
                        EPISODES
                    </p>
                    <p className='resident-atr'>
                        { episode?.length }
                    </p>
                </article>
            </section>

            <section className='resident-status'>
                    <div className={`status-icon ${ resStatus() }`}></div>
                    <p>
                        { `${status?.[0].toUpperCase()}${status?.substring(1)}` }
                    </p>
                </section>

        </div>
    );
};

export default ResidentCard;
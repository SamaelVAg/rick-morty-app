import { React, useState, useEffect } from 'react';
import axios from 'axios'
import MainComp from './MainComp';

const RequestComp = () => {

    const [ loading, setLoading ] = useState( true )
    const [ apiData, setApiData ] = useState( {} )
    const [ locId, setLocId ] = useState( '' )

    const randomGen = () => {
        return Math.floor( Math.random() * 126 ) + 1
    }

    const apiConsult = ( location ) => {
        axios.get( `https://rickandmortyapi.com/api/location/${location}` )
        .then( res => {
            setApiData( res.data )
            setTimeout( () => setLoading( false ), 2000)
        } )
    }

    const search = () => {
        if(locId > 0 && locId <= 126){
            apiConsult( locId )
        }else{
            alert('Location ID must be a number between 1 an 126!')
        }
    }

    useEffect( () => {
        apiConsult( randomGen() )
    }, [])    

    return (
        <div>
            {
                loading ? (
                    <div className='loader'>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <div className='req-page'>
                        <section className='req-finder'>
                            <input 
                                className='finder-input' 
                                type="text" 
                                value={ locId } 
                                onChange={ e => setLocId( e.target.value ) }
                                placeholder='Type Dimension Id'
                                />
                            <button className='finder-btn' onClick={ search }>SEARCH</button>
                        </section>
                        <MainComp apiData={ apiData } />
                    </div>
                )
            }
        </div>
    );
};

export default RequestComp;
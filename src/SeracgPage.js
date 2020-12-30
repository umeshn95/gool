import React from 'react'
import {useStateValue} from './StateProvider'
import useGoogleSearch from './useGoogleSearch';

function SeracgPage() {

   
    const [{term},dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
   
    console.log(data)
    return (
        <div className='searchpage'>
            <div><h1>{term}</h1></div>
        </div>
    )
}

export default SeracgPage

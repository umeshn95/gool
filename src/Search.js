import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useStateValue} from "./StateProvider";
import {actionTypes} from './reducer'
function Search() {
    const [{},dispatch] = useStateValue();

const [input,SetInput] = useState('');
const history = useHistory();

console.log(input)
    const search = (e) =>{
    e.preventDefault();
    console.log('you hit search')
    history.push('/searc')
    console.log(history.push)
dispatch(
    {

        type: actionTypes.SET_SEARCH_TERM,
        term: input ,
    }
)


}

    
    return (
     <form>   <div>
     <div>
         <input type='text' value={input} onChange={e=> SetInput(e.target.value)}></input></div>
         <div className='search__button'><button type='submit' onClick={search}>search</button></div>
 </div>
 </form>
    )
}

export default Search

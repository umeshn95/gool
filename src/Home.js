import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
function Home() {
    return (
        <div>
            <h1>This is home page</h1>
            <p><Link to='/about'>about</Link></p>
   <p> <Link to='/store'>Store</Link></p>
    <p><Link to='/gmail'>Gmail</Link></p>
    <p><Link to='/images'>images</Link></p>
    <div>
        <Search></Search>
    </div>
        </div>
    )
}

export default Home;

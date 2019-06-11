import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = (props)=>{
    return(
        <div className='navbar'>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/offer">Offer</Link></div>
            <div><Link to="/contact">contact</Link></div>
        </div>
    )
}

export default Navbar;
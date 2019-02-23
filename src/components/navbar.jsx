import React from 'react';
import { Link } from 'react-router-dom'




const NavBar = () => {
    return (
        <nav className='navbar fixed-top border border-info bg-dark'>
            <span className='navbar-brand text-white'>STUDIO GHIBLI:</span>
            <div className='row'>
                <Link to='/' className='nav-item pr-5 text-light nav-link active'>Home</Link>
                <Link to='/films' className='nav-item pr-5  text-light nav-link'>Films</Link>
                <Link to='/people' className='nav-item pr-5 text-light nav-link'>People</Link>
            </div>
        </nav>
    )
}


export default NavBar;
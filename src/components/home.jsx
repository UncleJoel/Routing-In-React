import React from 'react';
import Logo from './logo.png';

const Home = () => {
    return (
        <div className='row mt-5'>
            <div className='row mx-auto col-3 pt-5'>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Home;
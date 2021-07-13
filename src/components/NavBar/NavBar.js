import React from 'react';
import './NavBar.css';


const NavBar = () =>{
    
    return(
        <div className='navbar'>
            <h1>Sport House</h1>
            <ul className='lista'>
                <li className='itemList'>Inicio</li>
                <li className='itemList'>Mujer</li>
                <li className='itemList'>Hombre</li>
            </ul>
        </div>
        
    )
};

export default NavBar;
import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link} from 'react-router-dom';


const NavBar = () =>{
    
    return(
        <div className='navbar'>
            <h1>Sport House</h1>
            <ul className='lista'>
                <Link to='/' className='itemList'>Inicio</Link>
                <Link to='/category/Mujer' className='itemList'>Mujer</Link>
                <Link to='/category/Hombre' className='itemList'>Hombre</Link>
                <li className='itemCart'><CartWidget/></li>
            </ul>
            
        </div>
        
    )
};

export default NavBar;
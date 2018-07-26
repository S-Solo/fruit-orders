import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';


const Header = () => {
    return (
        <div className='Header'>
            <nav className='Nav'>
                <li><img src={logo} alt='no logo...' /></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
            </nav>
        </div>
    );
}
export default Header;
import React from 'react';
import logo from './../../img/logo.jpg';

const Header = () => {
    return (
        <header className="encabezado-sitio">
            <img className="logo" src={logo} alt="logo"/>
        </header>
    );
}
 
export default Header;
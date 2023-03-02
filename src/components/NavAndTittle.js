import React from 'react';
import { NavLink } from 'react-router-dom';

const NavAndTittle = () => {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/like">
                        <li>Coup de coeur</li>
                    </NavLink>
                </ul>
            </nav>
           
            
        </header>
    );
};

export default NavAndTittle;

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

            <div className="logo">
                <h1>On mate quoi ce soir?</h1>
                <img src="clap-cinema-faisant-du-son-clap-filmant-film-clapboard-video-tableau-noir-texte-fond-blanc-realisation-films-cinematographie_575670.png" alt="" />
                <h2>C'est toi qui décide!</h2>
            </div>
           
            
        </header>
    );
};

export default NavAndTittle;

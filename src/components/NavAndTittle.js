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
                <video
                    src="étoile.mp4"
                    typeof="video.mp4"
                    loop
                    autoPlay
                    id="video"
                ></video>
                <div className="txt">
                    <h1>Netflist</h1>
                    <p>Des films pour tous les goûts!</p>
                </div>                
            </div>
            
        </header>
    );
};

export default NavAndTittle;

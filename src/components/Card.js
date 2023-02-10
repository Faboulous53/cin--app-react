import React from 'react';


const Card = ({ movie }) => {
    return (
        <li className="card">
            <h2>card</h2>
            <img src={movie.poster_path ? 'https://image.tmdb.org/t/p/original'+ movie.poster_path : 'logo192.png'} alt="" />
        </li>
    )  

};

export default Card;

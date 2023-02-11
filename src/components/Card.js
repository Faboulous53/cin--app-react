import React from 'react';


const Card = ({ movie }) => {
    return (
        <li className="card">
            <h2>{movie.title}</h2>
            <img src={movie.poster_path ? 'https://image.tmdb.org/t/p/original'+ movie.poster_path : 'logo192.png'} alt="" />
            <div className="average">
            <i class="fa-solid fa-ranking-star note"></i>
            <p>{movie.vote_average}</p>
            </div>
        </li>
    )  

};

export default Card;

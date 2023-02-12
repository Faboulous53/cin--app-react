import React from 'react';

const Card = ({ movie }) => {
    const genreLink = "https://api.themoviedb.org/3/genre/movie/list?api_key=6df5915ad72530ff9fc45aed522c903c&language=fr-FR";

    
    return (
        <li className="card">
            <h2>{movie.title}</h2>
            <img
                src={
                    movie.poster_path
                        ? 'https://image.tmdb.org/t/p/original' +
                          movie.poster_path
                        : 'logo192.png'
                }
                alt=""
            />
            <div className="container-average">
                <i class="fa-solid fa-ranking-star note"></i>
                <p>{movie.vote_average}</p>
            </div>
            <p className="genre">Genre</p>
            
        </li>
    );
};

export default Card;

import React from 'react';

const Card = ({ movie }) => {

    const genreType = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids.length; i++) {
        switch (movie.genre_ids[i]){
            case 28:
                genreArray.push('Action');
                break;               
            case 12:
                genreArray.push('Aventure'); 
                break;               
            case 16:
                genreArray.push('Animation');
                break;
            case 35:
                genreArray.push('Comédie');
                break;
            case 80:
                genreArray.push('Crime');
                break;
            case 99:
                genreArray.push('Documentaire');
                break;
            case 18:
                genreArray.push('Drame');
                break;
            case 10751:
                genreArray.push('Familial');
                break;
            case 14:
                genreArray.push('Fantastique');
                break;
            case 36:
                genreArray.push('Histoire');
                break;
            case 27:
                genreArray.push('Horreur');
                break;
            case 10402:
                genreArray.push('Musique');
                break;
            case 9648:
                genreArray.push('Mystère');
                break;
            case 10749:
                genreArray.push('Romance');
                break;
            case 878:
                genreArray.push('Science-Fiction');
                break;
            case 10770:
                genreArray.push('Téléfilm');
                break;
            case 53:
                genreArray.push('Thriller');
                break;
            case 10752:
                genreArray.push('Guerre');
                break; 
                
                default:
                    break;                   
        }   
        }
        return genreArray;
    } ;

    const dateFormat = (date) => {
        return date.split('-').reverse().join('-');       
        
    }

   
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

            <div className="genre-date">
            <p className='genre'> Type: {movie.genre_ids ? genreType().join(" ") : "Pas défini"}</p>
            <p className='genre'> Sortie le {movie.release_date ? dateFormat(movie.release_date) : 'Pas de date'}</p>
            </div>

            <div className="description">
                <p>{movie.overview}</p>
            </div>
        </li>
    );
};

export default Card;

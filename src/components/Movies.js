import React, { useEffect, useState } from 'react';
import axios from "axios"
import Card from './Card';


const Movies = () => {
    
const linkConnect = "https://api.themoviedb.org/3/search/movie?api_key=6df5915ad72530ff9fc45aed522c903c&query=code&language=fr-FR"
// const imgLink = "https://image.tmdb.org/t/p/w500";  
const[moviesdata, setMoviesData] = useState([]);

useEffect(() => {
    axios
    .get(linkConnect)
    .then((res) => setMoviesData(res.data.results));     
},[])

    return (
        
        <div>
            <ul>
                {
                    moviesdata
                    .slice(0,12)
                    .map((movie) => (                        
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Movies;


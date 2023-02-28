import React, { useEffect, useState } from 'react';
import axios from "axios"
import Card from './Card';


const Movies = () => {
const[nameSearch, setNameValueSearch] = useState([]);  
const linkConnect = "https://api.themoviedb.org/3/search/movie?api_key=6df5915ad72530ff9fc45aed522c903c&query=avatar&language=fr-FR"
// const imgLink = "https://image.tmdb.org/t/p/w500";  
const[moviesdata, setMoviesData] = useState([]);
const[valueRange, setValueRange] = useState([4]);


useEffect(() => {
    axios
    .get(linkConnect)
    .then((res) => setMoviesData(res.data.results));     
},[linkConnect])


    return (
        
        
        <div className='container-cards'>
            <div className="filter">
                <p>{valueRange}</p>
                <input type="range" min="4" max="20" value={valueRange} onChange={(e) => setValueRange(e.target.value)}/>
                <input  className='name-movie' type="text" placeholder='Recherche par nom' onChange={(e) => setNameValueSearch(e.target.value)}/>                
            </div>
            <ul>
                {   
                    moviesdata
                    .slice(0,valueRange)
                    .filter(movie => movie.title.includes(nameSearch))                                
                    .map((movie) => (                                                
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Movies;


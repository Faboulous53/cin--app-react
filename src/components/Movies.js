import React, { useEffect, useState } from 'react';
import axios from "axios"
import Card from './Card';


const Movies = () => {


const[nameSearch, setNameValueSearch] = useState(["avatar"]);  
const[moviesdata, setMoviesData] = useState([]);
const[valueRange, setValueRange] = useState([2]);

useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=6df5915ad72530ff9fc45aed522c903c&query=${nameSearch}&language=fr-FR `)
    .then((res) => setMoviesData(res.data.results));     
},[nameSearch])





    return (
        
        
        <div className='container-cards'>
            <div className="filter">
                <p>Nombre de films à afficher: {valueRange}</p>
                <input type="range" min="1" max="20" value={valueRange} onChange={(e) => setValueRange(e.target.value)}/>
                 <input  className='name-movie' type="text" placeholder='Recherche par nom' onChange={(e) => setNameValueSearch(e.target.value)}/> 
                               
            </div>
            <ul className='movies'>
                {   
                    moviesdata     
                                
                    .slice(0,valueRange)                                                                 
                    .map((movie) => (
                         <Card key={movie.id} movie={movie}/>
                          ))                                                                            
                                                                                     
                }
                
            </ul>
        </div>
    );
};

export default Movies;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import NavAndTittle from '../components/NavAndTittle';


const Like = () => {
    
    const [result, setResult] = useState([]);
    
    

   useEffect(() => {
    let movieArray = [];
    let moviesId = window.localStorage.movies?
    window.localStorage.movies.split(",")
    :[];

    moviesId.forEach(movie => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movie}?api_key=6df5915ad72530ff9fc45aed522c903c`)
            .then((res) => movieArray.push(res.data))
            .then(() => setResult(movieArray))
            
    });
   },[])   
              

    return (
        <div>
        <NavAndTittle/>
        <h2>Coup de coeur</h2>
        <ul>                             
           {
           result.length > 0 ? (
            result.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))):
            (<p>Erreur</p>)
            }
        </ul>
        </div>
    );
};

export default Like;
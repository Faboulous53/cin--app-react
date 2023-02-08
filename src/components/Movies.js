import React, { useEffect, useState } from 'react';
import axios from "axios"

const Movies = () => {
    
const linkConnect = "https://api.themoviedb.org/3/movie/550?api_key=6df5915ad72530ff9fc45aed522c903c"
const useLink = linkConnect.slice(0,34);  
const[data, setData] = useState([]);

useEffect(() => {
    axios
    .get(linkConnect)
    .then((res) => setData(res.data));
    

},[])

    return (
        
        <div>
            <img src={linkConnect+"/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"} alt="" />
        </div>
    );
};

export default Movies;
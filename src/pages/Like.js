import axios from 'axios';
import React, { useEffect } from 'react';
import NavAndTittle from '../components/NavAndTittle';

const Like = () => {
    useEffect(() => {
        axios
            .get()
    },[])


    return (
        <div>
        <NavAndTittle/>
        <h2>Coup de coeur</h2>
        </div>
    );
};

export default Like;
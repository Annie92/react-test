import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MoviesGrid() {
    const [ movies, setMovies] = useState([]);
    useEffect( () => {
        const m = ["drishyam", "top gun maverick", "Logout"];
        setMovies(m);
    }, []);
    return(
        <div className=''>
            {movies.length}
        </div>
    );
}
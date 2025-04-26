import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MoviesGrid() {
    const [ movies, setMovies] = useState([]);
    useEffect( () => {
        fetch('movies.json')
            .then( response => response.json())
            .then( data => setMovies(data));
    }, []);
    return(
        <div>
            <span>Total movies: {movies.length}</span>
            <div className='movies-grid'>
                {
                    movies.map( movie => (
                        <div key={movie.id} className='movie-card'>
                            <img src={`images/${movie.image}`} alt={movie.title}/>
                            <div className='movie-card-info'>
                                <h3>Title: <span className='movie-card-title'>{movie.title}</span></h3>
                                <p>Genre: <span className='movie-card-genre'>{movie.genre}</span></p>
                                <p>Rating: <span className='movie-card-rating'>{movie.rating}</span></p>
                            </div>
                        </div>
                    ))
                }
                    
            </div>
        </div>
    );
}
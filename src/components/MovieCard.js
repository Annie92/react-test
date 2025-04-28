
import React from "react";
import '../styles.css'

export default function MovieCard({movie}) {
    const handleError = (e) => {
        e.target.src = `images/default.jpg`;
    }
    const addRatingClass = (rating) => {
        if ( rating >= 8 ) {
            return 'rating-good'
        } 
        if( rating >= 5 ) {
            return 'rating-ok'
        }
        return 'rating-bad';
    }
    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className="movie-card-info">
            <h3>
                Title: <span className="movie-card-title">{movie.title}</span>
            </h3>
            <p>
                Genre: <span className="movie-card-genre">{movie.genre}</span>
            </p>
            <p>
                Rating: <span className={`movie-card-rating ${addRatingClass(movie.rating)}`}>{movie.rating}</span>
            </p>
            </div>
        </div>
    );
}

import React from "react";
import '../styles.css'

export default function MovieCard({movie}) {
    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} />
            <div className="movie-card-info">
            <h3>
                Title: <span className="movie-card-title">{movie.title}</span>
            </h3>
            <p>
                Genre: <span className="movie-card-genre">{movie.genre}</span>
            </p>
            <p>
                Rating: <span className="movie-card-rating">{movie.rating}</span>
            </p>
            </div>
        </div>
    );
}
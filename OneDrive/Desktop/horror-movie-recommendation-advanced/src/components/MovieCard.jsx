import React, { useState } from 'react';

function MovieCard({ title, year, image }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="movie-card">
      <img
        className={`movie-image ${loaded ? 'loaded' : ''}`}
        src={image}
        alt={title}
        onLoad={() => setLoaded(true)}
      />
      <h2>{title}</h2>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;

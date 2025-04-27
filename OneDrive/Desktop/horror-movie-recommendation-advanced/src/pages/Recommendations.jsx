import { motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies";

function Recommendations() {
  const country = localStorage.getItem("country");
  const type = localStorage.getItem("type");
  const countryMovies = moviesData[country] || {};

  let movies = [];

  if (type === "all") {
    // Collect all types of movies
    Object.values(countryMovies).forEach(categoryMovies => {
      movies = movies.concat(categoryMovies);
    });
  } else {
    // Specific type
    movies = countryMovies[type] || [];
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container">
        <h1>Your Horror Movies</h1>
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} year={movie.year} image={movie.image} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Recommendations;

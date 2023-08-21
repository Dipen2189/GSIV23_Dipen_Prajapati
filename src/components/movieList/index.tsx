import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movieLIst.scss";
import MovieCard  from "../common/card/index";
import useMovieList from "./MoovieListHook";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const { movies, isLoading } = useMovieList(searchMovie);
  return (
    <>
    <div>
        <input
          type="text"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
      </div>
    <div className="movie-list">
        {movies.map((movie: any) => {
          return (
              <MovieCard
                id={movie.id} 
                title={movie.title} 
                rating={movie.vote_average} 
                description={movie.overview} 
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            
          )
        })}
      </div>
      {isLoading ?? <p>Loading...</p>}
    </>
  );
};
export default MovieList;

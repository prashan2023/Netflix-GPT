import React from 'react'
import { useSelector } from 'react-redux';
import MovieCards from './MovieCards';

const SearchMoviesContainer = () => {
  const {gptMovies,movieResult} = useSelector((store) => store.gpt);
  console.log("list:",gptMovies);
  console.log(movieResult)
  if(!gptMovies || !movieResult) return;
  return(
    <div className="mt-80 p-4 opacity-85">
        {gptMovies.map((movie,index) => (
            <MovieCards 
            key={index} 
            title={movie.movieName} 
            movies={movieResult[index].results}/>
        ))}
    </div>
  )
}

export default SearchMoviesContainer;
import { useSelector } from 'react-redux'
import MovieCards from './MovieCards'

const MovieLists = () => {
const movies1 = useSelector((store) => store?.movies?.NowPlayingMovies); 
const movies2 = useSelector((store) => store?.movies?.PopularMovies);  
const movies3 = useSelector((store) => store?.movies?.TopRatedMovies);  
const movies4 = useSelector((store) => store?.movies?.UpcomingMovies);   

  return (
    <div>
      {movies1 &&
      <MovieCards title={"NowPlaying Movies"} movies={movies1}/>}
      {movies2 &&
      <MovieCards title={"Popular"} movies={movies2}/>}
      {movies3 &&
      <MovieCards title={"Top rated"} movies={movies3}/>}
      {movies4 &&
      <MovieCards title={"Upcoming"} movies={movies4}/>}
    </div>
  )
}

export default MovieLists;
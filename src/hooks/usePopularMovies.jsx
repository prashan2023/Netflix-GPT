import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.PopularMovies);
    const  getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() =>{
    if(! popularMovies){
      getPopularMovies();
    }  
  },[]);
}

export default usePopularMovies;
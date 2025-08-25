import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";


const useTopratedMovies = () => {
   const dispatch = useDispatch();
   const TopratedMovies = useSelector((store) => store.movies.TopRatedMovies);
   const getTopRatedMovies = async() =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
   const json = await data.json();
   dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() =>{
    if(! TopratedMovies){
      getTopRatedMovies()
    }
  },[]);
}

export default useTopratedMovies;
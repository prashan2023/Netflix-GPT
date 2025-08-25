import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";

const useNowPlayingMovies =()=>{
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector((store) => store.movies.NowPlayingMovies)
  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() =>{
    if(! NowPlayingMovies){
          getNowPlayingMovies()
    }
  },[]);

}

export default useNowPlayingMovies;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
 

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies)
    const getUpcomingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
      };
    
    useEffect(() =>{
        if(! UpcomingMovies){
            getUpcomingMovies()
        }
    },[]);
    
};

export default useUpcomingMovies;
import { useEffect } from 'react';
import { options } from '../utils/constant';
import { useDispatch, useSelector} from 'react-redux';
import { addTrailervideo  } from '../utils/moviesSlice';
import { TRAILER_URL } from '../utils/constant';

const useMyMovieTrailler = (id) => {

  const dispatch = useDispatch();
  const TrailerId = useSelector((store) => store.movies.TrailerVideo);
  const getMyMovieTrailer = async()=>{
      const data = await fetch(TRAILER_URL + id + "/videos?language=en-US", options);
      const json = await data.json();
     
      const trailer = json?.results?.filter((video) => video.type == "Trailer");
      const MovieClipKey = trailer ? (trailer[0].key):video[0];
      dispatch(addTrailervideo(MovieClipKey));
      
  };

  useEffect(() =>{
    if(!TrailerId){
       getMyMovieTrailer()
    } 
  },[]);

  
}

export default useMyMovieTrailler;
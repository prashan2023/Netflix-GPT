import { useDispatch } from 'react-redux';
import { TRAILER_URL } from '../utils/constant';
import { options } from '../utils/constant';
import { useEffect } from 'react';
import { getMoreInfo, getPublishedDate, getTrailerKey, getVideoTitle } from '../utils/trailerSlice';


const useFetchTrailerVedio = (id) => {
  const dispatch = useDispatch();
  const getMyMovieTrailer = async()=>{
      const data = await fetch(TRAILER_URL + id + "/videos?language=en-US", options);
      const json = await data.json();
      const {name,published_at} = json?.results[0];
      const trailer = json?.results?.filter((video) => video.type == "Trailer");
      const title = trailer[0].name;
      const MovieClipKey = trailer ? (trailer[0].key):video[0];
      dispatch(getTrailerKey(MovieClipKey));
      dispatch(getVideoTitle(title));
      dispatch(getPublishedDate(published_at));
      dispatch(getMoreInfo(name));
};

  useEffect(() =>{
       getMyMovieTrailer()
  },[]);

  
}


export default useFetchTrailerVedio;
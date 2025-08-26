import { IMAGE_CDN_URL } from "../utils/constant";
import { getPosterId, getTrailerKey, getVedioState, getVideoTitle } from "../utils/trailerSlice";
import { useDispatch } from "react-redux";

const PosterCard = ({posterPath,title,id}) => {
  const dispatch = useDispatch();
  const moviehandleClick =()=>{
        dispatch(getPosterId(id));
        dispatch(getVedioState(true)); 
        dispatch(getTrailerKey(title));
  };

  if(! posterPath) return null;
  return (
    <div className="w-56 h-60 cursor-pointer" onClick={moviehandleClick} > 
        <img 
         className="w-52 h-56 " 
         alt={title} 
         src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
}

export default PosterCard;
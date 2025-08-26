import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const Maincontainer = () => {

  const movies = useSelector((store) => store?.movies?.NowPlayingMovies);
  const TrailerKey = useSelector((store) => store.movies?.Trailervideo);
  if(! movies)  return;
  const {title,overview,id} = movies[0];
  
  return (
    <div>
       <VideoTitle title={title} overview={overview}/>
       <VideoBackground id={id} TrailerKey={TrailerKey}/>
    </div>
  )
}

export default Maincontainer;
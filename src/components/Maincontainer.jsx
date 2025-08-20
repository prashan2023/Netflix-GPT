import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const Maincontainer = () => {

  const movies = useSelector((store) => store?.movies?.NowPlayingMovies);
  if(! movies)  return;
  const {title,overview,id} = movies[0];
  
  return (
    <div>
       <VideoTitle title={title} overview={overview}/>
       <VideoBackground id={id}/>
    </div>
  )
}

export default Maincontainer;
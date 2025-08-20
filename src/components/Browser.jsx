import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";

const Browser = () => {
  useNowPlayingMovies();
  
  return (
     <>
      <Header/>
     </>
  )
}

export default Browser;
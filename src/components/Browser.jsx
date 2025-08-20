import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browser = () => {
  useNowPlayingMovies();
  
  return (
     <>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
     </>
  )
}

export default Browser;
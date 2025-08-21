import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
     <>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
     </>
  )
}

export default Browser;
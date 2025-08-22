import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browser = () => {
  const gptValue = useSelector((store) => store.gpt.gptToggleBoolean);
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
     <>
      <Header/>
      {gptValue?(
        <>
         <Maincontainer/>
         <Secondarycontainer/>
        </>
      ): <GptSearchPage/>}
     </>
  )
}

export default Browser;
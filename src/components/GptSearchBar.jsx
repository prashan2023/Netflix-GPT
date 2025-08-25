import { useRef } from "react";
import languageConstant from "../utils/languageConstant";
import { useSelector,useDispatch } from "react-redux"; 
import { getGptSearch } from "../utils/gptSlice";
import { ai } from "../utils/geminiAi";
import { Type } from "@google/genai";
import useFetchTmdbMovieSearch from "../hooks/useFetchTmdbMovieSearch";

 

 

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleGptSearch = async() =>{
      const SearchQuary = "Act as a movie Recommandation system and suggest a movie name only" + searchText.current.value + ". give five movie name following example is given, Example:Extraction,Don,Transfomer,Avatar,Leo";
      if(!searchText.current.value)return dispatch(getGptSearch({})) ;
      const response = await ai.models.generateContent({
       model: "gemini-2.0-flash",
       contents: SearchQuary,
          config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            movieName: {
              type: Type.STRING,
            },
          },
          propertyOrdering: ["movieName"],
        },
      },
    },
  });

  const jsonString = response.text;
  const gptMovies = JSON.parse(jsonString);
  
  const TmdbMovies = gptMovies.map((movie) =>  useFetchTmdbMovieSearch(movie?.movieName));
    
  const Movies = await Promise.all(TmdbMovies);
  dispatch(getGptSearch({gptMovies: gptMovies, movieResult:Movies}));
  
 
  
  
};

return (
    <div className="pt-[10%] ">
        <form onSubmit={(e) => e.preventDefault()} className= "text-black w-7/12 flex justify-between m-auto left-0 right-0 bg-black p-4 rounded-lg">
            <input 
             ref={searchText}
             className="px-8 outline-0 py-2 w-4/5 bg-white mr-4 rounded-lg text-xl font-normal"  
             placeholder={languageConstant[langKey].placeholder}
            />
            <button 
             className="bg-red-800 w-1/5 text-white font-bold rounded-lg"
             onClick={handleGptSearch}
            >
            {languageConstant[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar
import { options, SEARCHTMDB_URL } from "../utils/constant";
const useFetchTmdbMovieSearch = async(movie)=>{
        const data = await fetch(SEARCHTMDB_URL + movie +"&include_adult=false&language=en-US&page=1", options);
        const json = await data.json();
        return json ;  
};


export default useFetchTmdbMovieSearch;
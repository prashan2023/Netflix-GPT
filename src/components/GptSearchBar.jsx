import languageConstant from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] ">
        <form className= "text-black w-7/12 flex justify-between m-auto left-0 right-0 bg-black p-4 rounded-lg">
            <input className="px-8 outline-0 py-2 w-4/5 bg-white mr-4 rounded-lg text-xl font-normal"  placeholder={languageConstant[langKey].placeholder}/>
            <button className="bg-red-800 w-1/5 text-white font-bold rounded-lg">{languageConstant[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
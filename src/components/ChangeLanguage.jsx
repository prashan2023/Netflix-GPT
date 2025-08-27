import { useDispatch } from "react-redux";
import { LanguageToggle } from "../utils/constant";
import { addLangaugeIdentifier } from "../utils/configSlice";

const ChangeLanguage = () => {
  const dispatch = useDispatch()
  const handleLanguageChange =(e)=>{
      dispatch(addLangaugeIdentifier(e.target.value));
  };
  
  return (
    <div className="p-0 md:p-2 bg-black rounded-lg font-bold text-white text-lg mr-4">
        <select className="bg-black p-0 md:p-1 m-0.5 md:m-1 cursor-pointer" onChange={handleLanguageChange}>
            {LanguageToggle.map((language) =>(
            <option key={language.name} value={language.identifier} className="cursor-pointer">{language.name}</option>
            ))}
        </select>    
    </div>
  )
}

export default ChangeLanguage;
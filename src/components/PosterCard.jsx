import { IMAGE_CDN_URL } from "../utils/constant";
import { useParams } from "react-router";
const PosterCard = ({posterPath,title,id}) => {
  const moviehandleClick =()=>{
    console.log(id);
  }
  return (
    <div className="w-56 h-60 cursor-pointer" onClick={moviehandleClick} > 
        <img 
         className="w-52 h-56 " 
         alt={title} 
         src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
}

export default PosterCard
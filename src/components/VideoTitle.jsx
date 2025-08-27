import { useState } from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({title,overview,publishedDate,moreInfo}) => {
  const [toggleInfo,setToggleInfo] = useState(false);

  return (
    <div className="w-screen aspect-video pt-50 pl-30 text-white bg-gradient-to-r from-black absolute"> 
        <h1 className="text-sm md:text-6xl w-1/2 font-bold -mt-15 md:mt-0">{title}</h1>
        <p className="text-lg p-2 w-1/4 hidden md:block">{overview}</p>
        <div>
            <div >
            <button className="w-25 md:w-40 h-8 md:h-12 md:static mt-10 md:mt-0 bg-white text-sm md:text-xl text-black font-bold m-2 rounded-lg hover:opacity-80 ">
                ▶️ Play
            </button>
            <button onClick={() => setToggleInfo(!toggleInfo)} className="w-50 h-12 hidden md:inline-block bg-gray-600 hover:bg-gray-700 text-lg px-5 mr-6 text-white font-bold m-2 rounded-lg cursor-pointer">
                ℹ️ More Info {toggleInfo ? "⬆️": "⬇️"}
            </button>
            </div>
            {toggleInfo && <div className="px-45 py-10 text-black relative w-max h-max mt-10 rounded-lg bg-gray-600 z-40 opacity-75">
              <h1 className="text-xl font-normal mb-5">Published Date : {publishedDate}</h1>
              <p className="text-xl font-normal">Specific Title : {moreInfo}</p>
            </div>}
        </div>
        
         
    </div>
  )
}
export default VideoTitle;
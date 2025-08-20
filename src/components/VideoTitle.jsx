const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-50 pl-30 text-white bg-gradient-to-r from-black absolute"> 
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="text-lg p-2 w-1/4">{overview}</p>
        <div>
            <button className="w-40 h-12 bg-white text-lg text-black font-bold m-2 rounded-lg hover:opacity-80">
                ▶️ Play
            </button>
            <button className="w-40 h-12 bg-gray-600 text-lg  text-white font-bold m-2 rounded-lg">
                ℹ️ More Info 
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;
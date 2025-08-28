import useMyMovieTrailler from "../hooks/useMyMovieTrailler";

const VideoBackground = ({id,TrailerKey}) => {
  useMyMovieTrailler(id);
  if(! TrailerKey) return;
  
  return (
    <div className="w-screen">
      <iframe 
       className="w-screen aspect-video" 
       src={"https://www.youtube.com/embed/"+ TrailerKey + "?autoplay=1&mute=1"}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       allowFullscreen >
      </iframe>
    </div>
  )
}

export default VideoBackground
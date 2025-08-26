import useMyMovieTrailler from "../hooks/useMyMovieTrailler";

const VideoBackground = ({id,TrailerKey}) => {
  useMyMovieTrailler(id);
  if(! TrailerKey) return;
  
  return (
    <div className="w-screen">
      <iframe 
       className="w-screen aspect-video"
      //  width="720"
      //  height="300" 
       src={"https://www.youtube.com/embed/"+ TrailerKey + "?autoplay=1&mute=1"}
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" 
       allowfullscreen>
      </iframe>
    </div>
  )
}

export default VideoBackground
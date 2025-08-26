import PosterCard from "./PosterCard";

const MovieCards = ({title,movies}) => {
  return (
    <div className="bg-black">
        <div className="ml-10 -my-65  pb-75 relative">
            <h1 className="p-4 text-4xl text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar ml-6">
              <div className="flex p-4">
                {movies.map((movie) =>(
                   <PosterCard 
                    className="w-56 h-60 bg-black"
                    key={movie.id} 
                    id = {movie.id}
                    posterPath ={movie.poster_path} 
                    title={movie.original_title}
                   />
                ))}
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default MovieCards;
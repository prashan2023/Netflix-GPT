import { useSelector } from 'react-redux';
import Header from './Header';
import useFetchTrailerVedio from '../hooks/useFetchTrailerVedio';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const TrailerBackground = () => {
  const {PosterId,TrailerKey,VedioTitle,PublishedDate,MoreInfo} = useSelector((store) => store.trailer);
  useFetchTrailerVedio(PosterId);
 
  
  return (
    <div>
        <Header/>
        <div className="relative pt-[15%] md:pt-0">
            <VideoTitle title={VedioTitle} overview={""} publishedDate={PublishedDate} moreInfo={MoreInfo}/>
            <VideoBackground id={PosterId} TrailerKey={TrailerKey}/>
        </div>
     
    </div>
  )
}

export default TrailerBackground;
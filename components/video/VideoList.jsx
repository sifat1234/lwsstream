import videos from '/data/videos.json'; // Assuming videos.json is an array of video objects
import VideoCard from './VideoCard';

function VideoList() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}

export default VideoList;

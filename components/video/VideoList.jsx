import VideoCard from './VideoCard';
import { getVideos } from '@/utils/getVideoData';

export default async function VideoList({ lang }) {
  const videoData = await getVideos();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {videoData.map((video, index) => (
        <VideoCard key={index} video={video} lang={lang} />
      ))}
    </div>
  );
}

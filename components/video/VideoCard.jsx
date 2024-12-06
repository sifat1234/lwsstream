import Link from 'next/link';
import Image from 'next/image';

function VideoCard({ video }) {
  return (
    <div className='rounded-lg overflow-hidden bg-color-gray'>
      <Link href={`/videos/${video.videoId}`}>
        <Image
          src={video.thumbnail}
          alt={video.channelTitle}
          className='w-full h-40 object-cover'
          width={480}
          height={360}
        />
      </Link>
      <div className='p-2'>
        <p className='font-semibold'>{video.title}</p>
        <p className='text-sm text-gray-400'>{video.channelTitle}</p>
      </div>
    </div>
  );
}

export default VideoCard;

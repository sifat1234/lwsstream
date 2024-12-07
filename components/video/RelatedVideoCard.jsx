'use client';
import Image from 'next/image';
import { redirectToPath } from '@/app/[lang]/server-actions';

function RelatedVideoCard({ randomVideos, lang }) {
  const handleRedirect = async (videoId) => {
    const path = `/${lang}/videos/${videoId}`;

    await redirectToPath(path);
  };

  return (
    <div className='space-y-4'>
      {randomVideos?.map((randomvideo, index) => (
        <div
          key={index}
          className='flex items-start space-x-4 cursor-pointer'
          onClick={() => handleRedirect(randomvideo.videoId)}
        >
          <Image
            src={randomvideo.thumbnail}
            alt='Fallout Shelter PC Thumbnail'
            className='w-30 h-20 rounded object-cover'
            width={130}
            height={80}
          />
          <div>
            <h3 className='font-semibold'>{randomvideo.title}</h3>
            <p className='text-sm text-gray-400'>{randomvideo.channelTitle}</p>
            <p className='text-sm text-gray-400'>26,389M</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedVideoCard;

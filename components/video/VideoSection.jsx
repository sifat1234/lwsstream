import Link from 'next/link';
import Image from 'next/image';
import VideoList from './VideoList';

function VideoSection() {
  return (
    <section className='mt-12'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Streams of the day</h2>
        <a
          href='#'
          className='bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full'
        >
          View all
        </a>
      </div>

      <VideoList />
    </section>
  );
}

export default VideoSection;

import VideoList from './VideoList';
import Link from 'next/link';

function VideoSection({ lang }) {
  return (
    <section className='mt-12'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Streams of the day</h2>
        <Link
          href='/viewall'
          className='bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full'
        >
          View all
        </Link>
      </div>

      <VideoList lang={lang} />
    </section>
  );
}

export default VideoSection;

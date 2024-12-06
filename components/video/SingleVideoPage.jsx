import Link from 'next/link';
import Image from 'next/image';
import videos from '/data/videos.json'; // Assuming videos.json is an array of video objects
import { notFound } from 'next/navigation';

function SingleVideoPage({ id }) {
  const video = videos?.find((video) => video.videoId === id);

  if (!video) {
    notFound();
  }

  // // Randomly pick 5 videos
  const filteredVideos = videos.filter((video) => video.videoId !== id);

  function getRandomVideos(arr, num) {
    const result = [];
    const seenIndexes = new Set();

    while (result.length < num) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!seenIndexes.has(randomIndex)) {
        result.push(arr[randomIndex]);
        seenIndexes.add(randomIndex);
      }
    }

    return result;
  }

  const randomVideos = getRandomVideos(filteredVideos, 5);

  return (
    <main className='flex flex-col lg:flex-row gap-6'>
      <div className='lg:w-3/4'>
        <div className='relative'>
          <iframe
            src='https://www.youtube.com/embed/hecODa5ZgZM'
            title='YouTube video player'
            frameborder='0'
            className='w-full aspect-video h-[500px]'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>

          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
            <div className='flex items-center space-x-4'>
              <button className='bg-color-gray hover:bg-opacity-80 rounded-full p-2'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                  ></path>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
              </button>
              <div className='bg-color-purple text-white px-2 py-1 rounded text-sm'>
                LIVE
              </div>
              <span className='text-sm'>46:02</span>
              <button className='bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm'>
                Donate
              </button>
            </div>
          </div>
        </div>
        <h1 className='text-2xl font-bold mt-4'>{video.title}</h1>
        <div className='flex items-center space-x-4 mt-2'>
          {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
          <Image
            src='/avatar.png'
            alt='Avatar'
            className='w-10 h-10 rounded-full'
            width={512}
            height={512}
          />
          <div>
            <p className='font-semibold'>{video.channelTitle}</p>
          </div>
          <button className='bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto'>
            Subscribe
          </button>
        </div>
      </div>
      <div className='lg:w-1/4'>
        <h2 className='text-xl font-semibold mb-4'>You may like</h2>
        <div className='space-y-4'>
          {randomVideos.map((randomvideo, index) => (
            <Link
              href={`/videos/${randomvideo.videoId}`}
              key={index}
              className='flex items-start space-x-4'
            >
              <Image
                src={randomvideo.thumbnail}
                alt='Fallout Shelter PC Thumbnail'
                className='w-30 h-20 rounded object-cover'
                width={130}
                height={80}
              />
              {/* <Link href={`/videos/${randomvideo.videoId}`}> */}

              <div>
                <h3 className='font-semibold'>{randomvideo.title}</h3>
                <p className='text-sm text-gray-400'>
                  {randomvideo.channelTitle}
                </p>
                <p className='text-sm text-gray-400'>26,389M</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SingleVideoPage;

'use client';
import { usePathname } from 'next/navigation';

const NotFoundPage = () => {
  const videoId = usePathname().split('/').pop();
  return <p>{`This video with ${videoId} id was not found!`}</p>;
};

export default NotFoundPage;

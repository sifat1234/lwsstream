'use client';
import { usePathname } from 'next/navigation';

const NotFoundPage = () => {
  const videoId = usePathname().split('/').pop();
  return (
    <>
      <p>{`This page with ${videoId} id was not found!`}</p>
    </>
  );
};

export default NotFoundPage;

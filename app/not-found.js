'use client';
import { usePathname } from 'next/navigation';
import HeaderClient from '@/components/HeaderClient';
const NotFoundPage = () => {
  const videoId = usePathname().split('/').pop();
  return (
    <>
      <HeaderClient />
      <p>{`This page with ${videoId} id was not found!`}</p>
    </>
  );
};

export default NotFoundPage;

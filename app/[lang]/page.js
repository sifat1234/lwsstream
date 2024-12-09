import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/video/VideoSection';
import { getDictionary } from './disctionaries';

export default async function Home({ params }) {
  const { lang } = params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <VideoSection lang={lang} />
    </>
  );
}

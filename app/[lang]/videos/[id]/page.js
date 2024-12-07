import SingleVideoPage from '@/components/video/SingleVideoPage';

function VideoPage({ params }) {
  const { id, lang } = params;
  console.log(lang);

  return <SingleVideoPage id={id} lang={lang} />;
}

export default VideoPage;

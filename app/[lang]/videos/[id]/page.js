import SingleVideoPage from '@/components/video/SingleVideoPage';

function VideoPage({ params }) {
  const { id } = params;

  return <SingleVideoPage id={id} />;
}

export default VideoPage;

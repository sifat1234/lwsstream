import Modal from '@/components/Modal';
import SingleVideoPage from '@/components/video/SingleVideoPage';
import Single from '@/components/video/Single';

function VideoPage({ params }) {
  const { id } = params;

  return (
    <>
      <Modal>
        <Single id={id} />
      </Modal>
    </>
  );
}

export default VideoPage;

import Modal from '@/components/Modal';
import SingleVideoModalPage from '@/components/video/SingleVideoModalPage';
import { getDictionary } from '@/app/[lang]/disctionaries';

export default async function VideoPage({ params }) {
  const { id, lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Modal>
        <SingleVideoModalPage id={id} dictionary={dictionary} />
      </Modal>
    </>
  );
}

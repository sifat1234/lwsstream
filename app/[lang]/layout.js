import Header from '@/components/Header';
import { getDictionary } from './disctionaries';

export default async function GalleryLayout({ children, modal, params }) {
  const { lang } = params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} />
      {modal}
      {children}
    </>
  );
}

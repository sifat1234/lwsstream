import SingleVideoPage from '@/components/video/SingleVideoPage';
import { getDictionary } from '/app/[lang]/disctionaries';

export default async function VideoPage({ params }) {
  const { id, lang } = params;
  console.log(lang);
  const dictionary = await getDictionary(lang);

  return <SingleVideoPage id={id} lang={lang} dictionary={dictionary} />;
}

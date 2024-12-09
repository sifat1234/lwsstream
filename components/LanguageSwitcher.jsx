'use client';

import Link from 'next/link';
import Image from 'next/image';
import { redirectToPath } from '@/app/[lang]/server-actions';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const languages = [
    {
      code: 'en',
      language: 'English',
    },
    {
      code: 'bn',
      language: 'Bangla',
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showManu, setShowManu] = useState(false);

  const handleLanguageChange = async (lang) => {
    const pathSegments = pathname.split('/').filter(Boolean); // Split and remove empty segments

    // Check if the first segment matches any language code
    if (languages.some((l) => l.code === pathSegments[0])) {
      pathSegments[0] = lang; // Replace the language code
    } else {
      pathSegments.unshift(lang); // Add the language code as the first segment
    }

    const updatedPath = `/${pathSegments.join('/')}`; // Reconstruct the path

    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === 'en' ? 'English' : 'Bangla',
    });
    setShowManu(false);
    await redirectToPath(updatedPath);
  };

  return (
    <div className='flex gap-4 items-center'>
      <div className='relative'>
        <button
          className='flex items-center gap-2'
          onClick={() => setShowManu(!showManu)}
        >
          <Image
            className='max-w-8'
            src='/bd.png'
            alt='bangla'
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showManu && (
          <div className='absolute right-0 top-full mt-2 w-40 rounded-md bg-black p-2 z-10 shadow-lg'>
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className='flex items-center gap-2 p-2 rounded-md cursor-pointer'
              >
                <Image
                  className='max-w-8'
                  src='/bd.png'
                  alt='bangla'
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

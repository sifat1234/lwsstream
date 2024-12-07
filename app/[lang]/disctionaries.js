import 'server-only';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  bn: () => import('./dictionaries/bn.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (typeof dictionaries[locale] === 'function') {
    try {
      return await dictionaries[locale]();
    } catch (error) {
      console.error(`Error loading dictionary for locale "${locale}":`, error);
      return dictionaries.en(); // Fallback to English dictionary
    }
  } else {
    console.error(`Dictionary for locale "${locale}" not found.`);
    return dictionaries.en(); // Fallback to English dictionary
  }
};

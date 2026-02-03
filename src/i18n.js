import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// თარგმანების ფაილები (ქვემოთ შექმნი)
import enTranslations from './locales/en/translation.json';
import kaTranslations from './locales/ka/translation.json';

i18n
  .use(LanguageDetector) // ავტომატური ენის დეტექცია
  .use(initReactI18next) // React-თან ინტეგრაცია
  .init({
    resources: {
      en: { translation: enTranslations },
      ka: { translation: kaTranslations },
    },
    fallbackLng: 'en', // თუ თარგმანი არ მოიძებნა — ინგლისური
    lng: 'en', // საწყისი ენა (შეიძლება შეცვალო)
    interpolation: {
      escapeValue: false, // React უკვე იცავს XSS-ს
    },
  });

export default i18n;
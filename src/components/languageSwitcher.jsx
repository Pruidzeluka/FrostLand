import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-0 xl:gap-1  bg-gray-200 rounded-full p-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
          currentLang.startsWith('en')
            ? 'bg-white text-black shadow-sm'
            : 'text-gray-600 hover:text-black'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ka')}
        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
          currentLang.startsWith('ka')
            ? 'bg-white text-black shadow-sm'
            : 'text-gray-600 hover:text-black'
        }`}
      >
        ქა
      </button>
    </div>
  );
}

export default LanguageSwitcher; 
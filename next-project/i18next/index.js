import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import DE from './../public/locales/de/translation.json';
import EN from './../public/locales/en/translation.json';
import FR from './../public/locales/fr/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: EN,
  },
  de: {
    translation: DE,
  },
  fr: {
    translation: FR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    detection: {
      order: ['queryString','cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    }
  });


export default i18n;
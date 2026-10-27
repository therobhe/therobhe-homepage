import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './language/en/translation.json';
import deTranslation from './language/de/translation.json';

// Get browser language (returns something like 'de-DE' or 'en-US')
const browserLang = navigator.language;
// Get just the language code (de or en)
const userLanguage = browserLang.split('-')[0];
// Check if the language is supported
const supportedLanguages = ['en', 'de'];
const initialLanguage = supportedLanguages.includes(userLanguage) ? userLanguage : 'en';

i18n
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: enTranslation
    },
    de: {
      translation: deTranslation
    }
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
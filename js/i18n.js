/* ============================================================
   EKLEIPSIS FEST 2026 — i18n.js
   Sistema de traducciones basado en JSON por idioma
   ============================================================ */

const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de'];
const DEFAULT_LANG    = 'es';

let currentTranslations = {};

async function loadLanguage(lang) {
  try {
    const res = await fetch(`js/lang/${lang}.json?v=1`);
    if (!res.ok) throw new Error(`No se pudo cargar ${lang}.json`);
    currentTranslations = await res.json();
    applyTranslations();
    updateLangButtons(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('ekleipsisLang', lang);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  } catch (err) {
    console.warn(`[i18n] Error cargando ${lang}:`, err);
    if (lang !== DEFAULT_LANG) loadLanguage(DEFAULT_LANG);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (currentTranslations[key] !== undefined) {
      el.innerHTML = currentTranslations[key];
    }
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  loadLanguage(lang);
}

// Inicializar
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const browserLang  = navigator.language?.slice(0, 2);
const savedLang    = localStorage.getItem('ekleipsisLang');
const initialLang  = savedLang
  || (SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG);

loadLanguage(initialLang);
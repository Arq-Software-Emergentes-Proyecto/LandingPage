import { computed, ref } from 'vue'
import es from './es.js'
import en from './en.js'

const MESSAGES = { es, en }
const STORAGE_KEY = 'bf-landing-lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && saved in MESSAGES) return saved
  } catch {
    /* almacenamiento no disponible: se usa el idioma del navegador */
  }
  return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es'
}

const lang = ref(initialLang())
document.documentElement.lang = lang.value

/** Idioma activo y textos traducidos (español por defecto, inglés opcional). */
export function useI18n() {
  const t = computed(() => MESSAGES[lang.value])
  function setLang(next) {
    if (!(next in MESSAGES)) return
    lang.value = next
    document.documentElement.lang = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* sin almacenamiento: el cambio dura solo esta visita */
    }
  }
  return { lang, t, setLang }
}

import { computed, ref } from 'vue'

const STORAGE_KEY = 'theme'

// Thema ophalen uit localStorage, default dark
function readTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

const theme = ref(readTheme())

// Class op de body zetten, de CSS-variabelen hangen hieraan
function applyTheme(value) {
  document.body.classList.toggle('light', value === 'light')
  document.body.classList.toggle('dark', value === 'dark')
}

export function initTheme() {
  applyTheme(theme.value)
}

export function useTheme() {
  const isLight = computed(() => theme.value === 'light')

  function setTheme(value) {
    theme.value = value
    applyTheme(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // opslaan mislukt (bijv. private mode), thema werkt dan alleen voor deze sessie
    }
  }

  return { theme, isLight, setTheme }
}

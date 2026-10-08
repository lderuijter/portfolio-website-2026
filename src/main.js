import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initTheme } from './composables/useTheme'

// Eerst de componenten
import './assets/css/components/main.css'
import './assets/css/components/footer.css'
import './assets/css/components/logo.css'
import './assets/css/components/navBurger.css'
import './assets/css/components/scrollbar.css'
import './assets/css/components/themeSlider.css'
// Daarna de pagina's
import './assets/css/pages/forms.css'
import './assets/css/pages/home.css'
import './assets/css/pages/projects.css'
import './assets/css/pages/contact.css'

initTheme()

createApp(App).use(router).mount('#app')

// Global styles
import './assets/main.css'

// Core framework
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Main app and router
import App from './App.vue'
import router from './router'

// Create app instance
const app = createApp(App)

// Global plugins
app.use(createPinia())
app.use(router)

// Mount to DOM
app.mount('#app')

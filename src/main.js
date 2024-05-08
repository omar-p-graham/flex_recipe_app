import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from './router'
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(createPinia().use(piniaPluginPersistedState)).mount('#app')

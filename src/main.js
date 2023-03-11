import { createApp } from 'vue'
import Router from '@/router';
import vuetify from "@/plugins/vuetify";
import App from './App.vue'

import './assets/css/site/site.css'

const app = createApp(App)
app.use(Router)
app.use(vuetify)
app.mount('#app')
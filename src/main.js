import { createApp } from 'vue'
import Router from '@/router';
import Store from '@/store'
import Vuetify from "@/plugins/vuetify";
import App from './App.vue'

import './assets/css/site/site.css'
import 'bulma/css/bulma.css'


const app = createApp(App)
app.use(Router)
app.use(Vuetify)
app.use(Store)
app.mount('#app')
import { createRouter, createWebHashHistory } from 'vue-router'
import Site from './routes/site'

const routes = [
    { path: '/:pathMatch(.*)*', redirect: '/404' },
    Site
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
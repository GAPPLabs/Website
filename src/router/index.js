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

const DEFAULT_TITLE = 'GAPP LABS, INC.';
router.beforeEach((to) => {
    document.title = to.meta.title + ' - ' +  DEFAULT_TITLE || DEFAULT_TITLE;
})

export default router
export default {
    path: '/',
    component: () => import('@/layout/Site.vue'),
    children: [
        {
            meta: {
                title: 'Inicio'
            },
            path: '/',
            name: 'Inicio',
            component: () => import('@/views/site/Site.vue')
        },
        {
            meta: {
                title: 'Error 404'
            },
            path: '/404',
            name: '404',
            component: () => import('@/components/site/404.vue')
        }
    ]
}
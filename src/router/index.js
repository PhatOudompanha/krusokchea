import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../pages/Overview.vue'
import Users from '../pages/Users.vue'
import Reports from '../pages/Reports.vue'
import Settings from '../pages/Settings.vue'

const routes = [
    { path: '/', name: 'Overview', component: Overview },
    { path: '/users', name: 'Users', component: Users },
    { path: '/reports', name: 'Reports', component: Reports },
    { path: '/settings', name: 'Settings', component: Settings },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

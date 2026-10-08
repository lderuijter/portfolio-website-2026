import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/home', redirect: '/' },
    { path: '/projects', name: 'projects', component: ProjectsView, meta: { title: 'Projects' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contact' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: 'Not found' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Portfolio'
})

export default router

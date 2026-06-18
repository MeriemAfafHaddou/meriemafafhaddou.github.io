import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'Meriem Afaf Haddou - Software Engineer' }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/ResumeView.vue'),
    meta: { title: 'Resume - Meriem Afaf Haddou' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: { title: 'Projects - Meriem Afaf Haddou' }
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetail',
    component: () => import('@/views/ProjectDetailView.vue'),
    meta: { title: 'Project - Meriem Afaf Haddou' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Meriem Afaf Haddou'
})

export default router
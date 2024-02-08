import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue'),
        },
        {
          path: 'signup',
          component: () => import('../views/front/SignUpView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '',
          name: 'AdminHome',
          component: () => import('../views/admin/AdminHome.vue'),
        },
        {
          path: 'adminlogin',
          component: () => import('../views/admin/AdminLoginView.vue'),
        },
      ],
    },
  ]
})

export default router

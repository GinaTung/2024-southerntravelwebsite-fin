import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'TouristAttractions',
          name: 'TouristAttractions',
          component: () => import('../views/front/TouristAttractionsView.vue')
        },
        {
          path: 'TouristPackage',
          redirect: '/TouristPackage/all', // Redirect to '/newpage/a' by default
          name: 'TouristPackage',
          component: () => import('../views/front/TouristPackageView.vue'),
          children: [
            {
              path: 'all',
              component: () => import('../views/front/TouristSearchAllAreaView.vue')
            },
            {
              path: ':category/:title',
              name:'TouristSinglePackage',
              component: () => import('../views/front/TouristSinglePackageView.vue')
            },
            {
              path: 'searchChiayi',
              component: () => import('../views/front/TouristSearchChiayiView.vue')
            },
            // Tainan, Kaohsiung
            {
              path: 'searchTainan',
              component: () => import('../views/front/TouristSearchTainanView.vue')
            },
            {
              path: 'searchKaohsiung',
              component: () => import('../views/front/TouristSearchKaohsiungView.vue')
            }
          ]
        },
        {
          path: 'TouristBudget',
          name: 'TouristBudget',
          component: () => import('../views/front/TouristBudgetView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue')
        },
        {
          path: 'signup',
          component: () => import('../views/front/SignUpView.vue')
        }
      ]
    },
    {
      path: '/admin',
      redirect: '/admin/AdminHome', // Redirect to '/newpage/a' by default
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'AdminHome',
          name: 'AdminHome',
          component: () => import('../views/admin/AdminHomeView.vue')
        },
        {
          path: 'adminlogin',
          component: () => import('../views/admin/AdminLoginView.vue')
        },
        {
          path: 'attractionsManagement',
          component: () => import('../views/admin/AdminAttractionsManagementView.vue')
        },
        {
          path: 'productsManagement',
          component: () => import('../views/admin/AdminProductsMangementView.vue')
        }
      ]
    },
    //重新導向
    {
      path: '/TouristPackage/:pathMatch(.*)*',
      redirect: {
        name: 'home'
      }
    }
  ],
  // 點選某頁連結時，按鈕會顯示顏色
  linkActiveClass: 'active'
})

export default router

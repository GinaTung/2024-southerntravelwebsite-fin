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
          path: 'TouristAttractions/:category/:title',
          name: 'TouristSingleAttraction',
          component: () => import('../views/front/TouristSingleAttractionView.vue')
        },
        {
          path: 'TouristAttractions',
          name: 'TouristAttractions',
          component: () => import('../views/front/TouristAttractionsView.vue'),
        },
        {
          path: 'TouristPackage/:category/:title',
          name: 'TouristSinglePackage',
          component: () => import('../views/front/TouristSinglePackageView.vue')
        },
        {
          path: 'TouristPackage',
          name: 'TouristPackage',
          component: () => import('../views/front/TouristPackageView.vue'),
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
        },
        {
          path: 'cart',
          redirect: '/cart/checkProduct',
          children: [
            {
              path: 'checkProduct',
              name: 'checkProduct',
              component: () => import('../views/front/CartListView.vue')
            },
            {
              path: 'cartForm',
              name: 'cartForm',
              component: () => import('../views/front/CartFormView.vue')
            },
            {
              path: 'payList',
              name: 'payList',
              component: () => import('../views/front/PayListView.vue')
            },
            {
              path: 'orderDone',
              name: 'orderDone',
              component: () => import('../views/front/OrderDoneView.vue')
            }
          ]
        },
        {
          path: 'profile',
          redirect: '/profile/favorites',
          component: () => import('../views/front/ProfileHomeView.vue'),
          children: [
            {
              path: 'favorites',
              name: 'favorites',
              component: () => import('../views/front/ProfileFavoritesView.vue')
            },
            {
              path: 'orders',
              name: 'orders',
              component: () => import('../views/front/ProfileOrdersView.vue')
            },
          ]
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
        },
        {
          path: 'ordersManagement',
          component: () => import('../views/admin/AdminOrdersManagementView.vue')
        }
      ]
    },
    {
      path: '/TouristPackage/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/cart/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/TouristAttractions/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/profile/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  // 點選某頁連結時，按鈕會顯示顏色
  linkActiveClass: 'active'
})

export default router

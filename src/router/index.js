import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPage.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/NotFoundPage.vue')
  },
  {
    path: '/following',
    name: 'following',
    component: () => import('@/views/FollowingPage.vue')
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: () => import('@/views/RecipePage.vue')
  },
  {
    path: '/lifehack',
    name: 'lifehack',
    component: () => import('@/views/LifehackPage.vue')
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('@/views/RestaurantPage.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('@/views/MyPage.vue')
  },
  {
    path: '/write',
    name: 'write',
    component: () => import('@/components/contents/ContentWrite.vue')
  },
  {
    path: '/content/:id',
    name: 'detail',
    component: () => import('@/components/contents/ContentDetail.vue')
  },
  {
    path: '/user-page/:id',
    name: 'userPage',
    component: () => import('@/components/user/UserPage.vue')
  },
  // {
  //   path: '/user-content/:id',
  //   name: 'myScrap',
  //   component: () => import('@/components/mypage/MyScrap.vue')
  // },
  {
    path: '/my-scrap/:id',
    name: 'myScrap',
    component: () => import('@/components/mypage/MyScrap.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

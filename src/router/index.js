import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPage.vue')
  },
  {
    path: '/contents',
    name: 'contents',
    component: () => import('@/views/ContentsPage.vue'),
  },
  {
    path: '/contents/:id',
    name: 'detail',
    component: () => import('@/components/contents/ContentsDetail.vue'),
  },
  {
    path: '/contents/write',
    name: 'write',
    component: () => import('@/components/contents/ContentsWrite.vue'),
  },
  {
    path: '/contents/modify',
    name: 'modify',
    component: () => import('@/components/contents/ContentsWrite.vue'),
  },
  {
    path: '/following',
    name: 'following',
    component: () => import('@/views/FollowingPage.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('@/views/MyPage.vue')
  },
  {
    path: '/user-page/:id',
    name: 'userPage',
    component: () => import('@/components/user/UserPage.vue')
  },


  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/NotFoundPage.vue')
  },
  
  // {
  //   path: '/recipe',
  //   name: 'recipe',
  //   component: () => import('@/views/RecipePage.vue')
  // },
  // {
  //   path: '/lifehack',
  //   name: 'lifehack',
  //   component: () => import('@/views/LifehackPage.vue')
  // },
  // {
  //   path: '/restaurant',
  //   name: 'restaurant',
  //   component: () => import('@/views/RestaurantPage.vue')
  // },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue')
  },
  
  
  {
    path: '/my-scrap/:id',
    name: 'myScrap',
    component: () => import('@/components/mypage/MyScrap.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  
  if (to.path === '/contents/write' || to.path === `/contents/${to.params.id}`){
    store.state['type'] = "sub" 
  } else {
    store.state['type'] = "main"
  }


  // if (to.path == '/content/*' || to.path == '/coments/*' || to.path == '/write' || to.path == '/user-page' || to.path == '/my-scrap/*'){
  //   console.log("헤더 없에")
  // }
  // if(to.path == next.)
  next()
})

export default router

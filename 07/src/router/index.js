// TODO: 01. 기본적인 router 설정에 대해서 살펴보세요.(vue-router 설치 후 vue-router로 교체)
const createRouter = () => {} // 제거
const createWebHistory = () => {} // 제거

import MainView from '@/views/MainView.vue'
import LoginForm from '@/views/member/LoginForm.vue'
import MemberRegistForm from '@/views/member/MemberRegistForm.vue'
import MemberList from '@/views/member/MemberList.vue'
import MemberDetail from '@/views/member/MemberDetail.vue'
import MemberModifyForm from '@/views/member/MemberModifyForm.vue'
import { inject } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    // TODO: 04. 다음의 경로에 대한 router를 작성하세요.
    //  /member/login-form, /member/regist-member-form
    //  /auth/member-list?currentPage=1, /auth/member-detail/:email
    {
      path: '/user/:id',
      name: 'user',
      component:
    },
    // END
  ],
})

// TODO: 12-1. /auth 에 meta:{requireAuth:true}를 설치하고 login 되지 않은 상태에서는 login으로 이동 시키세요.

//END

export default router

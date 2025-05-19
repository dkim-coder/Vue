import { createApp, ref } from 'vue'
import App from './App.vue'

const app = createApp(App)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { useKakao } from 'vue3-kakao-maps'
useKakao(import.meta.env.VITE_KAKAO_JS_KEY, ['clusterer', 'services', 'drawing'])

// TODO: 02. router를 app에 등록하세요.
import router from './router'

// END
// 임시로 전역에서 관리할 상태들 - 추후 pinia로 변경
app.provide(
  'globalStatus',
  ref({
    isLoggedIn: false,
    loginUser: {},
  }),
)

app.use(router)
app.mount('#app')

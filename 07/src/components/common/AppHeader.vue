<template>
  <div class="container">
    <header class="d-flex justify-content-center my-5 align-items-center">
      <h1 class="text-center">Welcome To</h1>
      <img src="@/assets/img/ssafy_logo.png" id="logo" />
    </header>
    <div class="d-flex justify-content-end">
      <!-- <a href="${root }/" class="mx-3">홈으로</a> |
      <a href="${root }/auth/member-list?currentPage=1" class="mx-3">멤버목록</a> |
      <template v-if="!globalStatus.isLoggedIn">
        <a href="${root }/member/login-form" class="mx-3">로그인</a> |
        <a href="${root }/member/regist-member-form" class="mx-3">회원가입</a>
      </template>
      <template v-if="globalStatus.isLoggedIn">
        <a href="${root }/auth/member-detail?email=${principal.username}" class="mx-3">{{
          globalStatus.loginUser.name
        }}</a> |
        <a href="${root }/member/logout" class="mx-3" @click.prevent="logout">로그아웃</a>
      </template> -->
      <!--TODO: 05.위 주석 내용을 RouterLink 형태로 변경하세요.(로그아웃 제외)-->

      <!--END-->
    </div>
    <hr />
  </div>
</template>

<script setup>
import { inject } from 'vue'
const globalStatus = inject('globalStatus')
const logout = () => {
  globalStatus.value.isLoggedIn = false
  globalStatus.value.loginUser = {}
}
</script>

<style scoped>
header > #logo {
  width: 90px;
  margin-bottom: 8px;
  margin-left: 10px;
}

header > h1 {
  line-height: 50px;
  display: inline-block;
  height: 50px;
}
</style>

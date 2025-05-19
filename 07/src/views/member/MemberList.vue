<template>
  <div class="container">
    <h1>멤버 목록</h1>
    <form class="row mb-3" method="get" id="search-form">
      <AppSearch :options="options" :condition="condition" @update-condition="updateCondition" />
      <input type="hidden" id="currentPage" name="currentPage" value="1" />
    </form>
    <table class="table">
      <tbody>
        <tr>
          <td>no</td>
          <td>name</td>
          <td>email</td>
        </tr>
        <MemberListItem v-for="member in page.list" :member="member" :key="member.no" />
      </tbody>
    </table>
    <AppPagination :page="page" @change-page="updatePage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemberListItem from '@/components/member/MemberListItem.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import AppPagination from '@/components/common/AppPagination.vue'
// TODO: 10-1. 페이지 이동을 위해 useRouter를 선언하세요.

// END
const options = ref([
  { value: '', label: '검색 항목선택' },
  { value: '1', label: 'name' },
  { value: '2', label: 'email' },
])

const page = ref({
  condition: {
    key: '',
    // word: '001',
    currentPage: 3,
  },
  navSize: 5,
  list: [],
  hasPre: false,
  hasNext: true,
  startPage: 1,
  endPage: 5,
})
const condition = ref({ key: '', currentPage: 1 })
for (let i = 0; i < 5; i++) {
  page.value.list.push({ mno: i, name: 'name_' + i, email: `email_${i}.ssafy.com` })
}

const updateCondition = (c) => {
  condition.value = c
  // TODO: 10-2. condition을 query로 설정 후 memberList로 이동하세요.

  // END
}

const updatePage = (n) => {
  condition.value.currentPage = n
  // TODO: 10-3. page의 condition을 이용해서 대상을 조회하세요.
   console.log(n + 'page 검색, ', page.value.searchCondition)

  // END
}

// TODO: 10-4. page의 query가 변경되는 상황을 watch로 모니터링 해보자. (처음부터 관리 필요)

// END
</script>

<style scoped></style>

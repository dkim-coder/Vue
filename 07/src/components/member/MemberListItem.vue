<template>
  <tr>
    <td>{{ member.mno }}</td>
    <td>{{ member.name }}</td>
    <td>
      <a :href="'/auth/member-detail?email=' + member.email" @click.prevent="memberDetail">{{
        member.email
      }}</a>
    </td>
  </tr>
</template>

<script setup>
//TODO: 11-1. component 교체를 위한 import를 구성하세요.

// END
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
})
const memberDetail = () => {
  // TODO: 11-2. email을 이용해서 memberDetail 페이지로 이동하세요.
   console.log('page 이동', props.member.emai)

  // END
}
</script>

<style lang="scss" scoped></style>

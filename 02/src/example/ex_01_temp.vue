다음은 TODO를 해결한 코드입니다:

<script setup>
import { ref } from 'vue'

// TODO: 01. message라는 이름으로 '<h1>Hi Vue</h1>'를 반응형으로 설정하세요.
const message = ref('<h1>Hi Vue</h1>');
</script>

<template>
  <ul>
    <!-- TODO: 02. vue의 다양한 문자열 보간 방식을 테스트하시오. -->
    <!--  {{  }} 활용: '오늘의 메시지 : '라고 출력하세요.-->
    <li>오늘의 메시지 : {{ message }}</li>

    <!--  html 형태로 출력하세요.-->
    <li v-html="message"></li>

    <!--  text 형태로 출력하세요. 단 대문자로 처리한다.-->
    <li>{{ message.toUpperCase() }}</li>

    <!--  text 형태로 출력하세요. 단 출력 후 반응성을 삭제한다.-->
    <li>{{ message.value }}</li>
    <!-- END -->
  </ul>
</template>

<style scoped></style>

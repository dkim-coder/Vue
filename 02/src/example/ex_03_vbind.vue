<template>
  <div>
    <!-- TODO: 02. 01에서 선언한 속성들을 이용해서 a 태그를 구성하세요. -->
    <a :id="vueSite.id" v-bind:href="vueSite.href">{{vueSite.title}}</a>
    <!--TODO: 03. www.google.com에 있는 google 로고를 속성까지 그대로 표현해보세요. -->
    <!-- 주의!! url에 https://www.google.com/를 추가해야 함-->
    <a id="googleId" href="https://www.google.com/">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="구글 로고" />
    </a>

    <!--END-->
  </div>
</template>

<script setup>
import { ref } from 'vue';
// TODO: 01. 다음을 구성하기 위한 반응형 데이터를 선언하세요.
// id="vue" href="http://vuejs.org" title="뷰 공식 사이트"
const vueSite = ref({
  id: 'vue',
  href: 'http://vuejs.org',
  title: '뷰 공식 사이트',
});
// TODO: 04. 위 상황에 맞게 setup을 구성하시오.

// END
</script>

<style lang="scss" scoped></style>

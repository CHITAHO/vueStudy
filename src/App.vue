<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="양희동 해야할 일 LIST" /> -->
  <div>
    각 메뉴 항목 버튼을 클릭 해보시오.
    <br><br>
    1. 각 메뉴 항목에 맞는 새 페이지 생성해보기
    <br><br>
    2. 각 메뉴 항목 클릭 시 페이지 이동 구현해보기
    <br><br>
    src/router/index.js 파일에서 라우터를 관리 한다
    {
    path: '/',
    name: 'home',
    component: HomeView
    },
    이런 양식으로 작성되어있는데 이게 뜻하는게 http://localhost:8000/ 경로이다.
    그리고 component는 HomeView라는 컴포넌트를 보여주고 있는 것이다.
    <br><br>
    컴포넌트는 import HomeView from '@/components/testComp.vue' 이런 방식으로 import 한다
    <br><br>
    우선 '@/components/testComp.vue' 이 파일을 한번 가서 소스를 쭉 읽어보자
    <br><br>
    <div @click="showHint()">
      Hint
    </div>
    <div v-if="hint">
      <h1>로그를 확인해보시오</h1>
    </div>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      hint: false,
    }
  },
  methods: {
    showHint() {
      this.hint = true
      console.log("페이지 이동을 위한 소스는 window.location.href = '경로'")
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

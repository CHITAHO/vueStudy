<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="양희동 해야할 일 LIST" /> -->
  <div>
    각 메뉴 항목 버튼을 클릭 해보시오.
    <br>
    1. 각 메뉴 항목에 맞는 새 페이지 생성해보기
    <br>
    2. 각 메뉴 항목 클릭 시 페이지 이동 구현해보기
  </div>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

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

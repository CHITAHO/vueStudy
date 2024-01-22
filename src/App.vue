<template>
  <div>
    <MerryView />
    <router-view />
  </div>
</template>
<script>
import MerryView from './views/MerryView.vue'
export default {
  components: { MerryView },
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

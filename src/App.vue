<template>
  <div id="app">
    <a-layout>
      <Header class="header">
        <my-header></my-header>
      </Header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import myHeader from './components/MyHeader';
export default {
  components: {
    myHeader
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background-color: #f0f2f5;
  .header {
    background: #fff;
    height: 80px;
    line-height: 80px;
  }
  .content {
    color: #333;
  }
}
</style>

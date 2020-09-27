<template>
  <div id="app">
    <Layout>
      <Header class="header">
        <my-header></my-header>
      </Header>
      <Content class="content"> center</Content>
    </Layout>
  </div>
</template>
<script>
import { Layout } from 'ant-design-vue';
import myHeader from './components/MyHeader';
export default {
  components: {
    Header: Layout.Header,
    Content: Layout.Content,
    Layout,
    myHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
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

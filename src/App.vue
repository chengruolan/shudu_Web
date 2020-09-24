<template>
  <div id="app">
    <Layout>
      <Header class="header">Header</Header>
      <Content class="content">Content</Content>
      <Footer class="footer">Footer</Footer>
    </Layout>
  </div>
</template>
<script>
import { Layout } from 'ant-design-vue'
export default {
  components: {
    Header: Layout.Header,
    Footer: Layout.Footer,
    Content: Layout.Content,
    Layout,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100vh;
  .header {
    height: 80px;
    line-height: 80px;
  }
  .content {
    color: #000;
    height: 80vh;
    line-height: 80vh;
  }
  .footer {
    color: #000;
    height: 10vh;
    line-height: 10vh;
  }
}
</style>

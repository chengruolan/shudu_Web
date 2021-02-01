<template>
  <div>
    <h1>这是一个 选择器学习的页面</h1>
    <ul>
      下面的P是红色的
    </ul>
    <p>这个红色的</p>
    <p>这个不是红色的</p>
    <p>这个还是被～匹配到</p>
    <div class="article-1">
      <p>但是这个没有被匹配到 是aqua色的</p>
      <a>这是一个hover没作用到的</a>

    </div>
    <div class="article-2">
      <a>这是一个hover作用到的</a>
    </div>
    <div class="container_1">
      <ul>
        <li> 这里是 X > Y 选择器 作用于 他的第一层的子元素
          <ul>

            <ul>
              <li> 第二层的第一个子元素 </li>
            </ul>
            <ul>
              <li> 第二层的第二个子元素 </li>
            </ul>
            <ul>
              <li> 第二层的第三个子元素 </li>
            </ul>

            <li>第二层子元素 没有作用到 </li>
            <li>第二层子元素 没有作用到 </li>
            <li>第二层子元素 没有作用到 </li>
            <li>第二层子元素 没有作用到 </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li> 第一层的第二个子元素 </li>
      </ul>
      <ul>
        <li> 第一层的第三个子元素 </li>
      </ul>
    </div>
    <div class="container_2">
      <ul>
        <li> 这里是 X Y 选择器 作用于 他的所有的子元素
          <ul>
            <li> 第二层子元素 作用到了 </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li> 第一层的第二个子元素 </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
* {
  background: pink; /*通用选择器 */
}
li {
  font-size: 30px;
}
h1 {
  color: orange;
}
ul {
  & ~ p {
    color: rgb(136, 179, 244);
  }
  & + p {
    color: red;
  }
}
p {
  color: aqua;
  &:first-letter {
    font-size: 2em;
    font-weight: bold;
    font-family: cursive;
    padding-right: 2px;
  }
}
.article-1 a {
  color: green;
  :hover {
    color: red;
  }
}
.article-2 a {
  color: green;
  &:hover {
    color: red;
  }
}
.container_1 {
  & > ul {
    color: bisque;
    border: 1px solid black;
    &:first-child {
      color: rgb(167, 114, 154);
      border-top: none;
    }
    &:last-child {
      color: green;
    }
    li {
      &:nth-last-child(2) {
        color: red;
      }
    }
  }
}
.container_2 {
  ul {
    color: rgb(94, 93, 92);
    border: 1px solid black;
  }
}
</style>
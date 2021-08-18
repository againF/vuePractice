<template>
    <div id="app">
        <h1>
      demo页面
    </h1>
    <div class="menu">
      <router-link to="/textDemo">字符中间打点</router-link>
      <router-link to="/filter">筛选条件</router-link>
      <router-link to="/scrollDemo">滚动效果</router-link>
      <router-link to="/dataDemo">数据验证</router-link>
      <router-link to="/firstUpperCase">首字母大写，其他保持原样</router-link>
      <router-link to="/vIfRepeat">v-if的dom复用机制导致的onclick未被销毁</router-link>
      <router-link to="/tagSelect">tag选择</router-link>
      <router-link to="/ajax">ajax</router-link>
    </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'index'
}
</script>
<style>
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
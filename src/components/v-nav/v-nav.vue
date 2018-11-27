<template>
  <div class="v-nav">
    <router-link tag="div" to="/recommend" class="nav-item">
      <span class="nav-text">推荐</span>
    </router-link>
    <router-link tag="div" to="/singer" class="nav-item">
      <span class="nav-text">歌手</span>
    </router-link>
    <router-link tag="div" to="/rank" class="nav-item">
      <span class="nav-text">排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="nav-item">
      <span class="nav-text">搜索</span>
    </router-link>
  </div>
</template>
<style>
.v-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
}

.router-link-active .nav-text {
  color: red;
  border-bottom: 2px solid red;
}
</style>

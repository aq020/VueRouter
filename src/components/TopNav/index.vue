<template>
  <div>
    <router-link to="/home">首页</router-link>
    <!-- <router-link to="/shop/1816">商城</router-link> -->
    <router-link :to="{name:'Shop',params:{id:ids}}">商城</router-link>
    <router-link to="/learn">学习</router-link>
    <router-link to="/my">我的</router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name:"TopNav",
  data () {
    return {
      ids:181666
    }
  }
}
</script>
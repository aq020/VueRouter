<template>
  <div>
    <router-link to="/learn/java">java学习</router-link>
    <router-link to="/learn/web">web学习</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Learn",
  }
</script>

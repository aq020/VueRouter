<template>
  <div>
    <ul>
      <li>
        <button @click="clickHandler">去首页</button>
        <button @click="clickHandler2">去商城</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Java",
    methods: {
      clickHandler() {
        this.$router.push("/home")
      },
      clickHandler2() {
        this.$router.push({
          name: 'Shop',
          params: {
            id: 'aq181666'
          }
        })
      }
    }
  }
</script>

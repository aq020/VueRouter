<template>
  <div>
    <ul>
      <li>
        <button @click="clickHandler">去我的</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Web",
    methods: {
      clickHandler() {
        this.$router.push("/my")
      }
    }
  }
</script>

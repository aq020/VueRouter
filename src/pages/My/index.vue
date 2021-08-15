<template>
  <div id="app">
    <div class="box">
      <div>{{num1}}</div>
      <div>{{num2}}</div>
    </div>
    <button @click="starts">开始</button>
    <button @click="stops">结束</button>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        num1: 1,
        num2: 2,
        intv1: null,
        intv2: null,
      }
    },
    methods: {
      starts() {
        this.intv1 = setInterval(() => {
          this.num1 = Math.floor(Math.random() * 10);
        }, 80);
        this.intv2 = setInterval(() => {
          this.num2 = Math.floor(Math.random() * 10);
        }, 100);
      },
      stops() {
        clearInterval(this.intv1);
        clearInterval(this.intv2);

      }
    }
  }
</script>
<style>
  .box {
    display: flex;
    justify-content: center;
  }
</style>


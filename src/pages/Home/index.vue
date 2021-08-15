<template>
  <div id="app">
    <div class="box">
      <div>{{ast[num2]}}</div>
    </div>
    <div class="box">
      <button @click="starts">开始</button>
      <button @click="stops">结束</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        ast: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"],
        num2: 1,
        intv2: null,
      }
    },
    methods: {
      starts() {
        this.intv2 = setInterval(() => {
          this.num2 = Math.floor(Math.random() * 10);
        }, 1);
      },
      stops() {
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

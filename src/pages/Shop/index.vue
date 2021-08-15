<template>
  <div class="cj_box">
    <div class="line_item" :class="index == 1 ? 'active' : 'white_item'">
      <div>1</div>
    </div>
    <div class="line_item" :class="index == 2 ? 'active' : 'white_item'">
      <div>2</div>
    </div>
    <div class="line_item" :class="index == 3 ? 'active' : 'white_item'">
      <div>3</div>
    </div>
    <div class="line_item" :class="index == 0 ? 'active' : 'white_item'">
      <div>4</div>
    </div>
    <div class="line_item" @click="goLottery()">
      开始
    </div>
    <div class="line_item" :class="index == 4 ? 'active' : 'white_item'">
      <div>5</div>
    </div>
    <div class="line_item" :class="index == 7 ? 'active' : 'white_item'">
      <div>6</div>
    </div>
    <div class="line_item" :class="index == 6 ? 'active' : 'white_item'">
      <div>7</div>
    </div>
    <div class="line_item" :class="index == 5 ? 'active' : 'white_item'">
      <div>8</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Shop",
    // props:{
    //   id:{
    //     type:[String,Number],
    //     default:0
    //   }
    // }
    data() {
      return {
        index: 3, // 当前转动到哪个位置，起点位置
        count: 8, // 总共有多少个位置
        timer: 0, // 每次转动定时器
        speed: 200, // 初始转动速度
        times: 0, // 转动次数
        cycle: 30, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
        prizes: 3, // 中奖位置
        prize: [3, 6], // 奖品位置
      }
    },
    methods: {
      goLottery() {
        //判断如果抽奖停止后才可以再次点击
        if (this.speed == 200) {
          this.prizes = this.prize[Math.floor((Math.random() * this.prize.length))]
          console.log(this.prizes)
          this.startRoll();
        }
      },
      // 开始转动
      startRoll() {
        this.times += 1 // 转动次数
        this.oneRoll() // 转动过程调用的每一次转动方法，这里是第一次调用初始化
        this.usePrize()
      },
      // 每一次转动
      oneRoll() {
        let index = this.index // 当前转动到哪个位置
        const count = 8 // 总共有多少个位置
        index += 1
        if (index > count - 1) {
          index = 0
        }
        this.index = index
      },
      usePrize() {
        // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
        if (this.times > this.cycle + 10 && this.prizes === this.index) {
          clearTimeout(this.timer) // 清除转动定时器，停止转动
          this.times = 0
          this.speed = 200 //速度初始化
        } else {
          if (this.times < this.cycle) {
            this.speed -= 5 // 加快转动速度
          }
          this.timer = setTimeout(this.startRoll, this.speed)
        }
      }
    }
  }
</script>
<style type="text/css">
.cj_box {
  display: flex;
  flex-wrap: wrap;
    width: 306px;
    height: 306px;
    border: 3px solid whitesmoke;
    box-shadow: 1px 1px 4px;
    margin:30px auto 0;
  }

.line_item {
  display: flex;
  align-items:center;
  justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid white;
    background-color: #ffff00;

  }

.active {
    background-color: #ffffff !important;

    box-shadow:  inset 0px 0px 5px;
  }

.white_item {
    background-color: burlywood;
    border: 1px solid white;
    box-shadow: 3px 2px 1px;
  }
 </style>

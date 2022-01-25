<template>
  <div class="note">
    <div style="display: flex;flex-wrap: wrap;">
      <el-button @click="clickBtn">测试防抖</el-button>
      <el-input
        v-model="value"
        placeholder="节流"
        @input="inputValue"
      ></el-input>
    </div>
  </div>
</template>

<script>
import { debounce, throttle } from '@/utils/utils.js'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      value: ''
    }
  },
  created () {
    console.log(this.$store.state)
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    clickBtn: debounce(function () {
      // 防抖
      this.fun()
    }, 1000),

    fun () {
      console.log('防抖1000ms')
    },
    inputValue: throttle(function () {
      // 节流
      this.fun1()
    }, 500),
    fun1 () {
      console.log('节流', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  display: flex;
  overflow: auto;
}
</style>

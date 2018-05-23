<template>
  <l-panel :class="$style.panel" title="分页">
    <section :class="$style.content">
      <span @click="goPa(-1)">上一页</span>
      <span>{{ nowIndex }}/ {{ pages }}</span>
      <span @click="goPa(1)">下一页</span>
    </section>
  </l-panel>
</template>
<script>
import LPanel from "./panel.vue"
export default {
  components: {
    LPanel
  },
  props:{
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      nowIndex: this.currentPage || 1, // 当前页码
      limit: this.pageSize, // 每页显示的条数
      size: this.total || 1, // 总条数
      // perPages: 5 // 按钮个数
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.size / this.limit)
    }
  },
  watch: {
    currentPage(val) {
      this.nowIndex = val || 1
      console.log(this.nowIndex)
    },
    pageSize(val) {
      this.limit = val || 10
      console.log(val)
    },
    total(val) {
      this.size = val || 1
      console.log(val)
    }
  },
  methods: {
    goPa(lp) {
      // this.num ++
      // console.log(this.num)
      if (lp === -1 && this.nowIndex > 1) {
        this.nowIndex --
      }
      if (lp === 1 && this.nowIndex < this.pages) {
        this.nowIndex ++
      }
      //console.log(this.nowIndex)
      this.$emit('on-change', this.nowIndex)
    }
  }
}
</script>
<style lang="scss" module>
@import "../assets/css/element.scss";
.panel{
  @include panel;
  >h1{
    display: none;
  }
  .content{
    text-align: center;
    padding:20px 0;
    height:112px;
    line-height: 72px;
    box-sizing: border-box;
    span{
      display: inline-block;
      font-size: 26px;
      color: #666;
      &:nth-child(2){
        margin: 0 30px;
        color: #333;
      }
    }
  }
}
</style>

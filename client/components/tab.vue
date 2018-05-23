<template>
  <l-panel :class="$style.panel" title="tabsort">
    <section v-if="sort1" :class="$style.content">
      <btn
        v-for="(item,index) in tablist"
        :key="index"
        :class="$style.btnCaseSort"
        @click.native="goCategory(index)"
      >{{ item.title }}</btn>
    </section>
    <section v-if="sort2" :class="$style.content">
      <btn
        v-for="(item,index) in tabsort"
        :key="index"
        :class="[$style.btnCaseSort,{'cur' : nowIndex===index}]"
        @click.native="goSort(index)"
      >{{ item.name }}</btn>
    </section>
  </l-panel>
</template>
<script>
import LPanel from "./panel.vue"
import btn from "./btn.vue"
export default {
  components: {
    LPanel,
    btn
  },
  props:{
    tablist:{
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sort1: true,
      sort2: false,
      tabsort: [],
      nowIndex: null,
      tabTitle:'',
      category:''
    }
  },
  computed: {

  },
  methods: {
    goCategory(ind) {
      this.sort1 = !this.sort1
      this.sort2 = !this.sort2
      this.tabsort = this.tablist[ind].value
      this.tabTitle =this.tablist[ind].title
      let arr = {'tabTitle': this.tabTitle, 'category': this.category}
      this.$emit('on-save', arr)
    },
    goSort(ind){
      this.nowIndex = ind
      this.category = this.tabsort[ind].category
      let arr = {'tabTitle': this.tabTitle, 'category': this.category}
      this.$emit('on-save', arr)
    }
  }
}
</script>
<style lang="scss" module>
@import "../assets/css/element.scss";
.panel{
  @include panel;
  margin: 0;
  >h1{
    display: none;
  }
  .content{
    padding-left: 20px;
    .btnCaseSort{
      @include btn($size:24px,$color:#666,$bgcolor:none,$padding:10px 20px,$radius:2px);
      border-color: #ddd;
      margin-top:20px;
      margin-right:20px;
      cursor: pointer;
    }

  }
}
</style>
<style lang="scss">
.cur{
  background: red !important;
  border-color:red !important;
  color: #fff !important;
}
</style>

<template>
  <div>
    <l-panel :class="$style.panel" title="案例">
      <section :class="$style.content">
        <h1>{{ result.title }}</h1>
        <l-slider :sliders="sliders" :cname="$style.slider" />
      </section>
    </l-panel>
    <l-panel :class="$style.panel" title="案例详情">
      <section :class="[$style.content,$style.delcontent]" v-html="result.content"/>

    </l-panel>
  </div>
</template>
<script>
import LPanel from "../../components/panel.vue"
import LSlider from "../../components/slider.vue"
export default {
  components: {
    LPanel,
    LSlider
  },
  data() {
    return {
      result: [],
      sliders: []
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() { // 获取case按钮数据 并按pageSize分割成新数组
      this.$http.get('/api/getCaseList').then((res)=>{
        // console.log(res.data.data);
        let carray=[]
        carray = res.data.data
        let cid = this.$route.query.id
        carray.forEach(item => {
          if(item.CaseId == cid) {
            this.result=item
          }
        });
        this.sliders = this.result.imgList
      }, (err) => {
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel{
  margin-top:0 !important;
  h1{
    border-bottom: 1px solid #ddd;
  }
  &:first-child{
    >h1{
      display: none;
    }
  }
  .content{
    >h1{
      padding:30px 20px;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      font-weight: normal;
    }
    .slider{
      img{
        width: 100%;
      }
    }
  }
  .delcontent{
    font-size: 24px;
    padding:20px;
    line-height: 2;
    img{
      width: 100%;
    }
  }
}
</style>

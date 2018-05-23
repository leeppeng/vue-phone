<template>
  <div>
    <l-panel :class="$style.panel" title="工地">
      <section :class="$style.content">
        <h1>{{ result.title }}</h1>
        <l-slider :sliders="sliders" :cname="$style.slider" />
      </section>
    </l-panel>
    <l-panel :class="$style.panel" title="工地详情">
      <section :class="[$style.content,$style.delcontent]">
        <div v-for="(item,index) in result.content" :key="index" :class="$style.box">
          <img v-for="(items,index) in item.img" :key="index" :src="items" alt="">
          <h4>{{ item.tit }}</h4>
        </div>
      </section>
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
      this.$http.post('/api/getSiteList').then((res)=>{
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
    .box{
      margin-bottom: 40px;
      position: relative;
      h4{
        position: absolute;
        bottom: 0;
        left: 0;
        line-height: 80px;
        background: rgba(0,0,0,0.3);
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 32px;
      }
    }
    img{
      width: 100%;
      display: block;
    }
  }
}
</style>

<template>
  <l-panel :class="$style.panel" title="品牌优势">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>12年行业积累</h4>
        <p>500万家庭的共同见证</p>
      </div>
      <div :class="$style.item">
        <h4>优质售后保障</h4>
        <p>24小时贴心服务</p>
      </div>
      <div :class="$style.item">
        <h4>100%正规公司</h4>
        <p>严格资质审核，更放心</p>
      </div>
      <div :class="$style.item">
        <h4>免费第三方监理</h4>
        <p>安全，快捷，有保障</p>
      </div>
    </section>
  </l-panel>
</template>
<script>
import LPanel from "../../components/panel.vue"
export default {
  components: {
    LPanel
  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel{
  @include panel;
  .content{
    @include list(row);
    .item{
      width: 50%;
      padding:40px 20px;
      box-sizing: border-box;
      border-top: 1px solid #ddd;
      position: relative;
      &::after{
        content: "";
        display: block;
        height:80px;
        width:1px;
        background: #ddd;
        position: absolute;
        right:0px;
        top:50%;
        margin-top:-40px;
      }
      &:nth-child(2n){
        &::after{
          display: none;
        }
      }
      img{
        float:right;
      }
      h4{
        font-size: 32px;
        line-height: 40px;
        color: #666;
      }
      p{
        font-size: 24px;
        line-height: 24px;
        color:#999;
        margin-top:20px;
      }
    }
    // img{
    //   display: block;
    //   width: 100%;
    // }
  }
}
</style>

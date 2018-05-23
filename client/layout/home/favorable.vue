<template>
  <l-panel :class="$style.panel" title="优惠活动">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4 :class="$style.red">坐等方案送上门</h4>
        <p :class="$style.gray">免费设计</p>
        <img src="../../assets/img/enter_01.png" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="../../assets/img/enter_01.png" alt="">
            <h4>装修公司免费上门测量</h4>
            <p :class="$style.gray">免费量房</p>
          </li>
          <li>
            <img src="../../assets/img/enter_01.png" alt="">
            <h4><span :class="$style.red">570位</span>业主享受报价</h4>
            <p :class="$style.gray">免费报价</p>
          </li>
        </ul>
      </div>
    </section>
  </l-panel>
</template>
<script>
import LPanel from "../../components/panel.vue"
export default {
  components: {
    LPanel
  },
  data() {
    return {
      item:[]
    }
  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel{
  @include panel();
  >h1{
    border-bottom: 1px solid #ddd;
  }
  .content{
    @include list(row);
    .item{
      width: 50%;
      box-sizing: border-box;
      h4{
        font-size: 26px;
        line-height: 40px;
      }
      .red{
        color:red;
      }
      .gray{
        color:#999;
        font-size: 24px;
      }
      &:first-child{
        padding: 32px 20px;
        text-align: center;
        border-right: 1px solid #ddd;
        img{
          width:132px;
          height:132px;
          margin:20px auto;
        }
      }
      p{
        margin-top:6px;
        font-size: 24px;
      }
      ul{
        width: 100%;
        li{
          height:144px;
          width: 100%;
          padding: 32px 28px;
          box-sizing: border-box;
          h4{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: left;
          }
          img{
            width:80px;
            height:80px;
            float: right;
          }
          &:first-child{
            border-bottom: 1px solid #ddd;
          }
        }
      }
    }
  }
}
</style>

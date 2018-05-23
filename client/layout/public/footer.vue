<template>
  <l-panel :class="$style.panel" title="公司信息">
    <ul :class="$style.content">
      <li><img src="../../assets/pic/help.png" alt=""></li>
      <li>
        <div>
          <img src="../../assets/img/footer_1.png" alt="">
          <p>客户端</p>
        </div>
        <div>
          <img src="../../assets/img/footer_1.png" alt="">
          <p>触屏版</p>
        </div>
        <div>
          <img src="../../assets/img/footer_1.png" alt="">
          <p>电脑版</p>
        </div>
      </li>
      <li>版权所有</li>
    </ul>
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
  margin-bottom: 100px;
  &>h1{display: none;}
  .content{
    @include flex;
    background: #eee;
    li{
      width:100%;
      text-align: center;

      >img{
        width: 100%;
      }
      &:nth-child(2){
        @include flex(row);
        padding: 20px 0;
        >div{
          width:33.3333%;
          text-align: center;
          img{
            width:90px;
            height:90px;
            display: block;
            margin:0 auto;
            background: #ddd;
            border-radius: 50%;
          }
          p{
            color:#666;
            font-size: 24px;
            line-height: 2;
          }
        }
      }
      &:nth-child(n+3){
        border-top: 1px solid #ddd;
        font-size:24px;
        padding:30px 0px;
      }
    }
  }
}
</style>

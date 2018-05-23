<template>
  <l-panel :class="$style.panel" title="导航条">
    <ul :class="$style.content">
      <li>
        <router-link :to="{name: 'index'}">
          <img src="../../assets/img/tab01@2x.png" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'case'}">
          <img src="../../assets/img/tab_pic@2x.png" alt="">
          <p>案例</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'messages'}">
          <img src="../../assets/img/tab02@2x.png" alt="">
          <p>我要装修</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'site'}">
          <img src="../../assets/img/tab_construction@2x.png" alt="">
          <p>看工地</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'product'}">
          <img src="../../assets/img/tab_05@2x.png" alt="">
          <p>材料商城</p>
        </router-link>
      </li>
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
  width: 100%;
  margin-bottom: 0;
  position: fixed;
  z-index:9;
  left: 0;
  bottom: 0;
  height:100px;
  >h1{display: none;}
  .content{
    @include flex(row);
    li{
      width: 20%;
      text-align: center;
      a{
        text-decoration: none;
        color:#666;
      }
      img{
        width:44px;
        height:44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
      p{
        line-height: 28px;
        font-size: 24px;
      }
    }
  }
}
</style>

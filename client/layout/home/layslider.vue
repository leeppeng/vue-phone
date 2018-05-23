<template>
  <article>
    <Slider :sliders="sliders" :cname="$style.slider"/>
    <section :class="$style.list">
      <div v-for="item in enters" :key="item.img" :class="$style.item">
        <router-link :to="{ name: item.href }">
          <img :src="item.img" alt="item.title">
          <h4>{{ item.title }}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>
<script>
import Slider from "../../components/slider.vue"
export default {
  components: {
    Slider
  },
  data() {
    return {
      sliders: [{
          href: "index",
          src: "./static/pic/ban1.jpg"
        }, {
          href: "index",
          src: "./static/pic/ban2.jpg"
        }],
      enters: [{
        href: "index",
        title: "免费设计",
        img: require("../../assets/img/enter_01.png")
      }, {
        href: "index",
        title: "装修咨询",
        img: require("../../assets/img/enter_02.png")
      }, {
        href: "index",
        title: "设计大咖",
        img: require("../../assets/img/enter_03.png")
      }, {
        href: "index",
        title: "热点资讯",
        img: require("../../assets/img/enter_04.png")
      }]
    }
  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/element.scss";
.slider{
  // margin-top:120px;
  img{
    width: 100%;
  }
}
.list{
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom:20px;
  justify-content: space-around;
  a{
    text-decoration: none;
  }
  .item{
    text-align: center;
    img{
      display: block;
      width:90px;
      height:90px;
      margin: 0 auto;
    }
    h4{
      font-size: 26px;
      margin-top: 12px;
      color:#666;
    }
  }
}
</style>

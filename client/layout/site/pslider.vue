<template>
  <l-panel :class="$style.panel" title="轮播">
    <section :class="$style.content">
      <l-slider :sliders="sliders" :cname="$style.slider" />
    </section>
  </l-panel>
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
      sliders: [
        {
           href: "index",
          src: "./static/pic/ban1.jpg"
        }, {
          href: "index",
          src: "./static/pic/ban2.jpg"
        }
      ]
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel{
  @include panel;
  margin: 0 !important;
  >h1{
    display: none;
  }
  .content{
    .slider{
      img{
        width: 100%;
      }
    }
  }
}
</style>

<template>
  <l-panel :class="$style.panel" title="产品展示">
    <section class="content indpro">
      <div class="arrow">查看更多 > </div>
      <l-slider :options="options" :sliders="sliders" cname="designer-slider"/>
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
          name: "leepeng",
          src: require("../../assets/pic/design_01.jpg")
        }, {
          href: "index",
          name: "leepeng1",
          src: require("../../assets/pic/design_01.jpg")
        }, {
          href: "index",
          name: "leepeng2",
          src: require("../../assets/pic/design_01.jpg")
        }, {
          href: "index",
          name: "leepeng3",
          src: require("../../assets/pic/design_01.jpg")
        }, {
          href: "index",
          name: "leepeng4",
          src: require("../../assets/pic/design_01.jpg")
        }, {
          href: "index",
          name: "leepeng5",
          src: require("../../assets/pic/design_01.jpg")
        }
      ],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      }
    }
  }
}
</script>
<style lang="scss">
</style>
<style lang="scss" module>
@import "../../assets/css/element.scss";
</style>

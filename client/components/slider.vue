<template>
  <div :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: "",
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        }
      }
    },
    sliders: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{

    }
  }
}
</script>
<style lang="scss">
@import "~swiper/dist/css/swiper.css";
</style>

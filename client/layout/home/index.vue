<template lang="html">
  <div>
    <!--l-header/-->
    <l-slider/>
    <l-favorable/>
    <l-case/>
    <l-product/>
    <l-advantage/>
    <l-footer/>
    <l-navbar/>
  </div>
</template>
<script>
// import LHeader from "../public/header.vue"
import LSlider from "./layslider.vue"
import LFavorable from "./favorable.vue"
import LCase from "./case.vue"
import LAdvantage from "./advantage.vue"
import LProduct from "./product.vue"
import LFooter from "../public/footer.vue"
import LNavbar from "../public/navbar.vue"
export default {
  components: {
    // LHeader,
    LSlider,
    LFavorable,
    LCase,
    LAdvantage,
    LProduct,
    LFooter,
    LNavbar
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/reset.scss";
</style>


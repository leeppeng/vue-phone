<template lang="html">
  <div>
    <!--l-header/-->
    <c-slider/>
    <c-list/>
    <l-footer/>
    <l-navbar/>
  </div>
</template>
<script>
// import LHeader from "../public/header.vue"
import CSlider from "./caseslider.vue"
import CList from "./caselist.vue"
import LFooter from "../public/footer.vue"
import LNavbar from "../public/navbar.vue"
export default {
  components: {
    // LHeader,
    CSlider,
    CList,
    LFooter,
    LNavbar
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/reset.scss";
</style>


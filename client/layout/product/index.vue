<template lang="html">
  <div>
    <!--l-header/-->
    <p-slider/>
    <p-list/>
    <l-footer/>
    <l-navbar/>
  </div>
</template>
<script>
// import LHeader from "../public/header.vue"
import PSlider from "./pslider.vue"
import PList from "./list.vue"
import LPage from "../../components/page.vue"
import LFooter from "../public/footer.vue"
import LNavbar from "../public/navbar.vue"
export default {
  components: {
    // LHeader,
    PSlider,
    PList,
    LFooter,
    LNavbar
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/reset.scss";
</style>


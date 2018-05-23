<template lang="html">
  <div>
    <!--l-header/-->
    <c-detail/>
    <l-footer/>
    <l-navbar/>
  </div>
</template>
<script>
// import LHeader from "../public/header.vue"
import CDetail from "./detail.vue"
import LFooter from "../public/footer.vue"
import LNavbar from "../public/navbar.vue"
export default {
  components: {
    // LHeader,
    CDetail,
    LFooter,
    LNavbar
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/reset.scss";
</style>


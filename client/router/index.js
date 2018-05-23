import Vue from "vue"
import Router from "vue-router"
import Index from "../layout/home/index.vue"
import Case from "../layout/case/index.vue"
import caseDetail from "../layout/casedetail/index.vue"
import Product from "../layout/product/index.vue"
import productDetail from "../layout/productdetail/index.vue"
import Messages from "../layout/message/index.vue"
import Site from "../layout/site/index.vue"
import siteDetail from "../layout/sitedetail/index.vue"

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index,
    }, {
      path: '/case',
      name: 'case',
      component: Case,
    }, {
      path: '/casedetail',
      name: 'casedetail',
      component: caseDetail,
    }, {
      path: '/product',
      name: 'product',
      component: Product,
    }, {
      path: '/productdetail',
      name: 'productdetail',
      component: productDetail,
    }, {
      path: '/messages',
      name: 'messages',
      component: Messages,
    }
    , {
      path: '/site',
      name: 'site',
      component: Site,
    }, {
      path: '/sitedetail',
      name: 'sitedetail',
      component: siteDetail,
    }
  ],
})

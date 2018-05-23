<template>
  <div>
    <!-- <l-tab :tablist="TabList" @on-save="searchCase"/> -->
    <l-panel :class="$style.panel" title="产品列表">
      <section :class="$style.content">
        <ul :class="$style.caselist">
          <li v-for="item in siteList" :key="item.id">
            <router-link :to="{name: 'sitedetail',query: {id: item.CaseId}}">
              <img :src="item.imgUrl" alt="">
              <h1>{{ item.title }}</h1>
              <p>进度: <span>{{ item.schedule }}</span></p>
              <p>设计师: {{ item.designer }}</p>
            </router-link>
          </li>
        </ul>
      </section>
    </l-panel>
    <l-page
      :page-size="pageSize"
      :total="count"
      :current-page="currentPage"
      @on-change="getPageData" />
  </div>
</template>
<script>
import LPanel from "../../components/panel.vue"
import LTab from "../../components/tab.vue"
import LPage from "../../components/page.vue"
export default {
  components: {
    LPanel,
    LTab,
    LPage
  },
  data() {
    return {
      siteList: [],
      result: [],
      resultpage: [],
      pageSize: 2, // 每页显示4条数据
      currentPage: 1, // 当前页码
      count: 0 // 总记录数
    }
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() { // 获取case按钮数据 并按pageSize分割成新数组
      this.$http.post('/api/getSiteList').then((res)=>{
        // console.log(res.data.data);
        let carray=[]
        carray = res.data.data
        this.result = res.data.data
        this.count = carray.length
        for(let i=0;i<=this.count;i+=this.pageSize){
          this.resultpage.push(carray.slice(i, i + this.pageSize))
          // console.log(this.resultpage)
        }
        this.siteList = this.resultpage[0]
      }, (err) => {
        console.log(err);
      })
    },
    getPageData(ind){
      // console.log(ind)
      this.siteList = this.resultpage[(ind - 1)]
    }
  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel{
  @include panel;
  margin: 0;
  >h1{
    display: none;
  }
  .content{
    .caselist{
      // @include list();
      li{
        box-sizing: border-box;
        padding:20px;
        border-bottom: 20px solid #f5f5f5;
        a{
          text-decoration: none;
          display: flow-root;
          color: #999;
        }
        img{
          width: 220px;
          margin-right:20px;
          float: left;
        }
        h1{
          font-size: 32px;
          margin-bottom: 26px;
          color: #333;
        }
        p{
          margin-bottom:12px;
          font-size: 24px;
          span{
            font-size: 28px;
            color: #46AF76;
          }
        }
      }
    }
  }
}
</style>

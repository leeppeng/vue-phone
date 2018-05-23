<template>
  <div>
    <l-tab :tablist="TabList" @on-save="searchCase"/>
    <l-panel :class="$style.panel" title="案例列表">
      <section :class="$style.content">
        <ul :class="$style.caselist">
          <li v-for="item in caseList" :key="item.id">
            <router-link :to="{name: 'casedetail',query: {id: item.CaseId}}">
              <img :src="item.imgUrl" alt="">
              <p>{{ item.title }}</p>
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
      caseList: [],
      result: [],
      resultpage: [],
      TabList: [],
      pageSize: 2, // 每页显示4条数据
      currentPage: 1, // 当前页码
      count: 0 // 总记录数
    }
  },
  created() {
    this.getdata();
    this.CaseTabSort();
  },
  methods: {
    getdata() { // 获取case按钮数据 并按pageSize分割成新数组
      this.$http.get('/api/getCaseList').then((res)=>{
        // console.log(res.data.data);
        let carray=[]
        carray = res.data.data
        this.result = res.data.data
        this.count = carray.length
        for(let i=0;i<=this.count;i+=this.pageSize){
          this.resultpage.push(carray.slice(i, i + this.pageSize))
          // console.log(this.resultpage)
        }
        this.caseList = this.resultpage[0]
      }, (err) => {
        console.log(err);
      })
    },
    CaseTabSort() { // 获取tab按钮数据
      this.$http.post('/api/CaseTabSort').then((res)=>{
        // console.log(res.data.data);
        this.TabList = res.data.data
      }, (err) => {
        console.log(err);
      })
    },
    searchCase(arr){ // tab 按钮检索
      // console.log(arr)
      let tabsort = arr.tabTitle
      let category = arr.category
      let carray=[]
      this.resultpage=[]
      if(category === '') {
        this.result.forEach((item)=>{
          if(tabsort === item.tabsort){
            carray.push(item)
            // console.log(item.category)
          }
        })
      }else{
        this.result.forEach((item)=>{
          if(tabsort === item.tabsort && category === item.category){
            carray.push(item)
          }
        })
      }
      this.currentPage = this.currentPage > 0 ?  0 : 1
      this.count = carray.length
      console.log(this.currentPage)
      for(let i=0;i<=this.count;i+=this.pageSize){
        this.resultpage.push(carray.slice(i, i + this.pageSize))
        // console.log(this.resultpage)
      }
      this.caseList = this.resultpage[0]
    },
    getPageData(ind){
      // console.log(ind)
      this.caseList = this.resultpage[(ind - 1)]
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
      @include list(row);
      li{
        width:50%;
        box-sizing: border-box;
        padding:20px;
        text-align: center;
        a{
          text-decoration: none;
          display: block;
        }
        img{
          width: 100%;
          margin-bottom:20px;
        }
        p{
          margin-bottom:12px;
          font-size: 26px;
        }
      }
    }
  }
}
</style>

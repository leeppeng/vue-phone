<template>
  <div>
    <l-panel :class="$style.panel" title="Message" >
      <section :class="$style.content">
        <div :class="$style.title">
          <span><i>10</i>秒钟免费估算装修报价</span>
        </div>
        <div :class="$style.tit">
          <h1>装修计算器</h1>
          <p>已有<span>308</span>位业主获得报价</p>
        </div>
        <div :class="$style.form">
          <input v-model="name" type="text" placeholder="您的姓名">
          <div v-if="tip_name" :class="$style.tip">{{ nameTiptext }}</div>
          <input v-model="phone" type="text" placeholder="输入手机号码，报价结果将发送到您的手机">
          <div v-if="tip_phone" :class="$style.tip">{{ phoneTiptext }}</div>
          <input v-model="area" type="text" placeholder="请输入您的房屋面积">
          <div v-if="tip_area" :class="$style.tip">{{ areaTiptext }}</div>
          <l-btn :class="$style.btn" @click.native="formsubmit">立即申请</l-btn>
        </div>
      </section>
    </l-panel>
  </div>
</template>
<script>
import LPanel from "../../components/panel.vue"
import LBtn from "../../components/btn.vue"
export default {
  components: {
    LPanel,
    LBtn
  },
  data(){
    return {
      name:'',
      phone: '',
      area: '',
      nameTiptext: '',
      phoneTiptext: '',
      areaTiptext: '',
      tip_name:false,
      tip_phone:false,
      tip_area:false,
    }
  },
  methods: {
    formsubmit() {
      let form_name = this.name
      let form_phone = this.phone
      let form_area = this.area
      if(form_name==''){
        this.tip_name = true
        this.nameTiptext='姓名不能为空'
        return false
      }
      if(form_phone==''){
        this.tip_phone = true
        this.phoneTiptext='手机不能为空'
        return false
      }
      if(form_area==''){
        this.tip_area = true
        this.areaTiptext='面积不能为空'
        return false
      }
    }
  }
}
</script>
<style lang="scss" module>
@import "../../assets/css/reset.scss";
@import "../../assets/css/element.scss";
.panel{
  margin-top:0px !important;
  >h1{
    display: none;
  }
  .content{
    .title{
      height:236px;
      background: url('../../assets/img/pic01@2x.png') no-repeat;
      background-size: cover;
      @include flex;
      justify-content:center;
      align-items: center;
      span{
        background:#46AF76;
        color:#fff;
        font-size: 36px;
        padding: 16px 24px;
        i{
          font-size: 48px;
        }
      }
    }
    .tit{
      padding: 30px 0 36px;
      text-align: center;
      h1{
        font-size: 36px;
        line-height: 60px;
        margin-bottom: 20px;
      }
      p{
        font-size: 28px;
        line-height: 40px;
        color: #666;
        span{color:#46AF76;}
      }
    }
    .form{
      padding: 0 40px;
      input{
        width: 100%;
        height: 88px;
        line-height: 88px;
        vertical-align: middle;
        font-size: 28px;
        background: #FAFAFA;
        border: 1px solid #E9ECEF;
        border-radius: 8px;
        margin-bottom: 24px;
        padding-left: 30px;
        padding-right: 40px;
        box-sizing: border-box;
      }
      .tip{
        color: red;
        font-size: 24px;
        margin-bottom: 24px;
      }
      .btn {
        background: #46AF76;
        border-radius: 8px;
        width: 100%;
        height: 100px;
        line-height: 100px;
        border: 0;
        color: #fff;
        font-size: 36px;
      }
    }
  }
}
</style>

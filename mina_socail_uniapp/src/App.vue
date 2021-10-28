<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";
</style>
<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
};
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";
/*每个页面公共css */
.mg-l-5rpx {
  margin-left: 5rpx;
}
.mg-l-10 {
  margin-left: 10rpx;
}
.mg-l-15rpx {
  margin-left: 15rpx;
}
.mg-l-20 {
  margin-left: 20rpx;
}
.mg-l-20rpx {
  margin-left: 20rpx;
}
.pd-l-2rpx {
  padding-left: 2rpx;
}
.pd-l-5rpx {
  padding-left: 5rpx;
}

.pd-r-20 {
  padding-right: 20rpx;
}

.mg-r-20 {
  margin-right: 20rpx;
}

.redpoint {
  background-color: red;
  width: 12rpx;
  height: 12rpx;
  border-radius: 50%;
}

.demo-uni-row {
  margin-bottom: 10px;
  /* QQ、字节小程序文档写有 :host，但实测不生效 */
  /* 百度小程序没有 :host，需要设置block */
  /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
  display: block;
  /* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
.uni-row {
  margin-bottom: 10px;
}

/* #endif */

.demo-uni-col {
  height: 36px;
  border-radius: 4px;
}

.my-tag {
  padding: 5rpx 25rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
  margin: 10rpx 10rpx;
  display: inline-block;
}
.width100 {
  width: 100%;
}
.width90 {
  width: 90%;
}
.pd20 {
  padding: 20rpx;
}

.pd-20 {
  padding: 20rpx;
}
.pd-40 {
  padding: 40rpx;
}
.pd-l-20 {
  padding-left: 20rpx;
}
.pd-l-40 {
  padding-left: 40rpx;
}
.pd-l-r-20 {
  padding: 0rpx 20rpx;
}

.pd-lr-20 {
  padding: 0rpx 20rpx;
}

.pd-l-r-40 {
  padding: 0rpx 40rpx;
}

.pd-lr-40 {
  padding: 0rpx 40rpx;
}

.pd-tb-20 {
  padding: 20rpx 0rpx;
}

.pd-tb-40 {
  padding: 40rpx 0rpx;
}

.pd-b-20 {
  padding-bottom: 20rpx;
}

.mg-t-20 {
  margin-top: 20rpx;
}
.mg-top-20 {
  margin-top: 20rpx;
}

.mg-top-40 {
  margin-top: 40rpx;
}

.mg-r-40 {
  margin-right: 40rpx;
}

.mg-r-60 {
  margin-right: 60rpx;
}

.ft-35 {
  font-size: 35rpx;
}

.ft-bold {
  font-weight: bold;
}

.ft-cl-gray {
  color: gray;
}

.ft-cl-red {
  color: red;
}

.border-bottom {
  border-bottom: 1rpx gray solid;
}

.required {
  color: red;
  padding-left: 12rpx;
}

.mask {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auth-tips {
  width: 600rpx;
  height: 100rpx;
  color: white;
  border-radius: 10rpx;
  font-size: 30rpx;
  background-color: #e64340;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40rpx;
}
.blur {
  -webkit-filter: blur(5px); /* Chrome, Opera */
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
.box-shadow {
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}
.bgmale {
  background-color: rgb(7, 137, 152);
}
.bgfemale {
  background-color: rgb(243, 17, 179);
}

.gender-female {
  background-color: rgb(243, 17, 179);
  border-radius: 50%;
  color: white;
  width: 30rpx;
  height: 30rpx;
  font-size: 22rpx;
  padding: 1rpx;
  text-align: center;
  display: inline-block;
  transform: rotate(45deg);
}

.gender-female-tiny {
  background-color: rgb(243, 17, 179);
  /* border-radius: 50%; */
  color: white;
  width: 20rpx;
  height: 20rpx;
  font-size: 10rpx;
  padding: 1rpx;
  /* text-align: center; */
  display: inline-block;
  /* transform: rotate(45deg); */
}

.gender-male {
  background-color: rgb(7, 137, 152);
  border-radius: 50%;
  color: white;
  width: 30rpx;
  height: 30rpx;
  font-size: 22rpx;
  padding: 1rpx;
  text-align: center;
  display: inline-block;
  transform: rotate(45deg);
}
</style>

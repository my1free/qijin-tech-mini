<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
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
.mg-l-15rpx {
  margin-left: 15rpx;
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
.pd20{
  padding: 20rpx;
}

.pd-20{
  padding: 20rpx;
}
.pd-40{
  padding: 40rpx;
}
.pd-l-r-20{
  padding: 0rpx 20rpx;
}

.pd-l-r-40{
  padding: 0rpx 40rpx;
}


.ft-35{
  font-size: 35rpx;
}
</style>

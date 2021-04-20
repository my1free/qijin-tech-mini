<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view style="width: 750rpx">
      <text class="title">{{ title }}</text>
	  <uni-icons type="contact" size="30"></uni-icons>
      <uni-badge text="1"></uni-badge>
      <uni-row class="demo-uni-row">
        <uni-col :span="8">
          <view class="demo-uni-col dark"></view>
        </uni-col>
        <uni-col :span="8" :offset="6">
          <view class="demo-uni-col dark"></view>
        </uni-col>
      </uni-row>

      <uni-row class="demo-uni-row">
        <uni-col :span="12" :pull="6">
          <view class="demo-uni-col dark"></view>
        </uni-col>
      </uni-row>

      <uni-row class="demo-uni-row">
        <uni-col :span="12" :push="6">
          <view class="demo-uni-col dark"></view>
        </uni-col>
      </uni-row>
    </view>
  </view>
</template>

<script>
import { uniBadge } from "@dcloudio/uni-ui";
export default {
  components: { uniBadge },
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 750rpx;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
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
/deep/ .uni-row {
  margin-bottom: 10px;
}
/* #endif */

.demo-uni-col {
  height: 36px;
  border-radius: 4px;
}

.dark_deep {
  background-color: #99a9bf;
}

.dark {
  background-color: #d3dce6;
}

.light {
  background-color: #e5e9f2;
}
</style>

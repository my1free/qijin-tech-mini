<template>
  <view class="content">
    <view class="btn">
      <button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
        唤起授权
      </button>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data() {
    return {
      mobileBtnTxt: "获取验证码",
      codeBtnTxt: "确认",
    };
  },
  onLoad() {},
  methods: {
    onGetPhoneNumber(e) {
      console.log(e.detail.errMsg);
      console.log(e.detail.iv);
      console.log(e.detail.encryptedData);
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mobileArea {
  margin-top: 40%;
  display: flex;
  flex-direction: row;
}

.verificationCodeArea {
  margin-top: 10%;
  display: flex;
  flex-direction: row;
}

.mobile {
  color: gray;
}

.mobile input {
  height: 80rpx;
  line-height: 80rpx;
}

.avatar image {
  width: 300rpx;
  height: 300rpx;
  border-radius: 50%;
  border: 5rpx #eee solid;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180rpx;
  height: 80rpx;
  border-radius: 10rpx;
  color: white;
  padding: 0rpx 20rpx;
  background-color: rgb(5, 147, 5);
}
</style>

<template>
  <view class="content">
    <view class="avatar">
      <image :src="avatar"></image>
    </view>
    <view class="name">
      <text>{{ name }}</text>
    </view>
    <view class="btn">
      <button type="primary" @click="authorizeProfile">
        授权获取头像和昵称
      </button>
    </view>
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
      title: "Hello",
      avatar: "/static/image/avatar_placeholder.png",
      name: "",
    };
  },
  onLoad() {},
  methods: {
    onGetPhoneNumber(e) {
      console.log(e.detail.errMsg);
      console.log(e.detail.iv);
      console.log(e.detail.encryptedData);
    },
    authorizeProfile() {
      var that = this;
      wx.getUserProfile({
        desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          var userInfo = res.userInfo;
          var avatar = userInfo.avatarUrl;
          var name = userInfo.nickName;
          var gender = userInfo.gender;
          that.avatar = avatar;
          that.name = name;
          var genderStr = "MALE";
          if (gender == 2) {
            genderStr = "FEMALE";
          }
          api
            .updateProfile({ avatar: avatar, name: name, gender: genderStr })
            .then((result) => {
              uni.showToast({
                title: "更新资料成功",
                icon: "success",
              });
              api.sleep(1000).then((result) => {
                uni.switchTab({
                  // url: "/pages/social/index",
                  url: "/pages/activity/index",
                  success() {
                    let page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
                  },
                });
              });
            });
        },
      });
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

.avatar {
  margin-top: 30%;
}

.name {
  margin-top: 2%;
}

.avatar image {
  width: 300rpx;
  height: 300rpx;
  border-radius: 50%;
  border: 5rpx #eee solid;
}

.btn {
  margin-top: 20%;
}
</style>

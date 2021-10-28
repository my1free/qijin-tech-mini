<template>
  <view class="content">
    <view class="head">
      <view class="title">
        <text>请选择你的城市</text>
      </view>
    </view>
    <view class="middle"></view>
    <view class="foot">
      <view class="tips">{{ whisper }}</view>
      <view class="next" v-on:click="onNext()">{{ btnText }}</view>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  components: {},
  data: function() {
    const values = ["单身", "离异", "丧偶"];
    const valueMap = ["SINGLE", "DIVORCED", "WIDOWED"];
    return {
      title: "picker-view",
      values,
      valueMap,
      value: [0],
      visible: true,
      indicatorStyle: `height: 50px; background-color: #eee; opacity: 0.5;`,
      whisper: "",
      type: "single",
      maritalStatus: "SINGLE",
      btnText: "保存",
    };
  },

  onLoad(option) {
    this.type = option.type;
    api.whisper().then((result) => {
      this.whisper = result;
    });
    if (this.type == "single") {
      api.getProfile().then((result) => {
        console.log("profile=", result);
        var maritalStatus = result.maritalStatus;
        if (maritalStatus != undefined && maritalStatus != "") {
          if (maritalStatus == "SINGLE") {
            this.value = [0];
          } else if (maritalStatus == "DIVORCED") {
            this.value = [1];
          } else if (maritalStatus == "WIDOWED") {
            this.value = [2];
          }
        }
      });
    } else {
      this.btnText = "下一步";
    }
  },
  methods: {
    bindChange: function(e) {
      const val = e.detail.value;
      this.maritalStatus = this.valueMap[val];
    },
    onNext: function() {
      var data = {
        maritalStatus: this.maritalStatus,
      };
      api.updateProfile(data).then((result) => {
        api.sleep(10).then((result) => {
          if (this.type == "chain") {
            // 链式处理
            uni.navigateTo({
              url: "/pages/profile/gps?type=" + this.type,
            });
          } else {
            // 单个处理
            uni.navigateBack();
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  width: 750rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.picker-view {
  width: 750rpx;
  height: 600rpx;
  margin-top: 20rpx;
}
.item {
  height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
}

.head {
  width: 100%;
  margin-top: 5%;
}
.middle {
  margin-top: 10%;
}
.title {
  font-size: 40rpx;
  padding-left: 40rpx;
}

.uni-title {
  padding: 40rpx;
}

.foot {
  width: 100%;
  height: 30%;
  bottom: 0;
  position: fixed;
  border-top-left-radius: 20rpx;
}
.foot .tips {
  color: gray;
  padding: 40rpx;
  text-align: right;
}
.foot .next {
  padding: 20rpx 60rpx;
  background-color: rgb(211, 111, 3);
  width: 40%;
  margin-left: 60%;
  border-top-left-radius: 20rpx;
  border-bottom-left-radius: 20rpx;
  color: white;
  text-align: center;
}
</style>

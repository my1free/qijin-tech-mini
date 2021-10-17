<template>
  <view class="content">
    <view class="head">
      <view class="title">
        <text>请选择你的身高</text>
      </view>
    </view>
    <view class="middle">
      <picker-view
        v-if="visible"
        :indicator-style="indicatorStyle"
        :value="value"
        @change="bindChange"
        class="picker-view"
      >
        <picker-view-column>
          <view class="item" v-for="(item, index) in heights" :key="index"
            >{{ item }}&nbsp;cm</view
          >
        </picker-view-column>
      </picker-view>
    </view>
    <view class="foot">
      <view class="tips">问世间情为何物，直教生死相许</view>
      <view class="next" v-on:click="onNext()">下一步</view>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data: function() {
    const start = 170;
    const heights = [];
    const height = start;
    for (let i = 130; i <= 210; i++) {
      heights.push(i);
    }
    return {
      title: "picker-view",
      heights,
      height,
      value: [40, 0, 0],
      visible: true,
      indicatorStyle: `height: 50px; background-color: #eee; opacity: 0.5;`,
      type: "single",
    };
  },

  onLoad(option) {
    this.type = option.type;
    api.whisper().then((result) => {
      this.whisper = result;
    });
  },
  methods: {
    bindChange: function(e) {
      const val = e.detail.value;
      this.height = this.heights[val[0]];
    },
    onNext: function() {
      var data = {
        height: this.height,
      };
      api.updateProfile(data).then((result) => {
        api.sleep(10).then((result) => {
          if (this.type == "chain") {
            // 链式处理
            uni.navigateTo({
              url: "/pages/profile/edu?type=" + this.type,
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

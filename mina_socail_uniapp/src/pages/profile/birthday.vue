<template>
  <view class="content">
    <view class="head">
      <view class="title">
        <text>请选择你的生日</text>
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
          <view class="item" v-for="(item, index) in years" :key="index"
            >{{ item }}年</view
          >
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, index) in months" :key="index"
            >{{ item }}月</view
          >
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, index) in days" :key="index"
            >{{ item }}日</view
          >
        </picker-view-column>
      </picker-view>
      <view class="uni-padding-wrap">
        <view class="uni-title"
          >生日：{{ year }}&nbsp;年{{ month }}&nbsp;月{{ day }}&nbsp;日</view
        >
      </view>
    </view>
    <view class="foot">
      <view class="tips">{{ whisper }}</view>
      <view class="next" v-on:click="onNext()">{{ btnText }}</view>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data: function() {
    const date = new Date();
    const years = [];
    const year = 1990;
    const months = [];
    const month = date.getMonth() + 1;
    const days = [];
    const day = date.getDate();
    for (let i = 1960; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return {
      title: "picker-view",
      years,
      year,
      months,
      month,
      days,
      day,
      value: [30, month - 1, day - 1],
      visible: true,
      indicatorStyle: `height: 50px;`,
      whisper: "",
      type: "single",
      btnText: "保存",
    };
  },

  onLoad(option) {
    this.type = option.type;
    this.type = "chain";
    api.whisper().then((result) => {
      this.whisper = result;
    });
    if (this.type == "single") {
      api.getProfile().then((result) => {
        console.log("profile=", result);
        var birthday = result.birthdayDay;
        if (birthday != undefined && birthday != "") {
          var arr = birthday.split("-");
          this.value = [arr[0] - 1960, arr[1] - 1, arr[2] - 1];
        }
      });
    } else {
      this.btnText = "下一步";
    }
  },
  methods: {
    bindChange: function(e) {
      const val = e.detail.value;
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
    },
    onNext: function() {
      var data = {
        birthday: this.year + "-" + this.month + "-" + this.day,
      };
      api.updateProfile(data).then((result) => {
        api.sleep(10).then((result) => {
          if (this.type == "chain") {
            // 链式处理
            uni.navigateTo({
              url: "/pages/profile/height?type=" + this.type,
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

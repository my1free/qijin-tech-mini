<template>
  <view class="content">
    <view class="width100" v-if="key === 'description'">
      <view class="pd-40 text-bold ft-35">
        群组简介
      </view>
      <textarea
        id="description"
        class="pd-l-r-40 width100"
        :value="value"
        placeholder="输入群组简介"
        maxlength="-1"
        @input="onKeyInput"
        @blur="onKeyBlur"
        auto-height
      />
    </view>
    <view
      class="width100"
      style="text-align:right; margin-right: 100rpx; margin-top: 20rpx"
    >
      <button class="mini-btn" type="primary" size="mini" v-on:click="onSave()">
        保存
      </button>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  components: {},
  data() {
    return {
      groupId: 0,
      key: "",
      value: "",
    };
  },
  onLoad(option) {
    this.groupId = option.groupId;
    this.key = option.key;
    this.value = option.value;
    this.key = "description";
  },
  methods: {
    onKeyInput: function(event) {
      this.value = event.detail.value;
    },
    onKeyBlur: function(event) {
      this.value = event.detail.value;
    },

    onSave() {
      var data = {
        groupId: this.groupId,
      };
      var field = this.key;
      data[field] = this.value;
      console.log("data=", data);
      api.updateGroup(data).then((result) => {
        uni.showToast({
          title: "修改成功",
          icon: "success",
        });
        uni.navigateTo({
          url: "/pages/group/member/index?groupId=" + this.groupId,
        });
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
  margin-bottom: 200rpx;
  padding-bottom: 200rpx;
}

.cover-area {
  display: flex;
  flex-direction: row;
  width: 750rpx;
  flex-wrap: wrap;
  margin-top: 20rpx;
  margin-bottom: 100rpx;
}

.cover-area .cover {
  display: flex;
  width: 300rpx;
  height: 200rpx;
  margin-left: 50rpx;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin-top: 20rpx;
}

.cover-area .img image {
  width: 300rpx;
  height: 200rpx;
  border-radius: 10rpx;
}

.cover-area .add image {
  width: 200rpx;
  height: 160rpx;
}

.activity-tags {
  display: flex;
}

.activity-tags .activity-tag {
  margin-top: 20rpx;
  background-color: gray;
  padding: 2rpx 15rpx;
  border-radius: 10rpx;
  margin-right: 10rpx;
  color: white;
}

.customize-tag {
  border: 1rpx gray dashed;
  background-color: white !important;
  color: gray !important;
}
.tips {
  color: gray;
  padding-left: 40rpx;
}
</style>

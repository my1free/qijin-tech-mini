<template>
  <view class="content">
    <view class="left">
      <image src="/static/image/deshan.jpeg">
    </view>
    <view class="right">
      <view class="name">
        <text>齐晋</text>
      </view>
      <view class="description">广告位招租~</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myMeHead",
  props: {
    title: "Title",
    content: "This content",
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  width: 100%;
  height: 200rpx;
  flex-direction: row;
}

.left {
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 10rpx #eee solid;
}

.left image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
}

.right {
  width: 70%;
  height: 100%;
  border-bottom: 10rpx #eee solid;
}

.right .name {
  display: flex;
  align-items: center;
  height: 60%;
  font-size: 46rpx;
}
.right .description {
  display: flex;
  align-items: center;
  color: gray;
}
</style>

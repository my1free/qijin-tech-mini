<template>
  <view class="content">
    <view class="left">
      <image :src="logo"></image>
    </view>
    <view class="right">
      <view class="title"></view>
      <view class="info"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myGroupItem",
  props: {
    msg: String,
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
}
</style>

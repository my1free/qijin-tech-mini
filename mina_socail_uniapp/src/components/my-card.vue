<template>
  <view class="content">
    <view class="card-body">
      <view class="card-title">
        {{ title }}
      </view>
      <view class="card-content">
        {{ content }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myCard",
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
}

.card-body {
  width: 100%;
  min-height: 400rpx;
  background-color: #520b6f;
  border-radius: 15rpx;
  margin-top: 30rpx;
  box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
}

.card-body .card-title {
  color: white;
  font-size: 50rpx;
  text-align: center;
  padding: 20rpx;
}

.card-body .card-content {
  color: #ddd;
  padding: 20rpx;
}
</style>

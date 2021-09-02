<template>
  <view class="content">
    <view class="my-item" @click="myChat">
      IM 聊天
    </view>
  </view>
</template>

<script>
// import view from "../../component/view/view.vue";
export default {
  components: {},
  data() {
    return {};
  },
  onLoad(query) {
    this.errMsg = query.errMsg || "";
  },
  methods: {
    myChat: function() {
      uni.navigateTo({
        url: "./chat/chat",
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
}
.my-item {
  padding: 20rpx;
  margin-top: 20rpx;
  background-color: white;
}
</style>

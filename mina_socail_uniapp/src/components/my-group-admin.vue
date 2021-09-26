<template>
  <view class="component">
    <view class="admin-list">
      <view class="admin" v-for="admin in admins" :key="admin.userId">
        <view class="avatar">
          <image :src="admin.avatar"></image>
        </view>
        <view class="info">
          <view class="name">{{ admin.name }}</view>
          <view class="detail">
            <view>微信: {{ admin.wechat ? admin.wechat : "" }}</view>
            <view>手机号: {{ admin.mobile ? admin.mobile : "" }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myGroupAdmin",
  props: {
    admins: {
      type: Array,
      value: [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}

.admin {
  display: flex;
  flex-direction: row;
  border-bottom: 1rpx #eee solid;
  padding: 17rpx 0rpx;
}
.admin .info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20rpx;
}
.admin .info .name {
  font-weight: bold;
  padding: 5rpx 0rpx;
}

.admin .info .detail {
  color: gray;
  font-size: 28rpx;
}
.avatar image {
  width: 120rpx;
  height: 120rpx;
  border-radius: 10%;
}
</style>

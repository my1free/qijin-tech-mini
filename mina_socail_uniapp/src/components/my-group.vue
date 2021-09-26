<template>
  <view class="content">
    <view class="group-list">
      <view
        class="group-item"
        v-for="group in groups"
        :key="group.id"
        v-on:click="onGroupClick(group)"
      >
        <view class="logo">
          <image :src="group.logoSmall"></image>
        </view>
        <view class="info">
          <view class="title">
            {{ group.name }}
          </view>
          <view class="detail">
            {{ group.name }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myGroup",
  props: {
    groups: {
      type: Array,
      value: [],
    },
  },
  data() {
    return {};
  },
  methods: {
    onGroupManaged: function(groupId) {
      var url = `/pages/group/member/index?groupId=${groupId}`;
      uni.navigateTo({
        url: url,
      });
    },
    onGroupJoined: function(groupId) {
      var url = "/pages/group/info/index";
      uni.navigateTo({
        url: url,
      });
    },
    onGroupDefault: function(groupId) {
      var url = "/pages/group/join/index?groupId=" + groupId;
      uni.navigateTo({
        url: url,
      });
    },
    onGroupClick(group) {
      if (group.hasManaged) {
        this.onGroupManaged(group.id);
      } else if (group.hasJoined) {
        this.onGroupJoined(group.id);
      } else {
        this.onGroupDefault(group.id);
      }
    },
  },
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

.group-list {
  width: 100%;
}

.group-item {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10rpx 40rpx;
  margin-bottom: 20rpx;
}

.group-item .logo image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 10%;
}
.group-item .info {
  display: flex;
  flex-direction: column;
  padding-left: 30rpx;
}
.group-item .info .title {
  font-size: 34rpx;
  padding-bottom: 10rpx;
}

.group-item .info .detail {
  color: gray;
  font-size: 28rpx;
}
</style>

<template>
  <view class="activity-list">
    <view
      class="activity-item"
      v-for="activity in activities"
      :key="activity.id"
      v-on:click="onDetail(activity.id)"
    >
      <view class="activity-title">
        {{ activity.title }}
      </view>
      <view class="activity-tags">
        <view class="activity-tag" v-for="tag in activity.tags" :key="tag">
          {{ tag }}
        </view>
      </view>
      <view class="activity-sponsor">
        <text class="title">发起人:</text>
        <view class="sponsor-avatar">
          <image :src="activity.sponsor.avatar"></image>
        </view>
      </view>
      <view class="activity-date">
        <text class="title">时间:</text>
        {{ activity.startTime }} ~ {{ activity.endTime }}
      </view>
      <view class="activity-addr">
        <text class="title">地点:</text>
        {{ activity.location }}
      </view>
      <view class="activity-description">
        <text>{{ activity.description }}</text>
      </view>
      <view class="activity-participants">
        <text class="ft-bold">参与者</text>
        <text
          >({{
            activity.participants ? activity.participants.length : 0
          }}人)</text
        >
        <text class="title">:</text>
        <view
          class="activity-participant"
          v-for="participant in activity.participants"
          :key="participant.id"
        >
          <image :src="participant.profile.avatar"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data() {
    return {
      activities: [],
    };
  },
  onLoad() {
    api.listActivity().then((res) => {
      console.log("activities=", res);
      this.activities = res.activities;
    });
  },
  methods: {
    onDetail(activityId) {
      console.log(activityId);
      uni.navigateTo({
        url: "./detail/index?activityId=" + activityId,
      });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}

.title {
  font-weight: bold;
  margin-right: 20rpx;
}

.activity-item {
  margin-top: 20rpx;
  margin-bottom: 60rpx;
  border-bottom: 10rpx #ccc solid;
  padding-bottom: 10rpx;
}
.activity-list {
  padding: 40rpx;
}

.activity-title {
  font-size: 40rpx;
  font-weight: bold;
  color: rgb(193, 99, 0);
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

.activity-sponsor {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
}

.activity-sponsor image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}

.activity-date {
  margin-top: 20rpx;
}

.activity-addr {
  margin-top: 20rpx;
}

.activity-description {
  margin-top: 20rpx;
  border-top: 1rpx #ddd solid;
  padding-top: 10rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  color: gray;
}

.activity-participants {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  border-top: 1rpx #ddd solid;
  padding-top: 10rpx;
  min-height: 80rpx;
}
.activity-participant image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  border: 4rpx white solid;
  margin-left: -15rpx;
}
</style>

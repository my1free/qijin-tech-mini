<template>
  <view class="activity-list">
    <view class="activity-item">
      <view class="activity-title">
        {{ activity.title }}
      </view>
      <view class="activity-tags">
        <view class="activity-tag" v-for="tag in activity.tags" :key="tag">
          {{ tag }}
        </view>
      </view>
      <view
        class="activity-sponsor"
        v-on:click="onCardDetail(activity.sponsor.userId)"
      >
        <text class="title">发起人:</text>
        <view class="sponsor-avatar">
          <image :src="activity.sponsor.avatar"></image>
        </view>
      </view>
      <view class="activity-contact">
        <text class="title">联系方式:</text>
        <text>{{ activity.contact }}</text>
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
      <view class="activity-images" v-if="activity.imageList.length > 0">
        <view class="width100">
          <text class="ft-bold">相关图片</text>
        </view>
        <view class="image-list">
          <view v-for="image in activity.imageList" :key="image.id">
            <image :src="image.url" mode="widthFix"></image>
          </view>
        </view>
      </view>
      <view class="activity-participants">
        <view class="width100">
          <text class="ft-bold">参与者</text>
          <text
            >({{
              activity.participants ? activity.participants.length : 0
            }}人)</text
          >
        </view>
        <view class="participants-list width100">
          <view
            class="activity-participant"
            v-for="participant in activity.participants"
            :key="participant.id"
            v-on:click="onCardDetail(participant.profile.userId)"
          >
            <view class="participant-info">
              <image :src="participant.profile.avatar"></image>
              <text class="participant-name">{{
                participant.profile.name
              }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="activity-op">
      <uni-fab
        :pattern="opPattern"
        horizontal="right"
        direction="horizontal"
        :content="opContent"
      ></uni-fab>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data() {
    return {
      opPattern: {
        buttonColor: "#0574a9",
      },
      opContent: [],
      activity: {},
    };
  },
  onLoad(option) {
    var activityId = option.activityId;
    api.getActivityDetail(activityId).then((res) => {
      console.log("activity=", res);
      this.activity = res;
      if (this.activity.isMaster) {
        this.opContent.push({
          iconPath: "/static/image/edit.png",
          text: "编辑",
        });
      }
      if (this.activity.isParticipant) {
        this.opContent.push({
          iconPath: "/static/image/cancel.png",
          text: "取消",
        });
      } else {
        this.opContent.push({
          iconPath: "/static/image/add.png",
          text: "报名",
        });
      }
    });
  },
  methods: {
    onCardDetail(uid) {
      uni.navigateTo({
        url: "/pages/social/detail/index?userId=" + uid,
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
  margin-bottom: 10rpx;
  padding-bottom: 10rpx;
}

.activity-list {
  padding: 40rpx;
  margin-bottom: 200rpx;
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
  color: gray;
}

.activity-images {
  margin-top: 20rpx;
}
.activity-images .image-list {
  text-align: center;
}
.activity-images .image-list image {
  width: 98%;
  border-radius: 10rpx;
  margin-top: 20rpx;
}

.activity-participants {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20rpx;
  border-top: 1rpx #ddd solid;
  padding-top: 20rpx;
}

.participants-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.activity-participant {
  padding: 10rpx;
}

.activity-participant image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 20%;
  border: 4rpx white solid;
}
.participant-info {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.participant-info .participant-name {
  color: gray;
  width: 100rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

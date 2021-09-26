<template>
  <view class="with100">
    <view class="activity-list" v-bind:class="{ blur: withNoGroup }">
      <view v-if="myActivities != null && myActivities.length > 0">
        <view class="group-title">
          我发起的活动
        </view>
        <view
          class="activity-item"
          v-for="activity in myActivities"
          :key="activity.id"
          v-on:click="onDetail(activity.id)"
        >
          <view class="activity-title">
            {{ activity.title }}
          </view>
          <view
            class="activity-tags"
            v-if="activity.tags && activity.tags.length > 0"
          >
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
            <text class="title">开始时间:</text>
            {{ activity.startTime }}
          </view>
          <view class="activity-date">
            <text class="title">结束时间:</text>
            {{ activity.endTime }}
          </view>
          <view class="activity-date">
            <text class="title">总人数限制:</text>
            {{ activity.totalLimit }} 人
          </view>
          <view class="activity-date">
            <text class="title">男生人数限制:</text>
            {{ activity.maleLimit }} 人
          </view>
          <view class="activity-date">
            <text class="title">女生人数限制:</text>
            {{ activity.femaleLimit }} 人
          </view>
          <view class="activity-addr" v-if="activity.location">
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
                activity.participantCount ? activity.participantCount : 0
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

      <view>
        <view
          class="activity-item"
          v-for="activity in activities"
          :key="activity.id"
          v-on:click="onDetail(activity.id)"
        >
          <view
            class="group-title"
            v-if="myActivities != null && myActivities.length > 0"
          >
            其他活动
          </view>
          <view class="activity-title">
            {{ activity.title }}
          </view>
          <view
            class="activity-tags"
            v-if="activity.tags && activity.tags.length > 0"
          >
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
            <text class="title">开始时间:</text>
            {{ activity.startTime }}
          </view>
          <view class="activity-date">
            <text class="title">结束时间:</text>
            {{ activity.endTime }}
          </view>
          <view class="activity-date">
            <text class="title">总人数限制:</text>
            {{ activity.totalLimit }} 人
          </view>
          <view class="activity-date">
            <text class="title">男生人数限制:</text>
            {{ activity.maleLimit }} 人
          </view>
          <view class="activity-date">
            <text class="title">女生人数限制:</text>
            {{ activity.femaleLimit }} 人
          </view>
          <view class="activity-addr" v-if="activity.location">
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
                activity.participantCount ? activity.participantCount : 0
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
      <view class="activity-op" v-if="hasOp">
        <uni-fab
          :pattern="opPattern"
          horizontal="right"
          direction="horizontal"
          :content="opContent"
          @trigger="trigger"
        ></uni-fab>
      </view>
    </view>
    <view class="mask" v-if="withNoGroup">
      <view class="auth-tips">
        <text>你还不是群成员，没有权限查看</text>
      </view>
      <button type="warn" @click="applyGroup">点击申请入群</button>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data() {
    return {
      withNoGroup: false,
      hasOp: false,
      opPattern: {
        buttonColor: "#0574a9",
      },
      opContent: [
        {
          iconPath: "/static/image/horn.png",
          text: "发起活动",
        },
      ],
      myActivities: [],
      activities: [],
    };
  },
  onShow() {
    api.listActivity().then((res) => {
      console.log("activities=", res);
      this.activities = res.activities;
      this.myActivities = res.myActivities;
      // this.withNoGroup = res.withNoGroup;
      this.hasOp = res.hasOp;
    });
  },
  methods: {
    onDetail(activityId) {
      console.log(activityId);
      uni.navigateTo({
        url: "./detail/index?activityId=" + activityId,
      });
    },
    trigger(event) {
      uni.navigateTo({
        url: "./edit/index",
      });
    },
    applyGroup() {
      uni.navigateTo({
        url: "/pages/group/join/index?groupId=1",
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
  margin-bottom: 200rpx;
  padding-bottom: 200rpx;
  min-height: 96vh;
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

.group-title {
  background-color: #e66465;
  font-size: 35rpx;
  color: white;
  padding: 10rpx;
  margin-left: -30rpx;
  width: 730rpx;
  margin-bottom: 40rpx;
}
</style>

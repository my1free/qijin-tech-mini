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
        <text class="title">开始时间:</text>
        {{ activity.startTime }}
      </view>
      <view class="activity-date">
        <text class="title">结束时间:</text>
        {{ activity.endTime }}
      </view>
      <view class="activity-addr" v-if="activity.location">
        <text class="title">地点:</text>
        {{ activity.location }}
      </view>
      <view class="activity-description">
        <text>{{ activity.description }}</text>
      </view>
      <view class="activity-images" v-if="activity.images.length > 0">
        <view class="width100">
          <text class="ft-bold">相关图片</text>
        </view>
        <view class="image-list">
          <view v-for="image in activity.images" :key="image.id">
            <image :src="image.url" mode="widthFix"></image>
          </view>
        </view>
      </view>
      <view class="activity-participants">
        <view class="width100">
          <text class="ft-bold">参与者</text>
          <text>
            ({{ activity.participants ? activity.participants.length : 0 }}人)
          </text>
        </view>
        <view
          class="participants-list width100"
          v-if="!activity.isAdmin || activity.isAdmin == false"
        >
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
        <view
          class="participants-list-admin width100"
          v-if="activity.isAdmin && activity.isAdmin == true"
        >
          <view
            class="activity-participant-admin"
            v-for="participant in activity.participants"
            :key="participant.id"
            v-on:click="onCardDetail(participant.profile.userId)"
          >
            <view class="participant-info">
              <view class="avatar">
                <image :src="participant.profile.avatar"></image>
              </view>
              <view class="participaint-info-detail">
                <view>
                  <text class="participant-name">
                    {{ participant.profile.name }}
                  </text>
                  <image
                    v-if="participant.profile.gender === 'FEMALE'"
                    class="seximg mg-l-20rpx"
                    src="/static/image/sexw.png"
                  ></image>
                  <image
                    v-if="participant.profile.gender === 'MALE'"
                    class="seximg mg-l-20rpx"
                    src="/static/image/sexm.png"
                  ></image>
                </view>
                <text class="participant-contact">
                  {{
                    participant.profile.mobile
                      ? participant.profile.mobile
                      : "无手机号"
                  }}
                </text>
              </view>
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
        @trigger="trigger"
      ></uni-fab>
    </view>
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog
        mode="base"
        type="warn"
        message="成功消息"
        title="关闭活动确认"
        content="确认关闭活动？"
        :duration="2000"
        :before-close="true"
        @close="closePopup"
        @confirm="closeActivity"
      ></uni-popup-dialog>
    </uni-popup>
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
      activityId: 0,
    };
  },
  onLoad(option) {
    var activityId = option.activityId;
    this.activityId = activityId;
    this.refreshActivityDetail(activityId);
  },
  methods: {
    onCardDetail(uid) {
      if (this.activity.audited) return;
      uni.navigateTo({
        url: "/pages/social/detail/index?userId=" + uid,
      });
    },
    refreshActivityDetail(activityId) {
      api.getActivityDetail(activityId).then((res) => {
        console.log("activity=", res);
        this.activity = res;
        this.refreshOpContent();
      });
    },
    refreshOpContent() {
      var opContent = [];
      if (this.activity.isMaster || this.activity.isAdmin) {
        opContent.push({
          iconPath: "/static/image/edit.png",
          text: "编辑活动",
        });
        opContent.push({
          iconPath: "/static/image/close.png",
          text: "关闭活动",
        });
      }
      if (this.activity.isParticipant) {
        opContent.push({
          iconPath: "/static/image/cancel.png",
          text: "取消报名",
        });
      } else {
        opContent.push({
          iconPath: "/static/image/add.png",
          text: "报名",
        });
      }
      this.opContent = opContent;
    },
    trigger(event) {
      console.log("event=", event);
      if (event.item.text == "编辑活动") {
        this.editActivity();
      } else if (event.item.text == "报名") {
        this.joinActivity();
      } else if (event.item.text == "取消报名") {
        this.cancelActivity();
      } else if (event.item.text == "关闭活动") {
        this.showCloseActivityDialog();
      }
    },
    closePopup() {
      this.$refs.popup.close();
    },
    editActivity() {
      console.log("editActivity");
      uni.navigateTo({
        url: "../edit/index?activityId=" + this.activityId,
      });
    },
    joinActivity() {
      api.joinActivity({ activityId: this.activityId }).then((result) => {
        if (typeof result === "number") {
          if (result == 10002) {
            uni.showModal({
              title: "提示",
              content: "报名活动需要在个人资料中补全手机号",
              showCancel: false,
              success: function(res) {},
            });
          }
          return;
        }
        uni.showToast({
          title: "报名成功",
          icon: "success",
        });
        // this.activity.isParticipant = true;
        api.sleep(2000).then((result) => {
          this.refreshActivityDetail(this.activityId);
        });
      });
    },
    cancelActivity() {
      api.cancelActivity({ activityId: this.activityId }).then((result) => {
        uni.showToast({
          title: "取消成功",
          icon: "success",
        });
      });
      // this.activity.isParticipant = false;
      api.sleep(2000).then((result) => {
        this.refreshActivityDetail(this.activityId);
      });
    },
    showCloseActivityDialog() {
      this.$refs.popup.open();
    },
    closeActivity() {
      this.$refs.popup.close();
      api.closeActivity({ activityId: this.activityId }).then((result) => {
        uni.showToast({
          title: "关闭成功",
          icon: "success",
        });
        api.sleep(1000).then((result) => {
          uni.switchTab({
            url: "/pages/activity/index",
          });
        });
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
  padding-bottom: 200rpx;
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
  margin-top: 20rpx;
  justify-content: flex-start;
}

.activity-participant {
  padding: 5rpx;
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

.participants-list-admin {
  display: flex;
  margin-top: 20rpx;
  flex-direction: column;
}

.activity-participant-admin {
  padding: 5rpx;
  width: 100%;
}

.activity-participant-admin .avatar image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 20%;
  border: 4rpx white solid;
}

.activity-participant-admin .participant-info {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.activity-participant-admin .participaint-info-detail {
  display: flex;
  text-align: left;
  flex-direction: column;
}

.activity-participant-admin .participant-info .participant-name {
  color: black;
  font-size: 35rpx;
  width: 100rpx;
  overflow: hidden;
  white-space: nowrap;
  padding: 10rpx;
}
.activity-participant-admin .participant-info .participant-contact {
  padding-left: 10rpx;
  color: gray;
}
.activity-participant-admin .seximg {
  width: 28rpx;
  height: 28rpx;
}
</style>

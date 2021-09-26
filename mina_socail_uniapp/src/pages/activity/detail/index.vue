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
      <view class="self-status">
        <text class="ft-bold pd-r-20">报名状态:</text>
        <text v-if="activity.selfStatus === 'NULL'">未报名</text>
        <text v-if="activity.selfStatus === 'AUDIT'">审核中</text>
        <text v-if="activity.selfStatus === 'JOIN'">已报名</text>
        <text v-if="activity.selfStatus === 'FORCE_JOIN'">已报名-空降</text>
        <text v-if="activity.selfStatus === 'WAIT'">候补中</text>
      </view>
      <view
        class="activity-participants"
        v-if="
          activity.auditParticipants && activity.auditParticipants.length > 0
        "
      >
        <view class="width100">
          <text class="ft-bold">待审核</text>
          <text class="mg-l-10">
            &nbsp;({{ activity.auditParticipants.length }})人
          </text>
        </view>
        <view class="participants-list width100">
          <view
            class="activity-participant"
            v-for="participant in activity.auditParticipants"
            :key="participant.id"
            v-on:click="onCardDetail(participant.profile.userId)"
          >
            <view class="participant-info">
              <image :src="participant.profile.avatar"></image>
              <image
                v-if="participant.profile.gender === 'FEMALE'"
                src="/static/image/sexw.png"
                class="sex"
              ></image>
              <image
                v-if="participant.profile.gender === 'MALE'"
                src="/static/image/sexm.png"
                class="sex"
              ></image>
              <view
                class="participant-no"
                v-bind:class="{
                  bgmale: participant.profile.gender === 'MALE',
                  bgfemale: participant.profile.gender === 'FEMALE',
                }"
                v-if="participant.no"
              >
                {{ participant.no }}
              </view>
              <view class="participant-no-placeholder" v-if="!participant.no">
              </view>
              <view class="participant-name-detail">
                <view class="participant-name-sex">
                  <text class="participant-name">
                    {{ participant.profile.name }}
                  </text>
                </view>
                <view class="participant-detail">
                  <uni-row class="demo-uni-row">
                    <uni-col :span="6">
                      <text> {{ participant.profile.birthdayYear }}年</text>
                    </uni-col>
                    <uni-col :span="8">
                      <text>
                        {{
                          participant.profile.edu ? participant.profile.edu : ""
                        }}</text
                      >
                    </uni-col>
                    <uni-col :span="6">
                      <text>
                        {{
                          participant.profile.job ? participant.profile.job : ""
                        }}</text
                      >
                    </uni-col>
                  </uni-row>
                </view>
              </view>
              <view
                class="btn"
                @click.stop="joinActivityApprove(participant.id)"
              >
                通过
              </view>
            </view>
            <!-- <view class="participant-no" v-if="!participant.no">
              <image
                v-if="participant.profile.gender === 'FEMALE'"
                src="/static/image/sexw.png"
              ></image>
              <image
                v-if="participant.profile.gender === 'MALE'"
                src="/static/image/sexm.png"
              ></image>
            </view>
          </view> -->
          </view>
        </view>
      </view>
      <view class="activity-participants">
        <view class="width100">
          <text class="ft-bold">参与者</text>
          <text class="mg-l-10">
            &nbsp;(男:{{ activity.maleCount }}&nbsp;/&nbsp;女:{{
              activity.femaleCount
            }})
          </text>
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
              <image
                v-if="participant.profile.gender === 'FEMALE'"
                src="/static/image/sexw.png"
                class="sex"
              ></image>
              <image
                v-if="participant.profile.gender === 'MALE'"
                src="/static/image/sexm.png"
                class="sex"
              ></image>
              <view
                class="participant-no"
                v-bind:class="{
                  bgmale: participant.profile.gender === 'MALE',
                  bgfemale: participant.profile.gender === 'FEMALE',
                }"
                v-if="participant.no"
              >
                {{ participant.no }}
              </view>
              <view class="participant-no-placeholder" v-if="!participant.no">
              </view>
              <view class="participant-name-detail">
                <view class="participant-name-sex">
                  <text class="participant-name">
                    {{ participant.profile.name }}
                  </text>
                </view>
                <view class="participant-detail">
                  <uni-row class="demo-uni-row">
                    <uni-col :span="6">
                      <text> {{ participant.profile.birthdayYear }}年</text>
                    </uni-col>
                    <uni-col :span="8">
                      <text>
                        {{
                          participant.profile.edu ? participant.profile.edu : ""
                        }}</text
                      >
                    </uni-col>
                    <uni-col :span="6">
                      <text>
                        {{
                          participant.profile.job ? participant.profile.job : ""
                        }}</text
                      >
                    </uni-col>
                  </uni-row>
                </view>
              </view>
              <view
                class="btn"
                v-if="participant.hasCheckInBtn"
                @click.stop="checkIn(participant.id)"
              >
                签到
              </view>
            </view>
            <!-- <view class="participant-no" v-if="!participant.no">
              <image
                v-if="participant.profile.gender === 'FEMALE'"
                src="/static/image/sexw.png"
              ></image>
              <image
                v-if="participant.profile.gender === 'MALE'"
                src="/static/image/sexm.png"
              ></image>
            </view>
          </view> -->
          </view>
        </view>
      </view>
      <view class="activity-participants" v-if="activity.waitParticipants">
        <view class="width100">
          <text class="ft-bold">候补</text>
          <text class="mg-l-10">
            ({{ activity.waitParticipants.length }}人)
          </text>
        </view>
        <view class="participants-list width100">
          <view
            class="activity-participant"
            v-for="participant in activity.waitParticipants"
            :key="participant.id"
            v-on:click="onCardDetail(participant.profile.userId)"
          >
            <view class="participant-info">
              <image :src="participant.profile.avatar"></image>
              <image
                v-if="participant.profile.gender === 'FEMALE'"
                src="/static/image/sexw.png"
                class="sex"
              ></image>
              <image
                v-if="participant.profile.gender === 'MALE'"
                src="/static/image/sexm.png"
                class="sex"
              ></image>
              <view
                class="participant-no"
                v-bind:class="{
                  bgmale: participant.profile.gender === 'MALE',
                  bgfemale: participant.profile.gender === 'FEMALE',
                }"
                v-if="participant.no"
              >
                {{ participant.no }}
              </view>
              <view class="participant-no-placeholder" v-if="!participant.no">
              </view>
              <view class="participant-name-detail">
                <view class="participant-name-sex">
                  <text class="participant-name">
                    {{ participant.profile.name }}
                  </text>
                </view>
                <view class="participant-detail">
                  <uni-row class="demo-uni-row">
                    <uni-col :span="6">
                      <text> {{ participant.profile.birthdayYear }}年</text>
                    </uni-col>
                    <uni-col :span="8">
                      <text>
                        {{
                          participant.profile.edu ? participant.profile.edu : ""
                        }}</text
                      >
                    </uni-col>
                    <uni-col :span="6">
                      <text>
                        {{
                          participant.profile.job ? participant.profile.job : ""
                        }}</text
                      >
                    </uni-col>
                  </uni-row>
                </view>
              </view>
              <view
                class="btn"
                v-if="activity.isAdmin"
                @click.stop="joinActivityForce(participant.id)"
              >
                空降
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
      api.cardCheck(uid, this.activityId).then((res) => {
        if (res) {
          uni.navigateTo({
            url: "/pages/social/detail/index?userId=" + uid,
          });
        } else {
          uni.showModal({
            title: "提示",
            content: "你还没有报名，不能查看对方详细信息哦",
            showCancel: false,
            success: function(res) {},
          });
        }
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
        this.joinActivityAudit();
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
      api
        .joinActivity({
          activityId: this.activityId,
        })
        .then((result) => {
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
          console.log("result=", result);
          if (result.status != undefined && result.status == "WAIT") {
            uni.showModal({
              title: "提示",
              content: result.message,
              showCancel: false,
              success: function(res) {},
            });
          } else {
            uni.showToast({
              title: "报名成功",
              icon: "success",
            });
          }
          // this.activity.isParticipant = true;
          api.sleep(2000).then((result) => {
            this.refreshActivityDetail(this.activityId);
          });
        });
    },
    cancelActivity() {
      api
        .cancelActivity({
          activityId: this.activityId,
        })
        .then((result) => {
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
      api
        .closeActivity({
          activityId: this.activityId,
        })
        .then((result) => {
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
    cardclose() {
      this.$refs.cardpopup.close();
    },
    cardconfirm() {
      this.$refs.cardpopup.close();
    },
    checkIn(participantId) {
      api
        .checkIn({
          participantId: participantId,
        })
        .then((result) => {
          api.participantInfo(participantId).then((info) => {
            for (var i = 0; i < this.activity.participants.length; i++) {
              if (info.id == this.activity.participants[i].id) {
                this.activity.participants[i].hasCheckInBtn =
                  info.hasCheckInBtn;
                this.activity.participants[i].no = info.no;
              }
            }
          });
        });
    },
    joinActivityAudit(activityId) {
      api
        .joinActivityAudit({
          activityId: this.activityId,
        })
        .then((result) => {
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
          uni.showModal({
            title: "提示",
            content: "报名成功，等待管理员审核",
            showCancel: false,
            success: function(res) {},
          });
          api.sleep(2000).then((result) => {
            this.refreshActivityDetail(this.activityId);
          });
        });
    },
    joinActivityForce(participantId) {
      api
        .joinActivityForce({
          participantId: participantId,
        })
        .then((result) => {
          uni.showToast({
            title: "空降成功",
            icon: "success",
          });
          api.sleep(2000).then((result) => {
            this.refreshActivityDetail(this.activityId);
          });
        });
    },
    joinActivityApprove(participantId) {
      api
        .joinActivityApprove({
          participantId: participantId,
        })
        .then((result) => {
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
          console.log("result=", result);
          if (result.status != undefined && result.status == "WAIT") {
            uni.showModal({
              title: "提示",
              content: result.message,
              showCancel: false,
              success: function(res) {},
            });
          } else {
            uni.showToast({
              title: "报名成功",
              icon: "success",
            });
          }
          // this.activity.isParticipant = true;
          api.sleep(2000).then((result) => {
            this.refreshActivityDetail(this.activityId);
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

.self-status {
  margin-top: 20rpx;
  border-top: 1rpx #ddd solid;
  padding-top: 20rpx;
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
  /* justify-content: flex-start; */
  flex-direction: row;
}

.activity-participant {
  padding: 14rpx;
  width: 100%;
}

.activity-participant image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 20%;
  border: 4rpx white solid;
}

.participant-info {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.participant-info .participant-name {
  color: black;
  width: 200rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 36rpx;
  margin-left: 20rpx;
  padding: 2rpx;
  text-align: left;
}

.participant-info .sex {
  width: 35rpx;
  height: 35rpx;
  /* margin-left: 5rpx; */
  margin-left: -21rpx;
  margin-top: -13rpx;
  background-color: white;
  border-radius: 50%;
}

.participant-no {
  color: white;
  border-radius: 50%;
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: -72rpx;
  left: -37rpx;
}

.participant-no image {
  width: 35rpx;
  height: 35rpx;
  border: none;
  background-color: white;
  border-radius: 50%;
  padding: 5rpx;
}

.participant-no-placeholder {
  width: 35rpx;
  height: 35rpx;
  border: none;
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

.participant-name-detail {
  display: flex;
  flex-direction: column;
  width: 540rpx;
  margin-left: -36rpx;
}

.participant-name-sex {
  align-items: center;
  display: flex;
}

.participant-info .participant-detail {
  color: gray;
  padding: 4rpx;
  justify-content: flex-start;
}

.participant-info .btn {
  position: relative;
  background-color: green;
  margin-left: -150rpx;
  height: 50rpx;
  padding: 5rpx 10rpx;
  color: white;
  border-radius: 5rpx;
}
</style>

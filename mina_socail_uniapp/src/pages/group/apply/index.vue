<template>
  <view class="content">
    <view class="member-list">
      <view class="title width100">
        <text>申请列表</text>
        <text class="num">( {{ applies.length }} 人 )</text>
      </view>
      <view
        class="member"
        v-for="member in applies"
        :key="member.profile.userId"
        v-on:click="onApplyDetail(member.profile.userId)"
      >
        <view class="avatar-name">
          <view class="avatar">
            <image :src="member.profile.avatar"></image>
          </view>
        </view>
        <view class="info">
          <view class="name">
            {{ member.profile.name }}
            <image
              v-if="member.profile.gender === 'FEMALE'"
              class="seximg mg-l-20rpx"
              src="/static/image/sexw.png"
            ></image>
            <image
              v-if="member.profile.gender === 'MALE'"
              class="seximg mg-l-20rpx"
              src="/static/image/sexm.png"
            >
            </image>
            <view class="apply-date">
              申请时间:&nbsp;{{ member.createTimeStr }}
            </view>
          </view>
          <view class="mobile">
            生日:&nbsp;{{ member.profile.birthday }}年，学校:&nbsp;
            {{ member.profile.edu }}
          </view>
        </view>
        <!-- <view class="operation">
          <button size="mini" type="warn" @click.stop="kickOut(member.userId)">
            踢除
          </button>
        </view> -->
      </view>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  components: {},
  data() {
    return {
      groupId: 0,
      group: {},
      applies: [],
    };
  },
  onShow() {
    api.listApply(this.groupId).then((result) => {
      console.log("listApply=", result);
      this.applies = result.applies;
    });
  },
  onLoad(option) {
    var groupId = option.groupId;
    this.groupId = groupId;
    console.log("groupId=", groupId);
  },
  methods: {
    kickOut(userId) {
      console.log("kickOut=", userId);
    },
    onCardDetail(uid) {
      uni.navigateTo({
        url: "/pages/social/detail/index?userId=" + uid,
      });
    },
    onApplyDetail(userId) {
      uni.navigateTo({
        url:
          "/pages/group/apply/detail/index?userId=" +
          userId +
          "&groupId=" +
          this.groupId,
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 300rpx;
}

.title {
  font-size: 40rpx;
  font-weight: bold;
  padding: 20rpx;
}

.num {
  font-size: 28rpx;
  color: gray;
  font-weight: normal;
  padding-left: 20rpx;
}

.member-list {
  margin-top: 20rpx;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.member-list .member {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10rpx 40rpx;
  margin-bottom: 20rpx;
  justify-content: left;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}

.avatar image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 10%;
}
.info {
  padding-left: 50rpx;
  display: flex;
  flex-direction: column;
}
.info .name {
  text-align: left;
  text-overflow: ellipsis;
  font-size: 35rpx;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.info .mobile {
  padding-top: 10rpx;
  color: gray;
}
.operation {
  padding-left: 100rpx;
  display: flex;
  align-items: center;
}

.description {
  display: flex;
  width: 100%;
  margin-left: 10rpx;
  padding: 20rpx;
  border-left: 15rpx #ddd solid;
  min-height: 100rpx;
  align-items: center;
  color: gray;
}

.apply-list {
  width: 100%;
  display: flex;
  margin: 20rpx 0rpx;
  flex-direction: row;
}

.name .apply-date {
  font-size: 28rpx;
  color: orangered;
  font-weight: normal;
  margin-left: 20rpx;
}

.apply-list image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  border: 4rpx white solid;
  margin-left: -24rpx;
}

.seximg {
  width: 28rpx;
  height: 28rpx;
}
</style>

<template>
  <view class="content">
    <view class="title width100">
      <text>群简介</text>
    </view>
    <view
      class="description"
      v-on:click="onEdit(groupId, 'description', group.description)"
    >
      <view class="info-content">
        <text v-if="group.description">{{ group.description }}</text>
        <text v-if="!group.description">点击填写群组简介</text>
      </view>
    </view>
    <view class="title width100">
      <text>管理员</text>
      <text class="num">( {{ admins.length }} 人 )</text>
    </view>
    <view class="admin-list">
      <view
        class="admin"
        v-for="admin in admins"
        :key="admin.userId"
        v-on:click="onCardDetail(admin.userId)"
      >
        <view class="avatar">
          <image :src="admin.profile.avatar"></image>
        </view>
        <view class="name">
          <text>{{ admin.profile.name }}</text>
        </view>
      </view>
    </view>
    <view class="apply-list box-shadow pd-tb-20" v-on:click="onApplyList()">
      <view class="title">
        <text>申请列表</text>
      </view>
      <view style="width:30rpx"></view>
      <view v-for="member in applies" :key="member.userId">
        <image :src="member.profile.avatar"></image>
      </view>
    </view>
    <view class="member-list">
      <view class="title width100">
        <text>成员</text>
        <text class="num">( {{ members.length }} 人 )</text>
      </view>
      <view
        class="member"
        v-for="member in members"
        :key="member.userId"
        v-on:click="onCardDetail(member.userId)"
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
          </view>
          <view class="mobile">
            {{ member.profile.mobile ? member.profile.mobile : "手机号未填写" }}
          </view>
        </view>
        <view class="operation">
          <button size="mini" type="warn" @click.stop="kickOut(member.userId)">
            踢除
          </button>
        </view>
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
      admins: [],
      members: [],
      applies: [],
    };
  },
  onShow() {
    api.listGroupMember(this.groupId).then((result) => {
      console.log("listGroupMember=", result);
      this.admins = result.admins;
      this.members = result.members;
      this.group = result.group;
      this.applies = result.applies;
    });
  },
  onLoad(option) {
    var groupId = option.groupId;
    groupId = 1;
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
    onEdit(groupId, key, value) {
      var url = `/pages/group/edit/index?groupId=${groupId}&key=${key}`;
      if (value != undefined) {
        url = `/pages/group/edit/index?groupId=${groupId}&key=${key}&value=${value}`;
      }
      uni.navigateTo({
        url: url,
      });
    },
    onApplyList() {
      uni.navigateTo({
        url: "/pages/group/apply/index?groupId=" + this.groupId,
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

.admin-list {
  width: 100%;
  display: flex;
  padding-left: 20rpx;
  margin-top: 20rpx;
}

.admin-list .admin {
  margin-left: 40rpx;
}

.admin .name {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.member-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.member-list .member {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10rpx 20rpx;
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
  width: 300rpx;
  padding-left: 50rpx;
  display: flex;
  flex-direction: column;
}
.info .name {
  text-align: left;
  text-overflow: ellipsis;
  font-size: 35rpx;
  font-weight: bold;
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

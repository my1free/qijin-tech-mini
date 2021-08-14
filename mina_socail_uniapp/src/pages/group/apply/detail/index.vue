<template>
  <view class="content">
    <view class="apply width100">
      <view class="apply" v-if="!applying">
        <view
          class="profile"
          v-if="
            group.profileRequirementArray &&
              group.profileRequirementArray.length > 0
          "
        >
          <view class="pd-40 text-bold ft-35 width100">
            个人信息
          </view>
          <view class="detail">
            <view v-if="needName" class="pd-20">
              <text class="profile-title">姓名: </text>
              <text class="ft-cl-gray" v-if="profile.name">{{
                profile.name
              }}</text>
            </view>
            <view v-if="needBirthday" class="pd-20">
              <text class="profile-title">生日: </text>
              <text class="ft-cl-gray" v-if="profile.birthday">
                {{ profile.birthday }}&nbsp;年
              </text>
            </view>
            <view v-if="needBornCity" class="pd-20">
              <text class="profile-title">籍贯: </text>
              <text class="ft-cl-gray" v-if="profile.bornCity">
                {{ profile.bornCity }}
              </text>
            </view>
            <view v-if="needEdu" class="pd-20">
              <text class="profile-title">学校: </text>
              <text class="ft-cl-gray" v-if="profile.edu">
                {{ profile.edu }}
              </text>
            </view>
            <view v-if="needLiveCity" class="pd-20">
              <text class="profile-title">现居地: </text>
              <text class="ft-cl-gray" v-if="profile.liveCity">
                {{ profile.liveCity }}
              </text>
            </view>
          </view>
        </view>
        <view class="certify">
          <view class="cover-area">
            <view class="pd-40 text-bold ft-35 width100">
              相关证明
            </view>
            <view class="cover img" v-for="image in apply.images" :key="image">
              <image :src="image" mode="widthFix"></image>
            </view>
          </view>
        </view>
        <view
          class="width100"
          style="text-align:right; margin-right: 100rpx; margin-top: 20rpx"
        >
          <button
            class="mini-btn mg-r-60"
            type="warn"
            size="mini"
            v-on:click="onReject()"
          >
            拒绝
          </button>
          <button
            class="mg-r-60"
            type="primary"
            size="mini"
            v-on:click="onAccept()"
          >
            允许
          </button>
        </view>
        <view class="reason">
          <textarea
            placeholder="请填写拒绝理由"
            :value="reason"
            @input="onKeyInput"
            @blur="onKeyBlur"
            auto-height
          ></textarea>
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
      profile: {},
      group: {},
      apply: {},
      needName: false,
      needBirthday: false,
      needBornCity: false,
      needEdu: false,
      needLiveCity: false,
      applying: false,
      reason: "",
    };
  },
  onLoad(option) {
    (this.userId = option.userId), (this.groupId = option.groupId);
    this.onLoadData(this.userId, this.groupId);
  },
  methods: {
    onLoadData: function(userId, groupId) {
      api.applyDetail(userId, groupId).then((result) => {
        console.log("applyDetail=", result);
        this.apply = result;
        this.group = result.group;
        this.profile = result.profile;
        if (
          this.group.profileRequirementArray != undefined &&
          this.group.profileRequirementArray.length > 0
        ) {
          this.needName = this.group.profileRequirementArray.includes("name");
          this.needBirthday = this.group.profileRequirementArray.includes(
            "birthday"
          );
          this.needBornCity = this.group.profileRequirementArray.includes(
            "bornCity"
          );
          this.needEdu = this.group.profileRequirementArray.includes("edu");
          this.needLiveCity = this.group.profileRequirementArray.includes(
            "liveCity"
          );
        }
        if (
          result.applyVo != undefined &&
          result.applyVo != null &&
          result.applyVo.status == "APPLYING"
        ) {
          this.applying = true;
        }
      });
    },
    onKeyInput: function(event) {
      this.reason = event.detail.value;
    },
    onKeyBlur: function(event) {
      this.reason = event.detail.value;
    },
    onReject: function() {
      if (this.reason == undefined || this.reason == "") {
        uni.showToast({
          title: "请填写拒绝理由",
          icon: "error",
        });
        return;
      }
      var data = {
        applyId: this.apply.id,
        groupId: this.groupId,
        userId: this.userId,
        reason: this.reason,
      };
      api.rejectApply(data).then((result) => {
        uni.showToast({
          title: "操作成功",
          icon: "success",
        });
        api.sleep(2000).then((result) => {
          uni.navigateBack();
        });
      });
    },
    onAccept: function() {
      var data = {
        applyId: this.apply.id,
        groupId: this.groupId,
        userId: this.userId,
      };
      api.acceptApply(data).then((result) => {
        uni.showToast({
          title: "操作成功",
          icon: "success",
        });
        api.sleep(2000).then((result) => {
          uni.navigateBack();
        });
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
  font-size: 45rpx;
  font-weight: bold;
}

.head {
  padding: 40rpx 0rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}

.head .logo image {
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
}

.head .name-info {
  padding-left: 40rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.head .name {
  padding: 5rpx;
}

.head .info {
  padding: 5rpx;
  color: gray;
}

.admin-list {
  width: 100%;
  display: flex;
  margin-top: 50rpx;
  align-items: flex-start;
  padding: 20rpx;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
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

.avatar image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 10%;
}

.description {
  margin-top: 20rpx;
  padding: 0rpx 60rpx;
  color: gray;
  line-height: 45rpx;
}

.cover-area {
  display: flex;
  flex-direction: row;
  width: 750rpx;
  flex-wrap: wrap;
  margin-top: 20rpx;
  margin-bottom: 100rpx;
}

.cover-area .cover {
  display: flex;
  width: 640rpx;
  margin-left: 50rpx;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin-top: 20rpx;
}

.cover-area .img image {
  width: 600rpx;
  border-radius: 10rpx;
}

.cover-area .add image {
  width: 200rpx;
  height: 160rpx;
}

.tips {
  color: gray;
  padding-left: 40rpx;
}

.profile .detail {
  display: flex;
  flex-direction: column;
}

.profile-title {
  font-size: 30rpx;
  padding-left: 40rpx;
  font-weight: bold;
  padding-right: 20rpx;
}
.applying {
  padding: 50rpx;
  margin-top: 50rpx;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  font-size: 30rpx;
  color: rgb(221, 122, 10);
}
.reason {
  padding: 60rpx;
}
</style>

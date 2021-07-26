<template>
  <view class="content">
    <view class="panel pd-20 img-edit" v-on:click="onEditImg()">
      <view class="left">
        <image
          class="img-avatar mg-l-20rpx"
          :src="myProfile.profile.avatar"
        ></image>
      </view>
      <view
        class="right"
        v-if="myProfile.images && myProfile.images.length > 0"
      >
        <view
          class="img-cover mg-l-20rpx"
          v-for="(image, idx) in myProfile.images"
          :key="image.id"
        >
          <image :src="image.url" mode="widthFix" v-if="idx < 5"></image>
        </view>
      </view>
      <view
        class="right ft-cl-gray pd-l-20"
        v-if="!myProfile.images || myProfile.images.length == 0"
      >
        点击编辑头像和个人图片
      </view>
      <view class="side">
        <text>></text>
      </view>
    </view>
    <view class="panel tips width100" v-if="myProfile.shouldShow == false">
      <text
        >* 注：\r
        只有姓名、头像、性别、生日均不为空，并且至少有一张个人图片的情况下，才会被别人看到哦~</text
      >
    </view>
    <view class="panel">
      <view class="panel-head">
        <view class="panel-head-title">个人信息</view>
      </view>
      <view class="panel-body">
        <view
          class="info-item"
          v-on:click="onEdit('name', myProfile.profile.name)"
        >
          <view class="info-item-title">姓名</view>
          <view class="info-item-value">{{
            myProfile.profile.name ? myProfile.profile.name : "点击填写姓名"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('gender', myProfile.profile.gender)"
        >
          <view class="info-item-title">性别</view>
          <view class="info-item-value">{{
            myProfile.profile.gender
              ? myProfile.profile.gender === "FEMALE"
                ? "女"
                : "男"
              : "点击选择性别"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('height', myProfile.profile.height)"
        >
          <view class="info-item-title">身高</view>
          <view class="info-item-value">{{
            myProfile.profile.height ? myProfile.profile.height : "点击填写身高"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('birthday', myProfile.profile.birthday)"
        >
          <view class="info-item-title">生日</view>
          <view class="info-item-value">{{
            myProfile.profile.birthday
              ? myProfile.profile.birthday
              : "点击选择生日"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('bornCity', myProfile.profile.bornCity)"
        >
          <view class="info-item-title">籍贯</view>
          <view class="info-item-value">{{
            myProfile.profile.bornCity
              ? myProfile.profile.bornCity
              : "点击填写籍贯"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('liveCity', myProfile.profile.liveCity)"
        >
          <view class="info-item-title">现居地</view>
          <view class="info-item-value">{{
            myProfile.profile.liveCity
              ? myProfile.profile.liveCity
              : "点击填写现居地"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('edu', myProfile.profile.edu)"
        >
          <view class="info-item-title">学校</view>
          <view class="info-item-value">{{
            myProfile.profile.edu ? myProfile.profile.edu : "点击填写毕业高校"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('eduDegree', myProfile.profile.eduDegree)"
        >
          <view class="info-item-title">学历</view>
          <view class="info-item-value">{{
            myProfile.profile.eduDegree
              ? myProfile.profile.eduDegree
              : "点击选择学历"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
        <view
          class="info-item"
          v-on:click="onEdit('job', myProfile.profile.job)"
        >
          <view class="info-item-title">工作</view>
          <view class="info-item-value">{{
            myProfile.profile.job ? myProfile.profile.job : "点击填写工作行业"
          }}</view>
          <view class="info-item-ops">></view>
        </view>
      </view>
    </view>
    <view class="panel" v-on:click="onEditTags()">
      <view class="panel-head">
        <view class="panel-head-title">个人爱好</view>
      </view>
      <view
        class="panel-body pd"
        v-if="myProfile.hobbies && myProfile.hobbies.length > 0"
      >
        <span
          class="my-tag"
          v-bind:class="tag.cl"
          v-for="tag in myProfile.hobbies"
          :key="tag.id"
        >
          {{ tag.content }}
        </span>
      </view>
      <view
        class="panel-body pd ft-cl-gray"
        v-if="!myProfile.hobbies || myProfile.hobbies.length == 0"
      >
        <text>点击填写兴趣爱好</text>
      </view>
    </view>
    <view class="panel">
      <view class="panel-head">
        <view class="panel-head-title">自我介绍</view>
      </view>
      <view class="panel-body pd">
        <view class="self-intro">
          <view class="info-title">
            <text>个人信息</text>
          </view>
          <view
            class="info-content"
            v-on:click="onEdit('selfInfo', myProfile.love.selfInfo)"
          >
            <text v-if="myProfile.love.selfInfo">{{
              myProfile.love.selfInfo
            }}</text>
            <text v-if="!myProfile.love.selfInfo">点击填写个人信息</text>
          </view>
        </view>
        <!-- <view class="self-intro">
          <view class="info-title">
            <text>性格爱好</text>
          </view>
          <view
            class="info-content"
            v-on:click="onEdit('hobbies', myProfile.love.interest)"
          >
            <text>{{ myProfile.love.interest }}</text>
          </view>
        </view> -->
        <view class="self-intro">
          <view class="info-title"> 家庭背景 </view>
          <view
            class="info-content"
            v-on:click="onEdit('family', myProfile.love.family)"
          >
            <text v-if="myProfile.love.family">{{
              myProfile.love.family
            }}</text>
            <text v-if="!myProfile.love.family">点击填写家庭背景</text>
          </view>
        </view>
        <view class="self-intro">
          <view class="info-title"> 期望的另一半 </view>
          <view
            class="info-content"
            v-on:click="onEdit('expected', myProfile.love.expected)"
          >
            <text v-if="myProfile.love.expected">{{
              myProfile.love.expected
            }}</text>
            <text v-if="!myProfile.love.expected">点击填写对另一半的期望</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myProfile",
  props: {
    myProfile: {},
  },
  data() {
    return {};
  },
  methods: {
    onEdit: function(key, value) {
      var url = `/pages/me/editor/index?key=${key}`;
      if (value != undefined) {
        url = `/pages/me/editor/index?key=${key}&value=${value}`;
      }
      console.log(url);
      uni.navigateTo({
        url: url,
      });
    },
    onEditTags: function(key, value) {
      var url = `/pages/me/tags/index?key=${key}`;
      uni.navigateTo({
        url: url,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data);
          },
          someEvent: function(data) {
            console.log(data);
          },
        },
        success: function(res) {
          console.log("success", res);
        },
        fail: function(res) {
          console.log("fail", res);
        },
      });
    },
    onEditImg: function() {
      uni.navigateTo({
        url: "/pages/me/gallery/index",
        events: {
          acceptDataFromOpenedPage: function(data) {
            console.log(data);
          },
          someEvent: function(data) {
            console.log(data);
          },
        },
        success: function(res) {
          console.log("success", res);
        },
        fail: function(res) {
          console.log("fail", res);
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  width: 100%;
}

.content .panel {
  margin-bottom: 10rpx;
  width: 98%;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}

.panel .panel-head {
  width: 100%;
  height: 100rpx;
  border-bottom: 1rpx #eee solid;
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  font-size: 35rpx;
}

.panel-head .panel-head-title {
  width: 90%;
  font-weight: bold;
}

.panel .panel-body {
  width: 100%;
  min-height: 100rpx;
}

.info-item {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: 5%;
  padding: 20rpx 10rpx;
  border-bottom: 1rpx #eee solid;
}

.info-item .info-item-title {
  width: 20%;
}

.info-item .info-item-value {
  width: 75%;
  text-align: right;
  color: gray;
}

.info-item .info-item-ops {
  width: 5%;
  text-align: right;
  color: gray;
}

.pd {
  padding: 20rpx 20rpx;
}

.self-intro {
  margin-bottom: 20rpx;
}

.self-intro .info-title {
  font-size: 30rpx;
  font-weight: bold;
}

.self-intro .info-content {
  color: gray;
  padding: 10rpx 5px;
  line-height: 40rpx;
  border-left: 10rpx #ddd solid;
  margin: 10rpx 0rpx;
}

.img-edit {
  display: flex;
}

.left {
  display: flex;
  width: 120rpx;
  align-items: center;
  padding-right: 20rpx;
  border-right: 1rpx #eee solid;
}

.left .img-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}

.right {
  display: flex;
  width: 530rpx;
  align-items: center;
}

.side {
  display: flex;
  width: 50rpx;
  align-items: center;
  color: gray;
}

.right .img-cover {
  display: flex;
  height: 100rpx;
  align-items: center;
  border-radius: 10rpx;
}

.right .img-cover image {
  width: 68rpx;
  height: 100rpx;
  border-radius: 10rpx;
}
.tips {
  padding: 20rpx 0rpx 20rpx 40rpx;
  background-color: white;
  margin-bottom: 10rpx;
  color: red;
  font-size: 25rpx;
}
</style>

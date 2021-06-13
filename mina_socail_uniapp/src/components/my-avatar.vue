<template>
<view class="content">
    <view class="my-avatar-list">
        <view class="my-avatar-box" v-for="avatar in avatarList" :key="avatar.id" v-on:click="onCardDetail(avatar.id)">
            <view class="my-avatar" :class="{'border-female': avatar.gender === 'female', 'border-male': avatar.gender === 'male'}">
                <image :src="avatar.url" mode="widthFix">
            </view>
            <view>
                <text>{{avatar.name}}</text>
            </view>
        </view>

    </view>

</view>
</template>

<script>
export default {
  name: "myAvatar",
  props: {
    // avatarList: {
    //   type: Array,
    //   value: [],
    // },
  },
  data() {
    return {
      avatarList: [
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "female",
        },
        {
          id: 10001,
          name: "阿泽啦",
          url: "/static/image/deshan.jpeg",
          gender: "female",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "male",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "female",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "male",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "male",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "male",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "female",
        },
        {
          id: 10001,
          name: "德善",
          url: "/static/image/deshan.jpeg",
          gender: "male",
        },
      ],
    };
  },
  methods: {
    onCardDetail(uid) {
      console.log(uid);
      uni.navigateTo({
        url: "/pages/social/detail/index",
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function (data) {
            console.log(data);
          },
          someEvent: function (data) {
            console.log(data);
          },
        },
        success: function (res) {
          console.log("success", res);
        },
        fail: function (res) {
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
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: center;
  font-size: 32rpx;
}

.my-avatar-list {
  width: 100%;
  padding: 20rpx;
}

.my-avatar-box {
  width: 124rpx;
  text-align: center;
  display: inline-block;
  margin-left: 30rpx;
  margin-bottom: 30rpx;
}

.my-avatar {
  width: 120rpx;
  height: 120rpx;
  overflow: hidden;
  border-radius: 10rpx;
  display: inline-block;
}

.my-avatar image {
  width: 120rpx;
  height: 120rpx;
}

.border-female {
  border: 6rpx rgb(251 124 192) solid;
}

.border-male {
  border: 6rpx rgb(97 212 255) solid;
}
</style>

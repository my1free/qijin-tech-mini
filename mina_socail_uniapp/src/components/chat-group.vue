<template>
<view class="content">
    <view class="my-group" v-for="(group, groupIdx) in groupList" :key="group.id">
        <view class="my-group-container">
            <view class="my-group-avatar">
                <view v-if="avatarList.length == 1">
                    <image class="my-group-image1" :src="avatarList[0]">
                </view>
                <view v-if="avatarList.length == 2">
                    <image class="my-group-image2" v-for="img in avatarList" v-bind:key="img" :src="img" />
                </view>
                <view v-if="avatarList.length == 3">
                    <image class="my-group-image3" v-for="img in avatarList" v-bind:key="img" :src="img" />
                </view>
                <view v-if="avatarList.length == 4">
                    <image class="my-group-image3" v-for="img in avatarList" v-bind:key="img" :src="img" />
                </view>
                <view v-if="avatarList.length == 5">
                    <image class="my-group-image5" v-for="img in avatarList" v-bind:key="img" :src="img" />
                </view>
                <view v-if="avatarList.length == 6">
                    <image class="my-group-image5" v-for="img in avatarList" v-bind:key="img" :src="img" />
                </view>
                <view v-if="avatarList.length >= 7">
                    <image class="my-group-image5" v-for="img in avatarList" v-bind:key="img" :src="img" />
                </view>
            </view>
            <view class="my-group-info">
                <view class="my-group-title">{{group.title}}</view>
                <view class="my-group-detail">{{group.description}}</view>
            </view>
        </view>
        <!-- <view style="margin-top:20rpx">
            <button type="success" @click="onAdd">增加</button>
            <button type="default" @click="onDel">减少</button>
        </view> -->
    </view>
</view>
</template>

<script>
export default {
  name: "myChatGroup",
  props: {
    // groupList: {
    //   type: Array,
    //   value: [
    //     {
    //       id: 10001,
    //       title: "南开单身俱乐部",
    //       description: "南开学子士大夫拉就拉水电费",
    //     },
    //     {
    //       id: 10001,
    //       title: "常春藤高校联盟",
    //       description: "常春藤阿斯蒂芬拉水电费",
    //     },
    //   ],
    // },
    msg: String,
  },
  data() {
    return {
      avatarList: [
        "/static/image/deshan.jpeg",
        "/static/image/aze.jpeg",
        "/static/image/baola.jpeg",
        "/static/image/deshan2.jpg",
        "/static/image/aze2.jpeg",
        "/static/image/aze3.jpeg",
        "/static/image/deshan3.jpg",
        "/static/image/baola2.jpeg",
        "/static/image/baola3.jpeg",
      ],
      groupList: [
        {
          id: 10001,
          title: "南开单身俱乐部",
          description: "南开学子士大夫拉就拉水电费",
        },
        {
          id: 10001,
          title: "常春藤高校联盟",
          description: "常春藤阿斯蒂芬拉水电费",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      if (this.avatarList.length >= 9) return;
      console.log("onAdd");
      this.avatarList.push("/static/image/deshan.jpeg");
    },
    onDel() {
      if (this.avatarList.length <= 1) return;
      this.avatarList.splice(0, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}

.my-group {
  width: 100%;
  height: 160rpx;
  border-radius: 10rpx;
  padding: 10rpx 30rpx;
}

.my-group .my-group-container {
  margin: 10rpx;
  display: flex;
  height: 100%;
  border-radius: 10rpx;
  box-shadow: 1px 1px 1px 1px #eee;
}

.my-group .my-group-avatar {
  width: 160rpx;
  height: 140rpx;
  background-color: #ddd;
  border-radius: 10rpx;
  padding: 2rpx 2rpx;
}

.my-group .my-group-info {
  width: 590rpx;
  height: 100%;
}

.my-group-avatar {
  display: flex;
  text-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.my-group-avatar image {
}

.my-group-image1 {
  width: 100rpx;
  height: 100rpx;
  border-radius: 5rpx;
  margin-top: 15rpx;
  border: 4rpx white solid;
}

.my-group-image2 {
  width: 58rpx;
  height: 58rpx;
  margin: 2rpx;
  border: 1rpx white solid;
  border-radius: 5rpx;
}

.my-group-image3 {
  width: 56rpx;
  height: 56rpx;
  border: 1rpx white solid;
  margin: 2rpx;
  border-radius: 5rpx;
}

.my-group-image5 {
  width: 38rpx;
  height: 38rpx;
  margin: 2rpx;
  border: 1rpx white solid;
  border-radius: 5rpx;
}

.my-group .my-group-title {
  font-size: 40rpx;
  padding-left: 30rpx;
}

.my-group .my-group-detail {
  color: gray;
  padding-left: 30rpx;
  font-size: 28rpx;
}
</style>

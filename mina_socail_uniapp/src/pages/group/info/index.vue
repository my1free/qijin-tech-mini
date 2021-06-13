<template>
  <view class="content">
    <view>
      <view
        style="
          font-size: 45rpx;
          padding: 12rpx;
          padding-left: 20rpx;
          padding-top: 20rpx;
        "
      >
        今日推荐 🎉🎉🎉
      </view>
      <my-card-swiper />
    </view>
    <view class="group-intro">
      <my-card
        title="北京校友俱乐部"
        content="出生山西省朔州市区，城市户口，工薪家庭，家中有一小妹从小勤勉，未有任何娇生惯养的恶习。母亲温暖，父亲严肃，都是通情达理之人，不世故，讲道理，识大体。"
      />
    </view>
    <view class="group-member">
      <view class="group-m-title">
        <uni-row class="demo-uni-row mm-title">
          <uni-col span="12">
            <text style="font-size: 34rpx; padding-top: 5rpx">
              群组成员 ({{ memberInfo.memberCount }})
            </text>
          </uni-col>
          <uni-col span="12">
            <text style="padding-top: 9rpx"
              >男({{ memberInfo.maleCount }})/女({{
                memberInfo.femaleCount
              }})</text
            >
          </uni-col>
        </uni-row>
      </view>
      <view class="group-m-detail">
        <my-avatar />
      </view>
    </view>
  </view>
</template>

<script>
import myCardSwiper from "@/components/card-swiper.vue";
import myCard from "@/components/my-card.vue";
import myAvatar from "@/components/my-avatar.vue";
export default {
  components: {
    myCardSwiper,
    myCard,
    myAvatar,
  },
  data() {
    return {
      memberInfo: {
        memberCount: 500,
        maleCount: 234,
        femaleCount: 266,
        memberList: [
          {
            id: 10001,
            name: "德善",
            avatar: "",
            sex: "F",
          },
          {
            id: 10002,
            name: "阿泽",
            avatar: "",
            sex: "M",
          },
          {
            id: 10003,
            name: "宝拉",
            avatar: "",
            sex: "F",
          },
        ],
      },
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.my-group {
  width: 100%;
}

.group-intro {
  width: 96%;
  margin-top: 20rpx;
}

.group-member {
  width: 94%;
  margin-top: 20rpx;
  margin-bottom: 60rpx;
}

.group-m-title {
  color: black;
  border-top: 6rpx #eee solid;
  border-radius: 19rpx;
  padding-top: 15rpx;
}
</style>

<template>
  <view class="content">
    <view class="card-list">
      <image
        class="card"
        src="/static/image/deshan.jpeg"
        mode="heightFix"
      ></image>
      <view class="info-area">
        <uni-row class="demo-uni-row">
          <text class="name">{{ name }}</text>
          <image class="seximg mg-l-20rpx" src="/static/image/sexw.png"></image>
          <text class="mg-l-20rpx"
            >{{ sex }}/{{ age }}/{{ constellation }}</text
          >
        </uni-row>
        <uni-row class="demo-uni-row">
          <uni-col :span="12">
            <text>籍贯: {{ born }}</text>
          </uni-col>
          <uni-col :span="12">
            <text>现居地: {{ city }}</text>
          </uni-col>
        </uni-row>
        <uni-row class="demo-uni-row">
          <uni-col :span="12">
            <text>{{ edu }}</text>
            <text class="mg-l-15rpx">{{ degree }}</text>
          </uni-col>
          <uni-col :span="12">
            <text>工作: {{ job }}</text>
          </uni-col>
        </uni-row>
        <view class="thumbnail-list">
          <view
            class="thumbnail"
            v-for="thumbnail in thumbnails"
            :key="thumbnail.url"
          >
            <image :src="thumbnail.url" mode="widthFix"></image>
          </view>
          <text class="mg-l-20rpx">{{ currIdx }}/{{ total }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
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

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

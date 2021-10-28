<template>
  <view class="content">
    <view class="feed">
      <view class="head">
        <view class="left">
          <view class="avatar">
            <image :src="item.user.avatar"></image>
          </view>
          <view class="name-info">
            <view class="name">
              <text>{{ item.user.name }}</text>
              <span class="gender-female mg-l-10">
                <u-icon name="woman"></u-icon>
              </span>
            </view>
            <view class="info">
              18岁，北京，首尔大学
            </view>
          </view>
        </view>
        <view class="right">...</view>
      </view>
      <view class="main">
        <view class="text-area" v-if="item.content && item.content.text">
          <text>{{ item.content.text }}</text>
        </view>
        <view class="image-area" v-if="item.content && item.content.images">
          <view class="images" v-if="item.content.images.length > 1">
            <view v-for="(image, idx) in item.content.images" :key="image">
              <image
                :src="image"
                mode="aspectFill"
                v-on:click="onPreview(item.content.images, idx)"
              ></image>
            </view>
          </view>
          <view class="image" v-if="item.content.images.length == 1">
            <view v-for="image in item.content.images" :key="image">
              <image
                :src="image"
                mode="aspectFit"
                v-on:click="onPreview(item.content.images, idx)"
              ></image>
            </view>
          </view>
        </view>
      </view>
      <view class="topic">
        <view class="topic-item">
          <u-icon name="tags"></u-icon>
          <text># 新人报道</text>
        </view>
      </view>
      <view class="interactive">
        <view class="operation">
          <uni-row class="demo-uni-row">
            <uni-col :span="12">
              <span class="time"><text>1小时前</text></span>
            </uni-col>
            <uni-col :span="6">
              <view class="comments-count">
                <u-icon name="chat-fill"></u-icon>
                <text>10</text>
              </view>
            </uni-col>
            <uni-col :span="6">
              <view class="thumb-count">
                <u-icon name="thumb-up-fill"></u-icon>
                <text>{{ item.likeCount }}</text>
              </view>
            </uni-col>
          </uni-row>
        </view>
        <view class="like" v-if="item.likeList">
          <view>
            <u-icon name="thumb-up"></u-icon>
            <text class="mg-l-10">{{ item.likeCount }}</text>
          </view>
          <view class="like-user">
            <view v-for="like in item.likeList" :key="like.id">
              <image :src="like.avatar"></image>
            </view>
          </view>
        </view>
        <view class="comments-count2">
          评论<text>{{ item.commentCount }}</text>
        </view>
        <view class="comments" v-if="item.commentList">
          <view
            class="comment"
            v-for="comment in item.commentList"
            :key="comment.id"
          >
            <view class="avatar">
              <image :src="comment.fromUser.avatar"></image>
            </view>
            <view class="name-comment">
              <view class="name-info">
                <view class="name">
                  {{ comment.fromUser.name }}
                  <span class="gender-female mg-l-10">
                    <u-icon name="woman"></u-icon>
                  </span>
                </view>
                <view class="info">北京</view>
              </view>
              <view class="comment-content">{{ comment.text }}</view>
              <view class="time">1 小时前</view>
              <view class="reply"></view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "FeedDetail",
  props: {
    item: {},
  },
  data() {
    return {};
  },
  methods: {
    onPreview(urls, idx) {
      uni.previewImage({
        current: idx,
        urls: urls,
        longPressActions: {
          itemList: ["发送给朋友", "保存图片", "收藏"],
          success: function(data) {
            console.log(
              "选中了第" +
                (data.tapIndex + 1) +
                "个按钮,第" +
                (data.index + 1) +
                "张图片"
            );
          },
          fail: function(err) {
            console.log(err.errMsg);
          },
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
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  margin-bottom: 20rpx;
}

.feed {
  width: 94%;
  border-radius: 10rpx;
  padding: 20rpx;
  background-color: white;
}

.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.head .left {
  width: 90%;
  display: flex;
  flex-direction: row;
}

.head .left .name-info {
  padding-left: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.head .left .name {
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.head .left .info {
  color: gray;
  font-size: 26rpx;
  margin-top: 10rpx;
}

.head .left image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}

.head .right {
  width: 10%;
}

.main {
  margin-top: 40rpx;
}

.main .images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20rpx;
}

.main .images image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
}
.main .images:after {
  content: "";
  width: 200rpx;
}

.main .image {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  text-align: left;
  margin-top: 20rpx;
}

.main .image image {
  width: 400rpx;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
}
.topic {
  margin: 40rpx 0rpx;
}
.topic .topic-item {
  display: inline;
  border-radius: 20rpx;
  padding: 10rpx 20rpx;
  background-color: #fbe3d7;
  color: #d43100;
}
.topic .topic-item text {
  margin-left: 10rpx;
}
.interactive {
  margin-top: 40rpx;
}
.interactive .operation .time {
  color: gray;
  font-size: 26rpx;
  padding-left: 10rpx;
}
.interactive .comments-count {
  text-align: right;
}
.interactive .comments-count > u-icon {
  font-size: 38rpx;
}
.interactive .comments-count > text {
  margin-left: 10rpx;
}
.interactive .thumb-count {
  text-align: right;
  padding-right: 20%;
}
.interactive .thumb-count > u-icon {
  font-size: 38rpx;
}
.interactive .thumb-count > text {
  margin-left: 10rpx;
}

.interactive .like {
  display: flex;
  flex-direction: column;
  color: #d43100;
  background-color: #eee;
  padding: 20rpx 40rpx;
  border-radius: 10rpx;
}

.interactive .comments-count2 {
  margin-top: 20rpx;
  font-weight: bold;
}

.interactive .comments-count2 > text {
  margin-left: 10rpx;
}

.interactive .like .like-user {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20rpx;
}

.interactive .like image {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  border: 2rpx white solid;
  margin-right: 10rpx;
}
.interactive .comments {
  font-size: 30rpx;
  line-height: 140%;
  padding: 20rpx;
}
.interactive .comments .comment {
  padding: 5rpx;
  display: flex;
  flex-direction: row;
  margin-bottom: 40rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx #eee solid;
}
.interactive .comments .comment .comment-user {
  color: #02a6e4;
}
.interactive .comments .comment .comment-content {
  margin-top: 20rpx;
}

.interactive .comments .comment .time {
  margin-top: 20rpx;
  color: gray;
  font-size: 26rpx;
}

.interactive .comments .comment image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  border: 2rpx white solid;
  margin: 0rpx 10rpx;
}
.interactive .comments .comment-more {
  color: #02a6e4;
}

.interactive .comments .name-comment {
  margin-left: 10rpx;
}

.interactive .comments .name-comment {
}

.interactive .comments .name-comment .name {
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.interactive .comments .info {
  color: gray;
  font-size: 26rpx;
  /* margin-top: 5rpx; */
}
</style>

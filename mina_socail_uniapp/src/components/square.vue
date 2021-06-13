<template>
  <view class="content">
    <view class="my-square-list">
      <view
        class="my-square-item"
        v-for="(item, itemIdx) in itemList"
        :key="item.id"
      >
        <uni-row class="demo-uni-row">
          <uni-col :span="kind === '' ? 4 : 0">
            <!-- 头像区域 -->
            <image
              class="my-square-avatar"
              :src="item.user.avatar"
              v-on:click="onCardDetail(item.user.id)"
            ></image>
          </uni-col>
          <uni-col :span="kind === '' ? 20 : 24">
            <!-- 内容区域 -->
            <view class="my-square-title">
              <uni-row class="demo-uni-row">
                <uni-col :span="12" v-if="kind === ''">
                  <text
                    class="my-square-name"
                    v-on:click="onCardDetail(item.user.id)"
                    >{{ item.user.name }}
                  </text>
                </uni-col>
                <uni-col :span="12">
                  <text class="my-square-date">2020-04-11 12:33</text>
                </uni-col>
                <uni-col :span="4" :offset="8" v-if="kind === 'me'">
                  <text class="cuIcon-delete my-square-del"></text>
                </uni-col>
              </uni-row>
            </view>
            <view class="my-square-content">
              <view class="my-square-text">
                <text>{{ item.content.text }} </text>
              </view>
              <view>
                <view
                  class="my-square-image-multi"
                  v-on:click="onPreview(0, item.content.urls)"
                  v-if="
                    item.content.type === 'image' &&
                    item.content.urls.length == 1
                  "
                >
                  <image
                    class="my-square-image"
                    :src="item.content.urls[0]"
                    mode="widthFix"
                  ></image>
                </view>
                <view
                  v-if="
                    item.content.type === 'image' &&
                    item.content.urls.length > 1
                  "
                >
                  <view
                    v-on:click="onPreview(idx, item.content.urls)"
                    v-for="(url, idx) in item.content.urls"
                    :key="url"
                    class="my-square-image-thumbnail"
                  >
                    <image :src="url" mode="widthFix"></image>
                  </view>
                </view>
                <view v-if="item.content.type === 'video'">
                  <image
                    class="my-square-image"
                    :src="item.content.url"
                  ></image>
                </view>
              </view>
            </view>
            <view class="my-square-btn">
              <!-- 点赞、评论按钮区域 -->

              <text
                :class="{
                  'cuIcon-like': !item.hasLiked,
                  'cuIcon-likefill': item.hasLiked,
                  'text-red': item.hasLiked,
                }"
                v-on:click="onLike(itemIdx)"
              ></text>
              <text class="number">{{
                item.likeList ? item.likeList.length : 0
              }}</text>
              <!-- <text class="cuIcon-likefill"></text> -->
              <text
                class="cuIcon-comment"
                v-on:click="onComment(itemIdx)"
              ></text>
              <text class="number">{{
                item.commentList ? item.commentList.length : 0
              }}</text>
            </view>
            <view class="my-square-like" v-if="item.likeList.length > 0">
              <!-- 点赞展示区域 -->
              <text class="cuIcon-like"></text>
              <span
                class="my-square-like-item"
                v-for="(like, likeIdx) in item.likeList"
                :key="like.uid"
                v-on:click="onLikeTab(itemIdx, likeIdx)"
              >
                <!-- v-on:remove="item.likeList.splice(likeIdx, 1)" -->
                <text>{{ like.name }}</text>
                <text v-if="likeIdx < item.likeList.length - 1">,</text>
              </span>
            </view>
            <view class="my-square-comments" v-if="item.commentList.length > 0">
              <!-- 评论展示区域 -->
              <view
                class="my-square-comments-line"
                v-for="(comment, commentIdx) in item.commentList"
                :key="comment.id"
                @click="onCommentLineTab(itemIdx, commentIdx, $event)"
              >
                <span class="my-square-comments-name">{{
                  comment.fromUser.name
                }}</span>
                <span v-if="comment.toUser">回复</span>
                <span class="my-square-comments-name" v-if="comment.toUser">{{
                  comment.toUser.name
                }}</span>
                <text>:</text>
                <span class="mg-l-5rpx">{{ comment.text }}</span>
              </view>
            </view>
            <view class="my-square-comment-input" v-if="item.doInput">
              <textarea
                class="uni-input"
                focus="auto"
                auto-height="true"
                @blur="closeKeyboard"
                @confirm="confirmComment"
              />
            </view>
          </uni-col>
        </uni-row>
      </view>
    </view>
    <my-img-preview
      :defaultIdx="previewIdx"
      :previewList="previewList"
      v-bind:show.sync="showPreview"
    />
  </view>
</template>

<script>
import myImgPreview from "./img-preview.vue";
export default {
  name: "mySquare",
  components: { myImgPreview },
  props: {
    itemList: {
      type: Array,
      value: [],
    },
    kind: {
      type: String,
      value: "",
    },
  },
  data() {
    return {
      me: {
        uid: 10000,
        name: "micheal",
      },
      currItemIdx: 0,
      previewList: [
        "/static/image/deshan2.jpg",
        "/static/image/deshan3.jpg",
        "/static/image/aze.jpeg",
        "/static/image/aze2.jpeg",
      ],
      previewIdx: 0,
      opShow: false,
      showPreview: false,
    };
  },
  onLoad() {},
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },
  methods: {
    open(mode) {
      this.show = !this.show;
    },
    change() {
      console.log("触发动画");
    },
    onPreview(idx, urls) {
      console.log("preview", idx, urls);
      this.previewIdx = idx;
      this.previewList = urls;
      this.showPreview = true;
    },
    onLikeTab(itemIdx, likeIdx) {
      console.log("onLikeTab", itemIdx, likeIdx);
    },
    onCommentLineTab(itemIdx, commentIdx, e) {
      console.log("onCommentLineTab", itemIdx, commentIdx);
      console.log("onCommentLineTab", e.detail);

      let fromUser = this.itemList[itemIdx].commentList[commentIdx].fromUser;
      if (fromUser.uid == this.me.uid) {
        this.opShow = true;
        return;
      }
      console.log("onCommentLineTab", fromUser);
      this.currFromUser = fromUser;
      this.currItemIdx = itemIdx;
      this.itemList[itemIdx].doInput = true;
    },
    onLike(itemIdx) {
      let likeList = this.itemList[itemIdx].likeList;
      if (likeList == null) {
        likeList = [];
      }
      console.log("onLike", itemIdx, this.itemList[itemIdx].hasLiked);
      if (this.itemList[itemIdx].hasLiked) {
        // 如果已经存在了，则需要删除
        let me = this.me;
        var flist = likeList.filter(function (like) {
          return like.uid != me.uid;
        });
        this.itemList[itemIdx].likeList = flist;
      } else {
        // 如果没有存在，则需要加入
        if (likeList.length == 0) {
          likeList.push(this.me);
          this.itemList[itemIdx].likeList = likeList;
        } else {
          likeList.push(this.me);
        }
      }
      this.itemList[itemIdx].hasLiked = !this.itemList[itemIdx].hasLiked;
    },
    onComment(itemIdx) {
      this.itemList[itemIdx].doInput = true;
      this.currItemIdx = itemIdx;
    },
    closeKeyboard(e) {
      this.itemList[this.currItemIdx].doInput = false;
      // clear
      this.currFromUser = null;
    },
    confirmComment(e) {
      let itemIdx = this.currItemIdx;
      this.itemList[itemIdx].doInput = false;
      let textContent = e.detail.value;
      let commentList = this.itemList[itemIdx].commentList;
      let newComment = {
        id: this.me.uid,
        fromUser: {
          uid: this.me.uid,
          name: this.me.name,
        },
        text: textContent,
      };
      if (this.currFromUser != null) {
        newComment.toUser = this.currFromUser;
      }
      if (commentList == null) {
        console.log("null");
        commentList = [];
        commentList.push(newComment);
        this.itemList[itemIdx].commentList = commentList;
      } else {
        this.itemList[itemIdx].commentList.push(newComment);
      }
      // clear
      this.currFromUser = null;
    },
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

<style scoped>
@import "/static/css/my-ui.css";
@import "/static/css/common.css";

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}

.my-square-list {
  width: 100%;
  margin-top: 20rpx;
}

.my-square-list .my-square-item {
  width: 91%;
  margin-left: 4%;
  border-bottom: 1rpx #eee solid;
  margin-bottom: 20rpx;
}

.my-square-list .my-square-avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 10%;
}

.my-square-item .my-square-title {
  height: 48rpx;
}

.my-square-item .my-square-name {
  display: flex;
  color: steelblue;
  font-size: 36rpx;
  padding: 10rpx 10rpx;
}

.my-square-item .my-square-date {
  text-align: right;
  color: grey;
  margin-top: 12rpx;
  display: inline-block;
}
.my-square-item .my-square-content {
  padding: 30rpx 20rpx;
}

.my-square-item .my-square-text {
  margin-bottom: 10rpx;
}

.my-square-item .my-square-image-multi {
  width: 100%;
}
.my-square-item .my-square-image-thumbnail {
  width: 30%;
  height: 200rpx;
  display: inline-block;
  overflow: hidden;
  height: 173rpx;
  margin-left: 1%;
  border-radius: 10rpx;
}
.my-square-item .my-square-image-thumbnail image {
  width: 100%;
}

.my-square-item .my-square-image {
  width: 100%;
  overflow: hidden;
  border-radius: 20rpx;
}

.my-square-list .my-square-btn {
  font-size: 40rpx;
}

.my-square-list .my-square-btn text {
  margin-left: 20rpx;
}

.my-square-list .my-square-btn .number {
  font-size: 20rpx;
  margin-left: 5rpx;
  margin-right: 30rpx;
}

.my-square-list .my-square-like {
  margin-top: 10rpx;
  background-color: #eee;
  padding: 5rpx 15rpx;
}

.my-square-list .my-square-like text {
  color: darkcyan;
}

.my-square-list .my-square-like .text-red {
  color: #e54d42;
}

.my-square-list .my-square-like .my-square-like-item {
  margin-left: 18rpx;
}

.my-square-list .my-square-comments {
  background-color: #eee;
}

.my-square-list .my-square-comments-line {
  padding: 5rpx 10rpx;
}
.my-square-list .my-square-comments-line .my-square-comments-name {
  color: darkcyan;
}

.my-square-list .my-square-comments-line:active {
  background-color: #ccc;
}

.my-square-list .my-square-comment-input {
  border: 10rpx#eee solid;
}

.my-floating-op-container {
  position: fixed;
  top: 0rpx;
  left: 0rpx;
}
.my-floating-op {
  width: 120px;
  height: 25px;
  position: relative;
  margin: 30px auto 0;
  background: #131210;
  border-radius: 5px;
  color: rgb(218, 218, 218);
  text-align: center;
}
.my-floating-op:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 23px;
  right: 50px;
  border: solid 8px;
  border-color: #131210 transparent transparent transparent;
  font-size: 0;
}

.my-square-del {
  color: rgb(161, 2, 2);
  margin-top: 12rpx;
  display: inline-block;
}
</style>

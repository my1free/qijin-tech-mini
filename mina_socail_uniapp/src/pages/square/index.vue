<template>
  <view class="content" v-bind:class="{ 'fix-full': isPreview }">
    <view class="my-square-list">
      <view
        class="my-square-item"
        v-for="(item, itemIdx) in itemList"
        :key="item.id"
      >
        <uni-row class="demo-uni-row">
          <uni-col :span="4">
            <!-- 头像区域 -->
            <image class="my-square-avatar" :src="item.user.avatar"></image>
          </uni-col>
          <uni-col :span="20">
            <!-- 内容区域 -->
            <view class="my-square-title">
              <uni-row class="demo-uni-row">
                <uni-col :span="12">
                  <text class="my-square-name">{{ item.user.name }} </text>
                </uni-col>
                <uni-col :span="12">
                  <text class="my-square-date">2020-04-11 12:33</text>
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
    <!-- <view class="my-floating-op-container">
      <view class="my-floating-op">
        <uni-row class="demo-uni-row">
          <uni-col :span="12"> 修改 </uni-col>
          <uni-col :span="12"> 删除 </uni-col>
        </uni-row>
      </view>
    </view> -->

    <view class="my-image-preview" v-bind:class="{ hide: !isPreview }">
      <uni-swiper-dot
        :info="previewList"
        :current="previewIdx"
        field="content"
        mode="round"
        :dotsStyles="dotsStyles"
      >
        <swiper
          class="swiper-box preview-list"
          :duration="500"
          @change="onPreviewSwiperChange"
          :current="previewIdx"
        >
          <swiper-item v-for="preview in previewList" :key="preview">
            <view class="preview">
              <image :src="preview" mode="widthFix"></image>
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
      <view class="preview-close" v-on:click="onPreviewClose()"> x </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      me: {
        uid: 10000,
        name: "micheal",
      },
      currItemIdx: 0,
      currFromUser: null,
      //   dotsStyles: getApp().globalData.dotsStyles,
      isPreview: false,
      dotsStyles: {
        backgroundColor: "rgba(200, 200, 200, .3)",
        border: "1px rgba(0, 0, 0, .3) solid",
        selectedBackgroundColor: "#fff",
        selectedBorder: "1px rgba(0, 0, 0, .9) solid",
      },
      itemList: [
        {
          id: 20000002,
          user: {
            id: 10001,
            name: "德善",
            avatar: "/static/image/deshan.jpeg",
          },
          content: {
            type: "text",
            text:
              "每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n",
          },
          hasLiked: false,
          doInput: false,
          likeList: [
            {
              uid: 10002,
              name: "阿泽",
            },
            {
              uid: 10004,
              name: "狗焕",
            },
            {
              uid: 10005,
              name: "娃娃鱼",
            },
          ],
          commentList: [
            {
              id: 40000001,
              fromUser: {
                uid: 10002,
                name: "阿泽",
              },
              text: "我亲爱的德善",
            },
            {
              id: 40000002,
              fromUser: {
                uid: 10005,
                name: "娃娃鱼",
              },
              toUser: {
                uid: 10002,
                name: "阿泽",
              },
              text: "能不能不要这么恶心",
            },
            {
              id: 40000003,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "藏起来~~",
            },
            {
              id: 40000004,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "阿萨德富兰克林水电费尽量少打飞机",
            },
            {
              id: 40000005,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text:
                "阿士大夫撒旦法 撒打飞机拉双方均对拉丝解放路撒 发苏打绿发撒拉发动机",
            },
            {
              id: 40000006,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "仨",
            },
            {
              id: 40000007,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "藏起来~~",
            },
          ],
        },
        {
          id: 20000003,
          user: {
            id: 10002,
            name: "阿泽",
            avatar: "/static/image/aze.jpeg",
          },
          content: {
            type: "image",
            text: "第一个动态",
            urls: [
              "/static/image/deshan2.jpg",
              "/static/image/deshan3.jpg",
              "/static/image/aze.jpeg",
              "/static/image/aze2.jpeg",
            ],
          },
          doInput: false,
          hasLiked: false,
        },
        {
          id: 20000004,
          user: {
            id: 10003,
            name: "宝拉",
            avatar: "/static/image/baola.jpeg",
          },
          content: {
            type: "image",
            text: "每天都要元气满满",
            urls: ["/static/image/baola3.jpeg"],
          },
          doInput: false,
          hasLiked: false,
        },
      ],
      previewList: [
        "/static/image/deshan2.jpg",
        "/static/image/deshan3.jpg",
        "/static/image/aze.jpeg",
        "/static/image/aze2.jpeg",
      ],
      previewIdx: 0,
      show: false,
      opShow: false,
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
    onPreviewSwiperChange(e) {
      this.previewIdx = e.detail.current;
    },
    onPreview(idx, urls) {
      console.log("preview", idx, urls);
      this.previewIdx = idx;
      this.previewList = urls;
      this.isPreview = true;
    },
    onPreviewClose() {
      console.log("close");
      this.isPreview = false;
      this.previewList = [];
      this.previewIdx = 0;
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
  },
};
</script>

<style>
@import "/static/css/square.css";
@import "/static/css/my-ui.css";
@import "/static/css/common.css";

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}

.preview:hover {
  -webkit-transition: width 2s, height 2s, background-color 2s,
    -webkit-transform 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}
</style>

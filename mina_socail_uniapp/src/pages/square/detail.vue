<template>
  <view class="content">
    <view class="item">
      <feed-detail :item="feedItem"></feed-detail>
    </view>
  </view>
</template>

<script>
import FeedDetail from "@/components/feed-detail.vue";
export default {
  components: {
    FeedDetail,
  },
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
      feedItem: {
        id: 20000002,
        user: {
          id: 10001,
          name: "德善",
          avatar:
            "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
        },
        content: {
          type: "text",
          text:
            "我主动打招呼，快12个小时才回，第一句就莫名其妙加个😐，问是什么意思又不说话了，是不是可以直接拉黑了",
          // "每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n",
        },
        hasLiked: false,
        doInput: false,
        likeList: [
          {
            uid: 10002,
            avatar:
              "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
            name: "阿泽",
          },
          {
            uid: 10004,
            avatar:
              "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
            name: "狗焕",
          },
          {
            uid: 10005,
            avatar:
              "http://img.qijin.tech/1904DB5uJz009a56520fb877d20934063a15c0340f02.png",
            name: "娃娃鱼",
          },
        ],
        likeCount: 32,
        commentCount: 40,
        commentList: [
          {
            id: 40000001,
            fromUser: {
              uid: 10002,
              avatar:
                "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
              name: "阿泽",
            },
            text: "我亲爱的德善",
          },
          {
            id: 40000002,
            fromUser: {
              uid: 10005,
              avatar:
                "http://img.qijin.tech/1904DB5uJz009a56520fb877d20934063a15c0340f02.png",
              name: "娃娃鱼",
            },
            toUser: {
              uid: 10002,
              avatar:
                "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
              name: "阿泽",
            },
            text: "能不能不要这么恶心",
          },
          {
            id: 40000003,
            fromUser: {
              uid: 10004,
              avatar:
                "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
              name: "狗焕",
            },
            text: "藏起来~~",
          },
          {
            id: 40000004,
            fromUser: {
              uid: 10004,
              avatar:
                "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
              name: "狗焕",
            },
            text: "阿萨德富兰克林水电费尽量少打飞机",
          },
          {
            id: 40000005,
            fromUser: {
              uid: 10004,
              avatar:
                "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
              name: "狗焕",
            },
            text:
              "阿士大夫撒旦法 撒打飞机拉双方均对拉丝解放路撒 发苏打绿发撒拉发动机",
          },
          {
            id: 40000006,
            fromUser: {
              uid: 10004,
              avatar:
                "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
              name: "狗焕",
            },
            text: "仨",
          },
          {
            id: 40000007,
            fromUser: {
              uid: 10004,
              avatar:
                "http://img.qijin.tech/STfnOXeRhE2L939e55e15a4be7339f5d3c0b7d1cd432.png",
              name: "狗焕",
            },
            text: "藏起来~~",
          },
        ],
      },
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
        var flist = likeList.filter(function(like) {
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

<style>
@import "/static/css/square.css";
@import "/static/css/my-ui.css";
@import "/static/css/common.css";
page {
  background-color: #eeeeee;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
}
.item {
  width: 100%;
}
</style>

<template>
  <view class="content">
    <view class="width100" v-bind:class="{ blur: withNoGroup }">
      <view class="card-bg" v-if="cards == null || cards.length <= 0">
        <uni-load-more
          :status="loadingStatus"
          class="card-load"
        ></uni-load-more>
      </view>
      <swiper
        class="swiper card-list"
        :duration="500"
        @change="onCardSwiperChange"
        v-if="cards.length > 0"
      >
        <swiper-item v-for="card in cards" :key="card.userId">
          <view class="card" v-on:click="onCardDetail(card.userId)">
            <image class="cover" :src="card.cover" mode="heightFix"></image>
            <view class="info-area">
              <uni-row class="demo-uni-row">
                <view class="info-head">
                  <view class="name">
                    <text>{{ card.profile.name }}</text>
                  </view>
                  <view class="gender">
                    <image
                      v-if="card.profile.gender === 'FEMALE'"
                      class="seximg mg-l-20rpx"
                      src="/static/image/sexw.png"
                    ></image>
                    <image
                      v-if="card.profile.gender === 'MALE'"
                      class="seximg mg-l-20rpx"
                      src="/static/image/sexm.png"
                    ></image>
                  </view>
                  <view class="birthday">
                    <text class="mg-l-20rpx sub-info">
                      {{ card.profile.gender === "FEMALE" ? "女" : "男" }}/{{
                        card.profile.birthday
                      }}年/{{ card.profile.constellation }}
                    </text>
                  </view>
                </view>
              </uni-row>
              <uni-row class="demo-uni-row">
                <uni-col :span="16">
                  <text>
                    籍贯:&nbsp;{{
                      card.profile.bornCity ? card.profile.bornCity : "未知"
                    }}
                  </text>
                </uni-col>
                <uni-col :span="8">
                  <text>
                    身高:&nbsp;{{
                      card.profile.height ? card.profile.height : 0
                    }}&nbsp;cm
                  </text>
                </uni-col>
              </uni-row>
              <uni-row class="demo-uni-row">
                <uni-col :span="16">
                  <text>
                    学校:&nbsp;{{
                      card.profile.edu ? card.profile.edu : "未知"
                    }}
                  </text>
                  <text class="mg-l-15rpx">
                    {{ card.profile.eduDegree ? card.profile.eduDegree : "" }}
                  </text>
                </uni-col>
                <uni-col :span="8">
                  <text>
                    工作:&nbsp;{{
                      card.profile.job ? card.profile.job : "未知"
                    }}
                  </text>
                </uni-col>
              </uni-row>
              <view class="thumbnail-list">
                <view
                  class="thumbnail"
                  v-for="(image, idx) in card.images"
                  :key="image.id"
                  @click.stop="onClickThumbnail(idx, image)"
                  v-bind:class="{
                    selected: image.selected,
                    unselected: !image.selected,
                  }"
                >
                  <image :src="image.url" mode="heightFix"></image>
                </view>
                <text class="mg-l-20rpx"
                  >{{ card.currThumbnailIdx + 1 }}/{{
                    card.images.length
                  }}</text
                >
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="mask" v-if="withNoGroup">
      <view class="auth-tips">
        <text>你还不是群成员，没有权限查看</text>
      </view>
      <button type="warn" @click="applyGroup">点击申请入群</button>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data() {
    return {
      withNoGroup: false,
      cards: [],
      loadingStatus: "noMore",
      currCardIdx: 0,
      swiperOption: {
        //这里配置的参数参考官网API设置，这里的pagination就是下图中的官方配置
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },

  onLoad() {
    // api.login();
    api.listCard().then((res) => {
      console.log("listCards=", res);
      var cards = res.cards;
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.images[0].selected = true;
        // TODO default cover
        card.cover = card.images[0].url;
        card.currThumbnailIdx = 0;
      }
      this.cards = cards;
      this.withNoGroup = res.withNoGroup;
    });
  },
  methods: {
    onCardDetail(userId) {
      uni.navigateTo({
        url: "./detail/index?userId=" + userId,
      });
    },
    onCardSwiperChange(e) {
      this.currCardIdx = e.detail.current;
      console.log(this.currCardIdx);
    },
    onClickThumbnail(idx, image) {
      var currCard = this.cards[this.currCardIdx];
      currCard.cover = image.url;
      currCard.images[currCard.currThumbnailIdx].selected = false;
      currCard.currThumbnailIdx = idx;
      currCard.images[idx].selected = true;
    },
    applyGroup() {
      uni.navigateTo({
        url: "/pages/group/join/index?groupId=1",
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  width: 750rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content .header {
  width: 90%;
  height: 5vh;
  padding-top: 2rpx;
  vertical-align: bottom;
  overflow: hidden;
  padding-top: 14rpx;
}

.content .header .location {
  font-size: 26rpx;
  padding-top: 6rpx;
}

.content .card-list {
  width: 96%;
  height: 100vh;
  text-align: center;
  position: relative;
  border-radius: 10rpx;
  overflow: hidden;
}

.content .card-list .card {
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 10rpx;
  overflow: hidden;
}

.content .card-list .card .cover {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}

.content .card-list .info-area {
  position: absolute;
  width: 95%;
  height: 300rpx;
  padding-left: 5%;
  justify-content: center;
  bottom: 20rpx;
  color: white;
  text-align: left;
  text-shadow: 0 0 0.1em #000, 0 0 0.1em #000;
}

.info-area .info-head {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.info-area .name {
  text-align: left;
  font-size: 50rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300rpx;
}

.info-area .seximg {
  width: 28rpx;
  height: 28rpx;
}

.info-area .uni-row {
  margin-bottom: 2px;
}

.info-area .thumbnail-list {
  width: 95%;
  display: flex;
  align-items: flex-end;
}

.info-area .thumbnail-list .thumbnail {
  display: inline-block;
  vertical-align: top;
  height: 100rpx;
  width: 80rpx;
  margin-top: 10rpx;
  margin-right: 12rpx;
  border-radius: 10rpx;
  overflow: hidden;
  text-align: center;
  background-color: white;
}

.info-area .thumbnail-list .selected {
  border: white 7rpx solid;
}

.info-area .thumbnail-list .unselected {
  border: #ccc 7rpx solid;
}

.info-area .thumbnail-list .thumbnail image {
  width: 63rpx;
  height: 100rpx;
}

.card-bg {
  width: 100%;
  height: 100vh;
  padding-top: 20%;
}
.sub-info {
  font-size: 30rpx;
}

/* image {
  filter: blur(10px);
} */
.mask {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auth-tips {
  width: 600rpx;
  height: 100rpx;
  color: white;
  border-radius: 10rpx;
  font-size: 30rpx;
  background-color: #e64340;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40rpx;
}
</style>

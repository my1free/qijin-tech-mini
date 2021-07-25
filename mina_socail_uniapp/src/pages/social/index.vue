<template>
  <view class="content">
    <view class="card-bg" v-if="cards == null || cards.length <= 0">
      <uni-load-more :status="loadingStatus" class="card-load"></uni-load-more>
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
              <text class="name">{{ card.profile.name }}</text>
              <image
                class="seximg mg-l-20rpx"
                src="/static/image/sexw.png"
              ></image>
              <text class="mg-l-20rpx"
                >{{ card.profile.gender === "FEMALE" ? "女" : "男" }}/{{
                  card.profile.age
                }}/{{ card.profile.constellation }}</text
              >
            </uni-row>
            <uni-row class="demo-uni-row">
              <uni-col :span="16">
                <text>籍贯: {{ card.profile.bornCity }}</text>
              </uni-col>
              <uni-col :span="8">
                <text>现居地: {{ card.profile.liveCity }}</text>
              </uni-col>
            </uni-row>
            <uni-row class="demo-uni-row">
              <uni-col :span="16">
                <text>学校: {{ card.profile.edu }}</text>
                <text class="mg-l-15rpx">{{ card.profile.eduDegree }}</text>
              </uni-col>
              <uni-col :span="8">
                <text>工作: {{ card.profile.job }}</text>
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
                >{{ card.currThumbnailIdx + 1 }}/{{ card.images.length }}</text
              >
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  data() {
    return {
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
      console.log("listCard=", res);
      var cards = res.cards;
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.images[0].selected = true;
        // TODO default cover
        card.cover = card.images[0].url;
        card.currThumbnailIdx = 0;
      }
      this.cards = cards;
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

.info-area .name {
  width: 100%;
  text-align: left;
  font-size: 50rpx;
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
</style>

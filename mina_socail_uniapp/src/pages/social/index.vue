<template>
  <view class="content">
    <view class="header">
      <uni-row class="demo-uni-row">
        <uni-col :span="6">
          <text>筛选</text>
          <uni-icons type="arrowdown" size="16" class="pd-l-5rpx"></uni-icons>
        </uni-col>
        <uni-col :span="8">
          <view class="location">
            <uni-icons
              type="location-filled"
              size="16"
              color="#d97704"
            ></uni-icons>
            <text>{{ currCity }}</text>
          </view>
        </uni-col>
      </uni-row>
    </view>
    <swiper
      class="swiper card-list"
      :duration="500"
      @change="onCardSwiperChange"
    >
      <swiper-item v-for="card in cardList" :key="card.uid">
        <view class="card">
          <image class="cover" :src="card.cover" mode="heightFix"></image>
          <view class="info-area">
            <uni-row class="demo-uni-row">
              <text class="name">{{ card.name }}</text>
              <image
                class="seximg mg-l-20rpx"
                src="/static/image/sexw.png"
              ></image>
              <text class="mg-l-20rpx"
                >{{ card.sex }}/{{ card.age }}/{{ card.constellation }}</text
              >
            </uni-row>
            <uni-row class="demo-uni-row">
              <uni-col :span="16">
                <text>籍贯: {{ card.born }}</text>
              </uni-col>
              <uni-col :span="8">
                <text>现居地: {{ card.city }}</text>
              </uni-col>
            </uni-row>
            <uni-row class="demo-uni-row">
              <uni-col :span="16">
                <text>学校: {{ card.edu }}</text>
                <text class="mg-l-15rpx">{{ card.degree }}</text>
              </uni-col>
              <uni-col :span="8">
                <text>工作: {{ card.job }}</text>
              </uni-col>
            </uni-row>
            <view class="thumbnail-list">
              <view
                class="thumbnail"
                v-for="(thumbnail, idx) in card.thumbnails"
                :key="thumbnail.url"
                v-on:click="onClickThumbnail(idx, thumbnail.url)"
                v-bind:class="{
                  selected: thumbnail.selected,
                  unselected: !thumbnail.selected,
                }"
              >
                <image :src="thumbnail.url" mode="widthFix"></image>
              </view>
              <text class="mg-l-20rpx"
                >{{ card.currThumbnailIdx + 1 }}/{{ card.total }}</text
              >
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currCardIdx: 0,
      currCity: "北京市",
      cardList: [
        {
          uid: 1000001,
          avatar: "/static/image/deshan.jpeg",
          cover: "/static/image/deshan.jpeg",
          name: "德善",
          age: 19,
          sex: "女",
          constellation: "处女座",
          born: "首尔",
          city: "北京",
          edu: "北京航空航天大学",
          degree: "学士",
          job: "航空",
          currIdx: 1,
          total: 3,
          currThumbnailIdx: 0,
          thumbnails: [
            {
              url: "/static/image/deshan.jpeg",
              selected: true,
            },
            {
              url: "/static/image/deshan2.jpg",
              selected: false,
            },
            {
              url: "/static/image/deshan3.jpg",
              selected: false,
            },
          ],
        },
        {
          uid: 1000002,
          avatar: "/static/image/aze.jpeg",
          cover: "/static/image/aze.jpeg",
          name: "阿泽",
          age: 19,
          sex: "男",
          constellation: "金牛座",
          born: "首尔",
          city: "首尔",
          edu: "围棋学院",
          degree: "学士",
          job: "围棋",
          currIdx: 1,
          total: 3,
          currThumbnailIdx: 0,
          thumbnails: [
            {
              url: "/static/image/aze.jpeg",
              selected: true,
            },
            {
              url: "/static/image/aze2.jpeg",
              selected: false,
            },
            {
              url: "/static/image/aze3.jpeg",
              selected: false,
            },
          ],
        },
        {
          uid: 1000003,
          avatar: "/static/image/baola.jpeg",
          cover: "/static/image/baola.jpeg",
          name: "宝拉",
          age: 21,
          sex: "女",
          constellation: "天蝎座",
          born: "首尔",
          city: "首尔",
          edu: "首尔大学",
          degree: "学士",
          job: "航空",
          currIdx: 1,
          total: 3,
          currThumbnailIdx: 0,
          thumbnails: [
            {
              url: "/static/image/baola.jpeg",
              selected: true,
            },
            {
              url: "/static/image/baola2.jpeg",
              selected: false,
            },
            {
              url: "/static/image/baola3.jpeg",
              selected: false,
            },
          ],
        },
      ],
      swiperOption: {
        //这里配置的参数参考官网API设置，这里的pagination就是下图中的官方配置
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },

  onLoad() {},
  methods: {
    onCardSwiperChange(e) {
      this.currCardIdx = e.detail.current;
      console.log(this.currCardIdx);
    },
    onClickThumbnail(idx, url) {
      var currCard = this.cardList[this.currCardIdx];
      currCard.cover = url;
      currCard.thumbnails[currCard.currThumbnailIdx].selected = false;
      currCard.currThumbnailIdx = idx;
      currCard.thumbnails[idx].selected = true;
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
  height: 94vh;
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
  text-shadow: 0 0 0.1em #888888, 0 0 0.1em #888888;
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
}

.info-area .thumbnail-list .thumbnail {
  display: inline-block;
  vertical-align: top;
  height: 100rpx;
  width: 100rpx;
  margin-top: 10rpx;
  margin-right: 8rpx;
  border-radius: 10rpx;
  overflow: hidden;
}

.info-area .thumbnail-list .selected {
  border: white 7rpx solid;
}

.info-area .thumbnail-list .unselected {
  border: #ccc 7rpx solid;
}

.info-area .thumbnail-list .thumbnail image {
  width: 100rpx;
  height: 100rpx;
}
</style>

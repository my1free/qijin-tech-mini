<template>
  <view class="content">
    <!-- <view class="header">
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
    </view> -->
    <view class="card-bg" v-if="cardList == null || cardList.length <= 0">
      <uni-load-more :status="loadingStatus" class="card-load"></uni-load-more>
    </view>
    <swiper
      class="swiper card-list"
      :duration="500"
      @change="onCardSwiperChange"
      v-if="cardList.length > 0"
    >
      <swiper-item v-for="card in cardList" :key="card.uid">
        <view class="card" v-on:click="onCardDetail(card.uid)">
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
                @click.stop="onClickThumbnail(idx, thumbnail.url)"
                v-bind:class="{
                  selected: thumbnail.selected,
                  unselected: !thumbnail.selected,
                }"
              >
                <image :src="thumbnail.url" mode="widthFix"></image>
              </view>
              <text class="mg-l-20rpx"
                >{{ card.currThumbnailIdx + 1 }}/{{
                  card.thumbnails.length
                }}</text
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
      loadingStatus: "noMore",
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
          edu: "延世大学",
          degree: "学士",
          job: "航空",
          currIdx: 1,
          total: 5,
          currThumbnailIdx: 0,
          thumbnails: [
            {
              url: "/static/image/deshan.jpeg",
              selected: true,
            },
            {
              url:
                "http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png",
              selected: false,
            },
            {
              url:
                "http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png",
              selected: false,
            },
            {
              url:
                "http://img.qijin.tech/kxPqgPMVLUDRe65f240de00a01e854308b237a77f634.png",
              selected: false,
            },
            {
              url:
                "http://img.qijin.tech/EoM0DHvXHQXXe4bb53c34bf66b143fdc2fc684d2ce41.png",
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
              url:
                "http://img.qijin.tech/ZJxLLMiSm0GL4501bd050d15a047feaaa158e345ac61.png",
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
              url:
                "http://img.qijin.tech/vAvRLB0SyaCfd6bdf6bee548c5317b4da8a722d4e6ad.png",
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
    onCardDetail(uid) {
      console.log(uid);
      uni.navigateTo({
        url: "./detail/index",
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
  width: 63rpx;
  margin-top: 10rpx;
  margin-right: 12rpx;
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
  width: 63rpx;
  height: 100rpx;
}

.card-bg {
  width: 100%;
  height: 100vh;
  padding-top: 20%;
}
</style>

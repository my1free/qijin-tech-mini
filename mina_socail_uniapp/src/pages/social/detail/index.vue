<template>
  <view class="content">
    <view class="detail-card">
      <uni-swiper-dot
        :info="cardDetail.images"
        :current="currCardIdx"
        field="content"
        mode="round"
        :dotsStyles="dotsStyles"
      >
        <swiper
          class="swiper-box thumbnail-list"
          :duration="500"
          @change="onCardSwiperChange"
        >
          <swiper-item
            v-for="thumbnail in cardDetail.images"
            :key="thumbnail.url"
          >
            <view class="card">
              <image class="cover" :src="thumbnail.url" mode="widthFix"></image>
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
    </view>
    <view class="info-area">
      <uni-row class="demo-uni-row">
        <text class="name">{{ cardDetail.profile.name }}</text>
        <image
          v-if="cardDetail.profile.gender === 'FEMALE'"
          class="seximg mg-l-20rpx"
          src="/static/image/sexw.png"
        ></image>
        <image
          v-if="cardDetail.profile.gender === 'MALE'"
          class="seximg mg-l-20rpx"
          src="/static/image/sexm.png"
        ></image>
        <text class="mg-l-20rpx"
          >{{ cardDetail.profile.gender === "FEMALE" ? "女" : "男" }}/{{
            cardDetail.profile.age
          }}/{{ cardDetail.profile.constellation }}</text
        >
      </uni-row>
      <uni-row class="demo-uni-row">
        <!-- <uni-col :span="6">
          <uni-tag
            text="真人认证"
            type="success"
            :circle="true"
            size="small"
          ></uni-tag>
        </uni-col> -->
        <!-- <uni-col :span="6" :offset="1">
          <uni-tag
            text="实名认证"
            type="success"
            :circle="true"
            size="small"
          ></uni-tag>
        </uni-col> -->
        <!-- <uni-col :span="6" :offset="1">
          <uni-tag
            text="学历认证"
            type="success"
            :circle="true"
            size="small"
          ></uni-tag>
        </uni-col> -->
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="12">
          <text>
            籍贯:&nbsp;{{
              cardDetail.profile.bornCity ? cardDetail.profile.bornCity : "未知"
            }}
          </text>
        </uni-col>
        <uni-col :span="12">
          <text>
            身高:&nbsp;{{
              cardDetail.profile.height ? cardDetail.profile.height : 0
            }}cm
          </text>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="12">
          <text>
            现居地:&nbsp;{{
              cardDetail.profile.liveCity ? cardDetail.profile.liveCity : "未知"
            }}
          </text>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="12">
          <text>
            学校:&nbsp;{{
              cardDetail.profile.edu ? cardDetail.profile.edu : "未知"
            }}
          </text>
          <text class="mg-l-15rpx">
            {{
              cardDetail.profile.eduDegree ? cardDetail.profile.eduDegree : ""
            }}
          </text>
        </uni-col>
        <uni-col :span="12">
          <text>
            工作:&nbsp;{{
              cardDetail.profile.job ? cardDetail.profile.job : "未知"
            }}
          </text>
        </uni-col>
      </uni-row>
    </view>
    <!-- <wuc-tab
      class="wuc-tab-style"
      :tab-list="tabList"
      :tabCur.sync="TabCur"
      @change="tabChange"
    ></wuc-tab> -->
    <view v-show="showType === 'info'" class="width100">
      <!-- <view class="personal-tag panel">
        <uni-card
          title="个人标签"
          mode="title"
          :is-shadow="true"
          is-full="true"
          thumbnail="/static/image/tag.png"
          extra="我就是我，不一样的烟火"
        >
          <span
            class="my-tag .bg-cyan.light"
            v-for="tag in cardDetail.tagList"
            v-bind:class="tag.cl"
            :key="tag"
          >
            {{ tag.text }}
          </span>
        </uni-card>
      </view> -->
      <view class="personal-tag panel">
        <uni-card
          title="个人爱好"
          mode="title"
          :is-shadow="true"
          is-full="true"
          thumbnail="/static/image/mm.png"
          extra="斜杠青年"
        >
          <view v-if="cardDetail.hobbies && cardDetail.hobbies.length > 0">
            <span
              class="my-tag"
              v-bind:class="tag.cl"
              v-for="tag in cardDetail.hobbies"
              :key="tag.id"
            >
              {{ tag.content }}
            </span>
          </view>
          <view v-if="!cardDetail.hobbies || cardDetail.hobbies.length == 0">
            <text class="ft-cl-gray">这个人很懒，还没有填写 ╮(╯▽╰)╭</text>
          </view>
        </uni-card>
      </view>
      <view class="personal-tag panel">
        <uni-card
          title="自我介绍"
          mode="title"
          :is-shadow="true"
          is-full="true"
          thumbnail="/static/image/aa.png"
          extra="知己知彼"
        >
          <view class="self-intro">
            <view class="info-title">
              <text>个人信息</text>
            </view>
            <view class="info-content">
              {{
                cardDetail.love.selfInfo
                  ? cardDetail.love.selfInfo
                  : "这个人很懒，还没有填写 ╮(╯▽╰)╭"
              }}
            </view>
          </view>
          <view class="self-intro">
            <view class="info-title">
              <text>性格爱好</text>
            </view>
            <view class="info-content">
              {{
                cardDetail.love.interest
                  ? cardDetail.love.interest
                  : "这个人很懒，还没有填写 ╮(╯▽╰)╭"
              }}
            </view>
          </view>
          <view class="self-intro">
            <view class="info-title"> 家庭情况 </view>
            <view class="info-content">
              {{
                cardDetail.love.family
                  ? cardDetail.love.family
                  : "这个人很懒，还没有填写 ╮(╯▽╰)╭"
              }}
            </view>
          </view>
          <view class="self-intro">
            <view class="info-title"> 期望的另一半 </view>
            <view class="info-content">
              {{
                cardDetail.love.expected
                  ? cardDetail.love.expected
                  : "这个人很懒，还没有填写 ╮(╯▽╰)╭"
              }}
            </view>
          </view>
        </uni-card>
      </view>
    </view>
    <!-- <view v-show="showType === 'square'">
      <my-square :itemList="itemList" kind="me" />
    </view> -->
  </view>
</template>

<script>
import WucTab from "@/components/wuc-tab.vue";
import mySquare from "@/components/square.vue";
import api from "@/static/js/api.js";

export default {
  components: {
    WucTab,
    mySquare,
  },
  data() {
    return {
      TabCur: 0,
      tabList: [
        {
          name: "个人信息",
          type: "info",
        },
        {
          name: "个人动态",
          type: "square",
        },
      ],
      dotsStyles: {
        backgroundColor: "rgba(200, 200, 200, .3)",
        border: "1px rgba(0, 0, 0, .3) solid",
        selectedBackgroundColor: "#fff",
        selectedBorder: "1px rgba(0, 0, 0, .9) solid",
      },
      currCardIdx: 0,
      cardDetail: {},
      swiperOption: {
        //这里配置的参数参考官网API设置，这里的pagination就是下图中的官方配置
        pagination: {
          el: ".swiper-pagination",
        },
      },
      showPreview: false,
      imgList: [
        "/static/image/deshan2.jpg",
        "/static/image/deshan3.jpg",
        "/static/image/aze.jpeg",
        "/static/image/aze2.jpeg",
      ],
      showType: "info",
    };
  },

  onLoad(option) {
    var userId = option.userId;
    api.getCardDetail(userId).then((res) => {
      console.log("getCardDetail=", res);
      this.cardDetail = res;
    });
  },
  methods: {
    onCardSwiperChange(e) {
      this.currCardIdx = e.detail.current;
      console.log(this.currCardIdx);
    },
    tabChange(index) {
      this.showType = this.tabList[index].type;
      this.TabCur = index;
      console.log(this.showType);
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  width: 750rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

swiper {
  width: 100%;
  height: 500rpx;
  min-height: 150rpx;
}

.content .detail-card {
  width: 100%;
  height: 80vh;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.content .detail-card .card {
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 10rpx;
  overflow: hidden;
}

.content .detail-card .card .cover {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}

.thumbnail-list {
  width: 96%;
  height: 80vh;
  margin-left: 2%;
  border-radius: 10rpx;
}

.info-area {
  width: 95%;
  height: 360rpx;
  padding-left: 5%;
  justify-content: center;
  bottom: 20rpx;
  text-align: left;
  color: gray;
  margin-top: 25rpx;
}

.info-area .name {
  width: 100%;
  text-align: left;
  font-size: 50rpx;
  color: black;
}

.info-area .seximg {
  width: 28rpx;
  height: 28rpx;
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

.content .panel {
  margin-bottom: 10rpx;
  width: 98%;
}

.self-intro {
  margin-bottom: 20rpx;
}

.self-intro .info-title {
  font-size: 30rpx;
}

.self-intro .info-content {
  color: gray;
  padding: 10rpx 5px;
  line-height: 40rpx;
}

.wuc-tab-style {
  margin-bottom: 10rpx;
}

.wuc-tab-style .wuc-tab-item {
  padding: 0 100rpx;
}

.ft-34 {
  font-size: 34rpx;
}
</style>

<template>
  <view class="content">
    <view class="detail-card">
      <uni-swiper-dot
        :info="cardDetail.thumbnails"
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
            v-for="thumbnail in cardDetail.thumbnails"
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
        <text class="name">{{ cardDetail.name }}</text>
        <image class="seximg mg-l-20rpx" src="/static/image/sexw.png"></image>
        <text class="mg-l-20rpx"
          >{{ cardDetail.sex }}/{{ cardDetail.age }}/{{
            cardDetail.constellation
          }}</text
        >
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="6">
          <uni-tag
            text="真实头像"
            type="success"
            :circle="true"
            size="small"
          ></uni-tag>
        </uni-col>
        <uni-col :span="6" :offset="1">
          <uni-tag
            text="实名认证"
            type="success"
            :circle="true"
            size="small"
          ></uni-tag>
        </uni-col>
        <uni-col :span="6" :offset="1">
          <uni-tag
            text="学历认证"
            type="default"
            :circle="true"
            size="small"
            disabled="true"
          ></uni-tag>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="12">
          <text>籍贯: {{ cardDetail.born }}</text>
        </uni-col>
        <uni-col :span="12">
          <text>现居地: {{ cardDetail.city }}</text>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="12">
          <text>学校: {{ cardDetail.edu }}</text>
          <text class="mg-l-15rpx">{{ cardDetail.degree }}</text>
        </uni-col>
        <uni-col :span="12">
          <text>工作: {{ cardDetail.job }}</text>
        </uni-col>
      </uni-row>
    </view>
    <wuc-tab
      class="wuc-tab-style"
      :tab-list="tabList"
      :tabCur.sync="TabCur"
      @change="tabChange"
    ></wuc-tab>
    <view v-show="showType === 'info'">
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
          <span
            class="my-tag"
            v-bind:class="tag.cl"
            v-for="tag in cardDetail.interestList"
            :key="tag.text"
          >
            {{ tag.text }}
          </span>
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
              90双子座173cm,普通高校本科毕业，公司的一个小项目负责人，工作偏忙，收入稳定，偶尔加班，较少应酬。即使目前一切安逸，也没有停止学习，始终在为能够创造更美好的努力生活着。
            </view>
          </view>
          <view class="self-intro">
            <view class="info-title">
              <text>性格爱好</text>
            </view>
            <view class="info-content">
              性格开朗，内心平和，风趣幽默，是大家公认的开心果。热爱旅行、阅读，与音乐。每周羽毛球，每年去一个国内喜欢的地方，到一个未去过的国家。
            </view>
          </view>
          <view class="self-intro">
            <view class="info-title"> 家庭背景 </view>
            <view class="info-content">
              出生山西省朔州市区，城市户口，工薪家庭，家中有一小妹从小勤勉，未有任何娇生惯养的恶习。母亲温暖，父亲严肃，都是通情达理之人，不世故，讲道理，识大体。
            </view>
          </view>
          <view class="self-intro">
            <view class="info-title"> 期望的另一半 </view>
            <view class="info-content">
              希望你是热爱生活的好姑凉，脾气好，感情经历简单，对生活有品位，有幽默感，160以上，本科以上，家人脾气温和
            </view>
          </view>
        </uni-card>
      </view>
    </view>
    <view v-show="showType === 'square'">
      <my-square :itemList="itemList" kind="me" />
    </view>
  </view>
</template>

<script>
import WucTab from "@/components/wuc-tab.vue";
import mySquare from "@/components/square.vue";

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
      cardDetail: {
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
        total: 3,
        currThumbnailIdx: 0,
        tagList: [
          {
            text: "女汉子",
            cl: ".bg-cyan.light",
          },
          {
            text: "嘤嘤怪",
            cl: ".bg-brown.light",
          },
        ],
        interestList: [
          {
            text: "羽毛球",
            cl: ".bg-cyan.light",
          },
          {
            text: "王者荣耀",
            cl: ".bg-orange.light",
          },
          {
            text: "摄影",
            cl: ".bg-grey.light",
          },
          {
            text: "做饭",
            cl: ".bg-brown.light",
          },
          {
            text: "绘画",
            cl: ".bg-purple.light",
          },
          {
            text: "旅游",
            cl: ".bg-blue.light",
          },
          {
            text: "户外探险",
            cl: ".bg-mauve.light",
          },
          {
            text: "徒步",
            cl: ".bg-cyan.light",
          },
        ],
        thumbnails: [
          {
            url: "/static/image/deshan.jpeg",
            selected: true,
          },
          {
            url:
              "http://img.qijin.tech/FahO6nbj13pu2aeb664b1ccf21879674a586888fc1fb.png",
            selected: false,
          },
          {
            url:
              "http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png",
            selected: false,
          },
          {
            url:
              "http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png",
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
      swiperOption: {
        //这里配置的参数参考官网API设置，这里的pagination就是下图中的官方配置
        pagination: {
          el: ".swiper-pagination",
        },
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

  onLoad() {},
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
  height: 300rpx;
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

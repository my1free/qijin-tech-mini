<template>
  <view class="content">
    <view class="panel">
      <view class="panel-head">
        <view class="panel-head-title">个人信息</view>
      </view>
      <view class="panel-body">
        <view class="info-item">
          <view class="info-item-title">姓名</view>
          <view class="info-item-value">德善</view>
          <view class="info-item-ops">></view>
        </view>
        <view class="info-item">
          <view class="info-item-title">性别</view>
          <view class="info-item-value">女</view>
          <view class="info-item-ops">></view>
        </view>
        <view class="info-item">
          <view class="info-item-title">生日</view>
          <view class="info-item-value">2000-01-01</view>
          <view class="info-item-ops">></view>
        </view>
        <view class="info-item">
          <view class="info-item-title">籍贯</view>
          <view class="info-item-value">韩国</view>
          <view class="info-item-ops">></view>
        </view>
        <view class="info-item">
          <view class="info-item-title">现居地</view>
          <view class="info-item-value">首尔</view>
          <view class="info-item-ops">></view>
        </view>
        <view class="info-item">
          <view class="info-item-title">学校</view>
          <view class="info-item-value">延世大学</view>
          <view class="info-item-ops">></view>
        </view>
        <view class="info-item">
          <view class="info-item-title">工作</view>
          <view class="info-item-value">空姐</view>
          <view class="info-item-ops">></view>
        </view>
      </view>
    </view>
    <!-- <view class="panel">
      <view class="panel-head">
        <view class="panel-head-title">个人标签</view>
      </view>
      <view class="panel-body">
      </view>
    </view> -->
    <view class="panel">
      <view class="panel-head">
        <view class="panel-head-title">个人爱好</view>
      </view>
      <view class="panel-body pd">
        <span
            class="my-tag"
            v-bind:class="tag.cl"
            v-for="tag in interestList"
            :key="tag.text"
          >
            {{ tag.text }}
          </span>
      </view>
    </view>
    <view class="panel">
      <view class="panel-head">
        <view class="panel-head-title">自我介绍</view>
      </view>
      <view class="panel-body pd">
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
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "myProfile",
  props: {
    title: "Title",
    content: "This content",
  },
  data() {
    return {
      interestList: [
          { text: "羽毛球", cl: ".bg-cyan.light" },
          { text: "王者荣耀", cl: ".bg-orange.light" },
          { text: "摄影", cl: ".bg-grey.light" },
          { text: "做饭", cl: ".bg-brown.light" },
          { text: "绘画", cl: ".bg-purple.light" },
          { text: "旅游", cl: ".bg-blue.light" },
          { text: "户外探险", cl: ".bg-mauve.light" },
          { text: "徒步", cl: ".bg-cyan.light" },
        ]
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  width: 100%;
}

.content .panel {
  margin-bottom: 10rpx;
  width: 98%;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}

.panel .panel-head{
  width: 100%;
  height: 100rpx;
  border-bottom: 1rpx #eee solid;
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  font-size: 35rpx;
}

.panel-head .panel-head-title{
  width: 90%;
  font-weight: bold;
}

.panel .panel-body{
  width: 100%;
  min-height: 100rpx;
}

.info-item{
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: 5%;
  padding: 20rpx 10rpx;
  border-bottom: 1rpx #eee solid;
}

.info-item .info-item-title{
  width: 20%;
}

.info-item .info-item-value{
  width: 75%;
  text-align: right;
  color: gray;
}

.info-item .info-item-ops{
  width: 5%;
  text-align: right;
  color: gray;
}

.pd{
  padding: 20rpx 20rpx;
}

.self-intro {
  margin-bottom: 20rpx;
}
.self-intro .info-title {
  font-size: 30rpx;
  font-weight: bold;
}
.self-intro .info-content {
  color: gray;
  padding: 10rpx 5px;
  line-height: 40rpx;
  border-left: 10rpx #ddd solid;
  margin: 10rpx 0rpx;
}

</style>

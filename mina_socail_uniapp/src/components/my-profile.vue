<template>
<view class="content">
    <view class="panel">
        <view class="panel-head">
            <view class="panel-head-title">个人信息</view>
        </view>
        <view class="panel-body">
            <view class="info-item" v-on:click="onEdit('name', infoDetail.name)">
                <view class="info-item-title">姓名</view>
                <view class="info-item-value">{{infoDetail.name}}</view>
                <view class="info-item-ops">></view>
            </view>
            <view class="info-item" v-on:click="onEdit('gender', infoDetail.gender)">
                <view class="info-item-title">性别</view>
                <view class="info-item-value">{{infoDetail.gender}}</view>
                <view class="info-item-ops">></view>
            </view>
            <view class="info-item" v-on:click="onEdit('birthday', infoDetail.birthday)">
                <view class="info-item-title">生日</view>
                <view class="info-item-value">{{infoDetail.birthday}}</view>
                <view class="info-item-ops">></view>
            </view>
            <view class="info-item" v-on:click="onEdit('bornCity', infoDetail.bornCity)">
                <view class="info-item-title">籍贯</view>
                <view class="info-item-value">{{infoDetail.bornCity}}</view>
                <view class="info-item-ops">></view>
            </view>
            <view class="info-item" v-on:click="onEdit('liveCity', infoDetail.liveCity)">
                <view class="info-item-title">现居地</view>
                <view class="info-item-value">{{infoDetail.liveCity}}</view>
                <view class="info-item-ops">></view>
            </view>
            <view class="info-item" v-on:click="onEdit('edu', infoDetail.edu)">
                <view class="info-item-title">学校</view>
                <view class="info-item-value">{{infoDetail.edu}}</view>
                <view class="info-item-ops">></view>
            </view>
            <view class="info-item" v-on:click="onEdit('job', infoDetail.job)">
                <view class="info-item-title">工作</view>
                <view class="info-item-value">{{infoDetail.job}}</view>
                <view class="info-item-ops">></view>
            </view>
        </view>
    </view>
    <!-- <view class="panel">
        <view class="panel-head">
            <view class="panel-head-title">个人爱好</view>
        </view>
        <view class="panel-body pd">
            <span class="my-tag" v-bind:class="tag.cl" v-for="tag in interestList" :key="tag.text">
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
                <view class="info-content" v-on:click="onEdit('selfInfo', infoDetail.selfInfo)">
                    {{infoDetail.selfInfo}}
                </view>
            </view>
            <view class="self-intro">
                <view class="info-title">
                    <text>性格爱好</text>
                </view>
                <view class="info-content" v-on:click="onEdit('selfHobby', infoDetail.selfHobby)">
                    {{infoDetail.selfHobby}}
                </view>
            </view>
            <view class="self-intro">
                <view class="info-title"> 家庭背景 </view>
                <view class="info-content" v-on:click="onEdit('selfFamily', infoDetail.selfFamily)">
                    {{infoDetail.selfFamily}}
                </view>
            </view>
            <view class="self-intro">
                <view class="info-title"> 期望的另一半 </view>
                <view class="info-content" v-on:click="onEdit('whoExpected', infoDetail.whoExpected)">
                    {{infoDetail.whoExpected}}
                </view>
            </view> -->
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
            infoDetail: {
                uid: 1000001,
                avatar: "/static/image/deshan.jpeg",
                cover: "/static/image/deshan.jpeg",
                name: "德善",
                birthday: '2020-01-01',
                age: 19,
                gender: "女",
                constellation: "处女座",
                bornCity: "首尔",
                liveCity: "北京",
                edu: "延世大学",
                degree: "学士",
                job: "航空",
                currIdx: 1,
                total: 3,
                currThumbnailIdx: 0,
                selfInfo: "90双子座173cm,普通高校本科毕业，公司的一个小项目负责人，工作偏忙，收入稳定，偶尔加班，较少应酬。即使目前一切安逸，也没有停止学习，始终在为能够创造更美好的努力生活着。",
                selfHobby: "性格开朗，内心平和，风趣幽默，是大家公认的开心果。热爱旅行、阅读，与音乐。每周羽毛球，每年去一个国内喜欢的地方，到一个未去过的国家。",
                selfFamily: "出生山西省朔州市区，城市户口，工薪家庭，家中有一小妹从小勤勉，未有任何娇生惯养的恶习。母亲温暖，父亲严肃，都是通情达理之人，不世故，讲道理，识大体。",
                whoExpected: "希望你是热爱生活的好姑凉，脾气好，感情经历简单，对生活有品位，有幽默感，160以上，本科以上，家人脾气温和",
                tagList: [{
                        text: "女汉子",
                        cl: ".bg-cyan.light"
                    },
                    {
                        text: "嘤嘤怪",
                        cl: ".bg-brown.light"
                    },
                ],
                interestList: [{
                        text: "羽毛球",
                        cl: ".bg-cyan.light"
                    },
                    {
                        text: "王者荣耀",
                        cl: ".bg-orange.light"
                    },
                    {
                        text: "摄影",
                        cl: ".bg-grey.light"
                    },
                    {
                        text: "做饭",
                        cl: ".bg-brown.light"
                    },
                    {
                        text: "绘画",
                        cl: ".bg-purple.light"
                    },
                    {
                        text: "旅游",
                        cl: ".bg-blue.light"
                    },
                    {
                        text: "户外探险",
                        cl: ".bg-mauve.light"
                    },
                    {
                        text: "徒步",
                        cl: ".bg-cyan.light"
                    },
                ],
                thumbnails: [{
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
            interestList: [{
                    text: "羽毛球",
                    cl: ".bg-cyan.light"
                },
                {
                    text: "王者荣耀",
                    cl: ".bg-orange.light"
                },
                {
                    text: "摄影",
                    cl: ".bg-grey.light"
                },
                {
                    text: "做饭",
                    cl: ".bg-brown.light"
                },
                {
                    text: "绘画",
                    cl: ".bg-purple.light"
                },
                {
                    text: "旅游",
                    cl: ".bg-blue.light"
                },
                {
                    text: "户外探险",
                    cl: ".bg-mauve.light"
                },
                {
                    text: "徒步",
                    cl: ".bg-cyan.light"
                },
            ]
        };
    },
    methods: {
        onEdit: function (key, value) {
            var url = `/pages/me/editor/index?key=${key}&value=${value}`
            console.log(url)
            uni.navigateTo({
                url: url,
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
        }
    },
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

.panel .panel-head {
    width: 100%;
    height: 100rpx;
    border-bottom: 1rpx #eee solid;
    display: flex;
    align-items: center;
    padding-left: 30rpx;
    font-size: 35rpx;
}

.panel-head .panel-head-title {
    width: 90%;
    font-weight: bold;
}

.panel .panel-body {
    width: 100%;
    min-height: 100rpx;
}

.info-item {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin-left: 5%;
    padding: 20rpx 10rpx;
    border-bottom: 1rpx #eee solid;
}

.info-item .info-item-title {
    width: 20%;
}

.info-item .info-item-value {
    width: 75%;
    text-align: right;
    color: gray;
}

.info-item .info-item-ops {
    width: 5%;
    text-align: right;
    color: gray;
}

.pd {
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

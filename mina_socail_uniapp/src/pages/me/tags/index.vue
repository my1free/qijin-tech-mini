<template>
<view class="content pd-40">
    <view class="panel pd-b-20 border-bottom width100">
        <view class="panel-head">
            <view class="panel-head-title">我的爱好</view>
        </view>
        <view class="panel-body pd">
            <span class="my-tag" v-bind:class="tag.cl" v-for="tag in interestList" :key="tag.text" v-on:click="removeIntrest(tag)">
                {{ tag.text }}
            </span>
            <span class="my-tag customize-tag" @click="open">
                自定义
            </span>
        </view>
    </view>
    <view class="panel mg-top-40">
        <view class="panel-head">
            <view class="panel-head-title">可选爱好</view>
        </view>
        <view class="panel-body pd">
            <span class="my-tag" v-bind:class="tag.cl" v-for="tag in interestCandidates" :key="tag.text" v-on:click="addIntrest(tag)">
                {{ tag.text }}
            </span>
        </view>
    </view>
    <uni-popup ref="popup" type="dialog">
        <uni-popup-dialog title="自定义" placeholder="请输入爱好" :value="selfDefined" mode="input" message="成功" :duration="2000" @close="selfDefinedClose" @confirm="selfDefinedConfirm"></uni-popup-dialog>
    </uni-popup>
</view>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            selfDefined: "ssss",
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
            interestCandidates: [{
                    text: "二次元",
                    cl: ".bg-gray.light"
                },
                {
                    text: "读书",
                    cl: ".bg-gray.light"
                },
                {
                    text: "三体",
                    cl: ".bg-gray.light"
                },
                {
                    text: "硬科幻",
                    cl: ".bg-gray.light"
                },
                {
                    text: "Hiking",
                    cl: ".bg-gray.light"
                },
                {
                    text: "走走停停",
                    cl: ".bg-gray.light"
                },
                {
                    text: "韩剧",
                    cl: ".bg-gray.light"
                },
                {
                    text: "羽毛球",
                    cl: ".bg-gray.light"
                },
                {
                    text: "王者荣耀",
                    cl: ".bg-gray.light"
                },
                {
                    text: "摄影",
                    cl: ".bg-gray.light"
                },
                {
                    text: "做饭",
                    cl: ".bg-gray.light"
                },
                {
                    text: "绘画",
                    cl: ".bg-gray.light"
                },
                {
                    text: "旅游",
                    cl: ".bg-gray.light"
                },
                {
                    text: "户外探险",
                    cl: ".bg-gray.light"
                },
                {
                    text: "徒步",
                    cl: ".bg-gray.light"
                },
            ]
        };
    },
    onLoad(option) {
        this.key = option.key
        this.value = option.value
        if (option.key == "gender" && option.value == "女") {
            this.genderIdx = 1
        }
    },
    methods: {
        addIntrest(tag) {
            this.interestList.push(tag)
        },
        removeIntrest(tag) {
            var index = this.interestList.indexOf(tag)
            if (index > -1) {
                this.interestList.splice(index, 1);
            }
        },
        open() {
            this.$refs.popup.open('center')
        },
        selfDefinedConfirm(e) {
            console.log(e)
            console.log(this.selfDefined)
            this.$refs.popup.close()
        },
        selfDefinedClose() {
            this.$refs.popup.close()
        },
    },
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.customize-tag {
    border: 1rpx gray dashed;
}

.panel-head-title {
    font-size: 35rpx;
    font-weight: bold;
    padding: 10rpx;
}
</style>

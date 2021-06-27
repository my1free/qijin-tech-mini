<template>
<view class="content">
    <view class="width100" v-if="key === 'name'">
        <view class="pd-40 text-bold ft-35">姓名</view>
        <input class="pd-l-r-40" :value="value" placeholder="请输入您的名字" focus="true">
    </view>
    <view class="width100" v-if="key === 'gender'">
        <view class="pd-40 text-bold ft-35">性别</view>
        <picker class="pd-l-r-40" @change="bindPickerChange" :value="genderIdx" :range="genderArray">
            <view class="uni-input">{{genderArray[genderIdx]}}</view>
        </picker>
    </view>
    <view class="width100" v-if="key === 'birthday'">
        <view class="pd-40 text-bold ft-35">生日</view>
        <uni-datetime-picker type="date" :value="value" start="1900-1-1" end="2100-1-1" @change="dateChange"></uni-datetime-picker>
    </view>
    <view class="width100" v-if="key === 'bornCity'">
        <view class="pd-40 text-bold ft-35">籍贯</view>
        <input class="pd-l-r-40" :value="value" placeholder="请输入您的出生地" focus="true">
    </view>
    <view class="width100" v-if="key === 'liveCity'">
        <view class="pd-40 text-bold ft-35">现居地</view>
        <input class="pd-l-r-40" :value="value" placeholder="请输入您的现在居住城市" focus="true">
    </view>
    <view class="width100" v-if="key === 'edu'">
        <view class="pd-40 text-bold ft-35">学校</view>
        <input class="pd-l-r-40" :value="value" placeholder="请输入学校" focus="true">
    </view>
    <view class="width100" v-if="key === 'job'">
        <view class="pd-40 text-bold ft-35">工作</view>
        <input class="pd-l-r-40" :value="value" placeholder="请输入你的工作领域，如互联网/金融" focus="true">
    </view>

    <view class="width100" v-if="key === 'selfInfo'">
        <view class="pd-40 text-bold ft-35">个人信息</view>
        <textarea class="pd-l-r-40 width100" :value="value" placeholder="请简要介绍下自己" focus="true" auto-height />
        </view>
    <view class="width100" v-if="key === 'selfHobby'">
        <view class="pd-40 text-bold ft-35">性格爱好</view>
        <textarea class="pd-l-r-40 width100" :value="value" placeholder="请介绍下自己的性格爱好" focus="true" auto-height />
    </view>
    <view class="width100" v-if="key === 'selfFamily'">
        <view class="pd-40 text-bold ft-35">家庭背景</view>
        <textarea class="pd-l-r-40 width100" :value="value" placeholder="介绍下自己的家庭背景" focus="true" auto-height />
    </view>
    <view class="width100" v-if="key === 'whoExpected'">
        <view class="pd-40 text-bold ft-35">期望的另一半</view>
        <textarea class="pd-l-r-40 width100" :value="value" placeholder="请说出对另一半的期望" focus="true" auto-height />
    </view>
    <view class="width100" style="text-align:right; margin-right: 100rpx; margin-top: 20rpx">
        <button class="mini-btn" type="primary" size="mini" v-on:click="onSave()">保存</button>
    </view>
</view>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            key: "",
            value: "",
            genderIdx: 0,
            genderArray: ["男", "女"],
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
        onSave() {
            uni.navigateBack({
                delta: 1
            });
        }
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
</style>

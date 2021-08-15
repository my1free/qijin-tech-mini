<template>
  <view class="content">
    <view class="width100" v-if="key === 'name'">
      <view class="pd-40 text-bold ft-35">姓名</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="请输入您的名字"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'mobile'">
      <view class="pd-40 text-bold ft-35">手机号</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="请输入手机号"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'height'">
      <view class="pd-40 text-bold ft-35">身高</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="请输入您的身高(cm)"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'gender'">
      <view class="pd-40 text-bold ft-35">性别</view>
      <picker
        class="pd-l-r-40"
        @change="bindPickerChange"
        :value="genderIdx"
        :range="genderArray"
      >
        <view class="uni-input">{{ genderArray[genderIdx] }}</view>
      </picker>
    </view>
    <view class="width100" v-if="key === 'birthday'">
      <view class="pd-40 text-bold ft-35">生日</view>
      <uni-datetime-picker
        type="date"
        :value="value"
        start="1900-1-1"
        end="2100-1-1"
        @change="dateChange"
      ></uni-datetime-picker>
    </view>
    <view class="width100" v-if="key === 'bornCity'">
      <view class="pd-40 text-bold ft-35">籍贯</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="如: 山东济南"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'liveCity'">
      <view class="pd-40 text-bold ft-35">现居地</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="如: 北京市海淀区"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'edu'">
      <view class="pd-40 text-bold ft-35">学校</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="请填写毕业学校"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'eduDegree'">
      <view class="pd-40 text-bold ft-35">学历</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="请填写学历，如学士、硕士、博士"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100" v-if="key === 'job'">
      <view class="pd-40 text-bold ft-35">工作</view>
      <input
        class="pd-l-r-40"
        :value="value"
        placeholder="请输入你的工作领域，如互联网/金融"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>

    <view class="width100" v-if="key === 'selfInfo'">
      <view class="pd-40 text-bold ft-35">个人信息</view>
      <textarea
        class="pd-l-r-40 width100"
        :value="value"
        placeholder="请简要介绍下自己"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
        auto-height
      />
    </view>
    <view class="width100" v-if="key === 'hobbies'">
      <view class="pd-40 text-bold ft-35">性格爱好</view>
      <textarea
        class="pd-l-r-40 width100"
        :value="value"
        placeholder="请介绍下自己的性格爱好"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
        auto-height
      />
    </view>
    <view class="width100" v-if="key === 'family'">
      <view class="pd-40 text-bold ft-35">家庭情况</view>
      <textarea
        class="pd-l-r-40 width100"
        :value="value"
        placeholder="介绍下自己的家庭情况"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
        auto-height
      />
    </view>
    <view class="width100" v-if="key === 'expected'">
      <view class="pd-40 text-bold ft-35">期望的另一半</view>
      <textarea
        class="pd-l-r-40 width100"
        :value="value"
        placeholder="请说出对另一半的期望"
        focus="true"
        @input="onKeyInput"
        @blur="onKeyBlur"
        auto-height
      />
    </view>
    <view
      class="width100"
      style="text-align:right; margin-right: 100rpx; margin-top: 20rpx"
    >
      <button class="mini-btn" type="primary" size="mini" v-on:click="onSave()">
        保存
      </button>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
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
    this.key = option.key;
    this.value = option.value;
    if (option.key == "gender" && option.value == "FEMALE") {
      this.genderIdx = 1;
    }
  },
  methods: {
    onKeyInput: function(event) {
      this.value = event.detail.value;
    },
    onKeyBlur: function(event) {
      this.value = event.detail.value;
    },
    bindPickerChange: function(event) {
      this.genderIdx = event.detail.value;
      if (event.detail.value == 1) {
        this.value = "FEMALE";
      } else {
        this.value = "MALE";
      }
    },
    dateChange: function(event) {
      this.value = event;
    },
    onSave() {
      var data = {};
      var field = this.key;
      if (this.key === "selfInfo") {
        field = "SELF_INFO";
      } else if (this.key === "family") {
        field = "FAMILY";
      } else if (this.key === "hobbies") {
        field = "INTEREST";
      } else if (this.key === "expected") {
        field = "EXPECTED";
      }
      data[field] = this.value;
      if (
        field != "SELF_INFO" &&
        field != "FAMILY" &&
        field != "INTEREST" &&
        field != "EXPECTED"
      ) {
        api.updateProfile(data).then((result) => {
          uni.showToast({
            title: "更新资料成功",
            icon: "success",
          });
          uni.navigateBack();
        });
      } else {
        data["loveKind"] = field;
        data["content"] = this.value;
        api.updateLove(data).then((result) => {
          uni.showToast({
            title: "更新成功",
            icon: "success",
          });
          uni.navigateBack();
        });
      }
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
</style>

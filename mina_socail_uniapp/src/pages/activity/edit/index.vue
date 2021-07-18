<template>
  <view class="content">
    <view class="width100">
      <view class="pd-40 text-bold ft-35">活动名称</view>
      <input
        id="title"
        class="pd-l-r-40"
        :value="title"
        placeholder="输入活动名称"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100">
      <view class="pd-40 text-bold ft-35">联系方式</view>
      <input
        id="contact"
        class="pd-l-r-40"
        :value="contact"
        placeholder="输入联系方式，如手机号"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100">
      <view class="pd-40 text-bold ft-35">开始时间</view>
      <uni-datetime-picker
        type="date"
        :value="startTime"
        start="1900-1-1"
        end="2100-1-1"
        @change="startTimeChange"
      ></uni-datetime-picker>
    </view>
    <view class="width100">
      <view class="pd-40 text-bold ft-35">结束时间</view>
      <uni-datetime-picker
        type="date"
        :value="endTime"
        start="1900-1-1"
        end="2100-1-1"
        @change="endTimeChange"
      ></uni-datetime-picker>
    </view>
    <view class="width100">
      <view class="pd-40 text-bold ft-35">活动地点</view>
      <input
        id="location"
        class="pd-l-r-40"
        :value="location"
        placeholder="输入活动地点"
        @input="onKeyInput"
        @blur="onKeyBlur"
      />
    </view>
    <view class="width100">
      <view class="pd-40 text-bold ft-35">活动简介</view>
      <textarea
        id="description"
        class="pd-l-r-40 width100"
        :value="description"
        placeholder="输入活动简介"
        @input="onKeyInput"
        @blur="onKeyBlur"
        auto-height
      />
    </view>
    <view class="cover-area">
      <view class="pd-40 text-bold ft-35 width100">
        相关图片
      </view>
      <view
        class="cover img"
        v-for="(cover, idx) in images"
        :key="cover.url"
        v-on:longpress="deleteImage(idx)"
      >
        <image :src="cover.url" mode="heightFix"></image>
      </view>
      <view class="cover add" v-on:click="choseImage('add', 0)">
        <image src="/static/image/plus-gray.png" mode="widthFix"></image>
      </view>
    </view>

    <view
      class="width100"
      style="text-align:right; margin-right: 100rpx; margin-top: 20rpx"
    >
      <button class="mini-btn" type="primary" size="mini" v-on:click="onSave()">
        保存
      </button>
    </view>
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog
        mode="base"
        type="warn"
        message="成功消息"
        title="删除确认"
        content="确认删除图片？"
        :duration="2000"
        :before-close="true"
        @close="closePopup"
        @confirm="confirmDeleteImage"
      ></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  components: {},
  data() {
    return {
      title: "",
      contact: "",
      startTime: "",
      endTime: "",
      location: "",
      description: "",
      imageIdx: 0,
      images: [
        {
          url: "http://img.qijin.tech/misc/1.jpg",
        },
        {
          url: "http://img.qijin.tech/misc/2.jpg",
        },
        {
          url: "http://img.qijin.tech/misc/3.jpg",
        },
      ],
    };
  },
  onLoad(option) {},
  methods: {
    onKeyInput: function(event) {
      var id = event.target.id;
      var value = event.detail.value;
      if (id === "title") {
        this.title = value;
      } else if (id === "contact") {
        this.contact = value;
      } else if (id === "location") {
        this.location = value;
      } else if (id === "description") {
        this.description = value;
      }
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
    startTimeChange: function(event) {
      this.startTime = event;
    },
    endTimeChange: function(event) {
      this.endTime = event;
    },
    deleteImage(idx) {
      this.imageIdx = idx;
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    confirmDeleteImage() {
      console.log("confirmDeleteImage=", this.imageIdx);
      var newImages = [];
      for (var i = 0; i < this.images.length; i++) {
        if (this.imageIdx != i) {
          newImages.push(this.images[i]);
        }
      }
      this.images = newImages;
      this.$refs.popup.close();
    },
    choseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ["original"],
        sourceType: ["album", "camera"],
        success: (chooseImageRes) => {
          console.log("chooseImage=", chooseImageRes.tempFilePaths);
          this.cutImage = true;
          const tempFilePaths = chooseImageRes.tempFilePaths;
          this.images.push({ url: tempFilePaths });
        },
      });
    },
    onSave() {
      var data = {};
      if (this.title != "" && this.title != undefined) {
        data.title = this.title;
      }
      if (this.contact != "" && this.contact != undefined) {
        data.contact = this.contact;
      }
      if (this.startTime != "" && this.startTime != undefined) {
        data.startTime = this.startTime;
      }
      if (this.endTime != "" && this.endTime != undefined) {
        data.endTime = this.endTime;
      }
      if (this.location != "" && this.location != undefined) {
        data.location = this.location;
      }
      if (this.description != "" && this.description != undefined) {
        data.description = this.description;
      }
      if (this.images != undefined && this.images.length > 0) {
        data.images = this.images;
      }
      console.log("data=", data);
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

.cover-area {
  display: flex;
  flex-direction: row;
  width: 750rpx;
  flex-wrap: wrap;
  margin-top: 20rpx;
  margin-bottom: 100rpx;
}

.cover-area .cover {
  display: flex;
  width: 300rpx;
  height: 200rpx;
  margin-left: 50rpx;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin-top: 20rpx;
}

.cover-area .img image {
  width: 300rpx;
  height: 200rpx;
  border-radius: 10rpx;
}

.cover-area .add image {
  width: 200rpx;
  height: 160rpx;
}
</style>

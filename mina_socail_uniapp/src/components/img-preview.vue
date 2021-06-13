<template>
  <view class="my-image-preview" v-show="isShow">
    <uni-swiper-dot
      :info="previewList"
      :current="previewIdx"
      field="content"
      mode="round"
      :dotsStyles="dotsStyles"
    >
      <swiper
        class="swiper-box preview-list"
        :duration="500"
        @change="onPreviewSwiperChange"
        :current="previewIdx"
      >
        <swiper-item v-for="preview in previewList" :key="preview">
          <view class="preview">
            <image :src="preview" mode="widthFix"></image>
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
    <view class="preview-close" v-on:click="onPreviewClose()"> x </view>
  </view>
</template>

<script>
export default {
  name: "myImgPreview",
  props: {
    // 图片列表
    previewList: {
      type: Array,
      value: [],
    },
    // 默认展示图像index
    defaultIdx: 0,
    show: false,
  },
  watch: {
    show(newV, oldV) {
      // do something
      this.isShow = newV;
    },
    defaultIdx(newV, oldV) {
      this.previewIdx = newV;
    },
  },
  data() {
    return {
      isShow: this.show,
      previewIdx: this.defaultIdx,
      dotsStyles: {
        backgroundColor: "rgba(200, 200, 200, .3)",
        border: "1px rgba(0, 0, 0, .3) solid",
        selectedBackgroundColor: "#fff",
        selectedBorder: "1px rgba(0, 0, 0, .9) solid",
      },
    };
  },
  methods: {
    onPreviewSwiperChange(e) {
      this.previewIdx = e.detail.current;
    },
    onPreviewClose() {
      this.isShow = false;
      this.$emit("update:show", this.isShow);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-image-preview {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: #eee;
}

.my-image-preview swiper {
  height: 100vh;
}

.my-image-preview .preview-list image {
  width: 100%;
  height: 100%;
}

.my-image-preview .preview-list .preview {
  height: 100%;
  display: flex;
  align-items: center;
}

.my-image-preview .selected {
  border: white 7rpx solid;
}

.my-image-preview .unselected {
  border: #ccc 7rpx solid;
}

.my-image-preview .preview-close {
  position: absolute;
  top: 20rpx;
  width: 60rpx;
  height: 60rpx;
  background-color: white;
  margin-left: 20rpx;
  border-radius: 50%;
  border: 5rpx gray solid;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 34rpx;
  display: flex;
}
</style>
<template>
  <view class="width100">
    <view class="avatar-area pd-20">
      <view class="title pd-tb-20 width100">
        编辑头像
      </view>
      <view class="width100 avatars">
        <view class="avatar" v-on:click="choseImage('avatar', 0)">
          <image :src="galleryInfo.avatar"></image>
        </view>
        <view class="avatar-small">
          <image :src="galleryInfo.avatar"></image>
        </view>
      </view>
      <view class="width100 description">
        点击图片替换头像，推荐200 * 200大小
      </view>
    </view>
    <view class="cover-area">
      <view class="title pd-20 width100">
        编辑画廊
      </view>
      <view
        class="cover"
        v-for="(cover, idx) in galleryInfo.covers"
        :key="cover.url"
        v-on:click="choseImage('cover', idx)"
      >
        <image :src="cover.url" mode="widthFix"></image>
      </view>
      <view class="cover" v-on:click="choseImage('add', 0)">
        <image src="/static/image/plus-gray.png" mode="widthFix"></image>
      </view>
    </view>
    <view class="container" v-if="cutImage === true">
      <view class="cropper-wrap">
        <image-cropper
          id="image-cropper"
          :zoom="1"
          :angle="0"
          :src="src"
          :cutWidth="cutWidth"
          :cutHeight="cutHeight"
          canvasBackground="red"
          @cropped="cropped"
          @afterDraw="afterDraw"
          @beforeDraw="beforeDraw"
          @load="load"
          maskType="outline"
          keepRatio="true"
          boundDetect="true"
          disableRotate="true"
        />
      </view>
      <view class="cropper-ops">
        <text v-on:click="cutImageCancel()">取消</text>
        <text v-on:click="cutImageConfirm()">确定</text>
      </view>
    </view>
  </view>
</template>

<script>
import ImageCropper from "@/components/nice-cropper/cropper.vue";
export default {
  components: {
    ImageCropper,
  },
  data() {
    return {
      src: "",
      cutImage: false,
      cutWidth: "50%",
      cutHeight: "50%",
      galleryInfo: {
        uid: 100001,
        avatar: "/static/image/deshan.jpeg",
        covers: [
          {
            url: "/static/image/deshan.jpeg",
          },
          {
            url: "/static/image/deshan2.jpg",
          },
          {
            url: "/static/image/deshan3.jpg",
          },
          {
            url: "/static/image/aze.jpeg",
          },
          {
            url: "/static/image/aze2.jpeg",
          },
          {
            url: "/static/image/aze3.jpeg",
          },
          {
            url: "/static/image/baola.jpeg",
          },
          {
            url: "/static/image/baola2.jpeg",
          },
          {
            url: "/static/image/baola3.jpeg",
          },
        ],
      },
    };
  },
  onLoad(option) {
    this.key = option.key;
    this.value = option.value;
    if (option.key == "gender" && option.value == "女") {
      this.genderIdx = 1;
    }
  },
  methods: {
    beforeDraw(context, transform) {
      context.setFillStyle("yellow");
      transform.zoom = 2;
    },
    afterDraw(ctx, info) {
      ctx.fillText("我是一行文字水印", 20, 20);
      console.log(`当前画布大小：${info.width}*${info.height}`);
    },
    load(img) {
      console.log("load", img);
    },
    cropped(imagePath, imageInfo) {
      console.log(imagePath, imageInfo);
    },
    addIntrest(tag) {
      this.interestList.push(tag);
    },
    removeIntrest(tag) {
      var index = this.interestList.indexOf(tag);
      if (index > -1) {
        this.interestList.splice(index, 1);
      }
    },
    open() {
      this.$refs.popup.open("center");
    },
    selfDefinedConfirm(e) {
      console.log(e);
      console.log(this.selfDefined);
      this.$refs.popup.close();
    },
    selfDefinedClose() {
      this.$refs.popup.close();
    },
    choseImage(type, idx) {
      uni.chooseImage({
        count: 1,
        sizeType: ["original"],
        sourceType: ["album", "camera"],
        success: (chooseImageRes) => {
          this.cutImage = true;
          const tempFilePaths = chooseImageRes.tempFilePaths;
          console.log(tempFilePaths);
          this.src = tempFilePaths[0];
          if ("avatar" === type) {
            this.galleryInfo.avatar = tempFilePaths;
          }
          if ("add" === type) {
            this.cutWidth = "50%";
            this.cutHeight = "88.5%";
            this.galleryInfo.covers.push({
              url: tempFilePaths,
            });
          }
          if ("cover" === type) {
            this.cutWidth = "50%";
            this.cutHeight = "88.5%";
            for (var i = 0; i < this.galleryInfo.covers.length; i++) {
              console.log(i, idx);
              if (i === idx) {
                this.galleryInfo.covers[i].url = tempFilePaths;
                break;
              }
            }
          }
        },
      });
    },
    cutImageCancel() {
      this.cutImage = false;
    },
    cutImageConfirm() {
      this.cutImage = false;
    },
  },
};
</script>

<style>
page {
  /* #ifdef MP-ALIPAY */
  position: absolute;
  width: 100%;
  /* #endif */
  height: 100%;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  display: block;
  font-size: 40rpx;
  font-weight: bold;
}

.avatar-area .avatar {
  width: 300rpx;
}

.avatar-area .avatars {
  display: flex;
  align-items: flex-end;
}

.avatar-area .avatar-small {
  width: 150rpx;
  margin-left: 40rpx;
}

.avatar-area .avatar image {
  width: 300rpx;
  height: 300rpx;
  border-radius: 20rpx;
}

.avatar-area .avatar-small image {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
}

.cover-area {
  display: flex;
  flex-direction: row;
  width: 750rpx;
  flex-wrap: wrap;
  margin-top: 20rpx;
}

.cover-area .cover {
  display: flex;
  width: 200rpx;
  height: 356rpx;
  margin-left: 36rpx;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin-top: 20rpx;
}

.cover-area image {
  width: 200rpx;
  height: 356rpx;
  border-radius: 10rpx;
}

.description {
  margin-top: 10rpx;
  color: gray;
}

.container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
}

.cropper-wrap {
  /* height: calc(100% - 96rpx); */
  height: 100%;
}

.cropper-ops {
  position: relative;
  color: white;
  top: -140rpx;
  font-size: 35rpx;
  right: 10rpx;
  text-align: right;
}

.cropper-ops text {
  margin-right: 40rpx;
}
</style>

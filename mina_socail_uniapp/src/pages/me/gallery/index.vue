<template>
  <view class="width100 content">
    <view class="avatar-area pd-20">
      <view class="title pd-tb-20 width100">
        编辑头像
      </view>
      <view class="width100 avatars">
        <view class="avatar" v-on:click="choseImage('avatar', 0)">
          <image :src="gallery.profile.avatar"></image>
        </view>
        <view class="avatar-small">
          <image :src="gallery.profile.avatar"></image>
        </view>
      </view>
      <view class="width100 description">
        点击图片替换头像，推荐200 * 200大小
      </view>
    </view>
    <view class="cover-area">
      <view class="title pd-20 width100">
        编辑个人图片
      </view>
      <view
        class="cover"
        v-for="(cover, idx) in gallery.images"
        :key="cover.url"
        v-on:click="choseImage('cover', idx)"
        v-on:longpress="deleteImage(idx)"
      >
        <image :src="cover.url" mode="widthFix"></image>
      </view>
      <view class="cover" v-on:click="choseImage('add', 0)">
        <image src="/static/image/plus-gray.png" mode="widthFix"></image>
      </view>
      <view class="width100 tips ">
        <text>注：短按替换图片，长按删除图片</text>
      </view>
    </view>
    <view class="img-cut-tips" v-if="cutImage">
      <text>缩放图片使填满红框，效果最佳哦</text>
    </view>

    <uni-popup ref="delImagePopup" type="dialog">
      <uni-popup-dialog
        mode="base"
        type="warn"
        title="删除确认"
        content="确认删除图片？"
        :duration="2000"
        :before-close="true"
        @close="closeDelImagePopup"
        @confirm="confirmDelImage"
      ></uni-popup-dialog>
    </uni-popup>
    <!-- <view class="container" v-if="cutImage === true">
      <view class="cropper-wrap">
        <image-cropper
          id="image-cropper"
          :zoom="1"
          :angle="0"
          :src="src"
          :cutWidth="cutWidth"
          :cutHeight="cutHeight"
          canvasBackground="#ffffff"
          @cropped="cropped"
          @afterDraw="afterDraw"
          @beforeDraw="beforeDraw"
          @load="load"
          maskType="outline"
          keepRatio="true"
          boundDetect="false"
          disableRotate="true"
        />
      </view>
      <view class="cropper-ops">
        <text v-on:click="cutImageCancel()">取消</text>
        <text v-on:click="cutImageConfirm()">确定</text>
      </view>
    </view> -->
    <image-cropper
      :crop-fixed="true"
      :src="src"
      :crop-width="cutWidth"
      :crop-height="cutHeight"
      @confirm="cutImageConfirm"
      @cancel="cutImageCancel"
    ></image-cropper>
  </view>
</template>

<script>
// import ImageCropper from "@/components/nice-cropper/cropper.vue";
import ImageCropper from "@/components/invinbg-image-cropper.vue";
import api from "@/static/js/api.js";
export default {
  components: {
    ImageCropper,
  },
  data() {
    return {
      src: "",
      type: "",
      idx: 0,
      cutImage: false,
      cutWidth: 300,
      cutHeight: 300,
      imagePath: "",
      gallery: {},
    };
  },
  onLoad(option) {
    api.getGallery().then((result) => {
      console.log("gallery=", result);
      this.gallery = result;
    });
  },
  methods: {
    beforeDraw(context, transform) {
      transform.zoom = 2;
    },
    afterDraw(ctx, info) {},
    load(img) {},
    cropped(imagePath, imageInfo) {
      this.imagePath = imagePath;
      console.log("imagePath=", this.imagePath);
      wx.getFileInfo({
        filePath: imagePath,
        success(res) {
          console.log("imagePath fileInfo=", res);
        },
      });
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
    deleteImage(idx) {
      this.idx = idx;
      this.$refs.delImagePopup.open("center");
    },
    closeDelImagePopup() {
      this.$refs.delImagePopup.close();
    },
    confirmDelImage() {
      this.closeDelImagePopup();
      console.log("confirmDelImage=", this.gallery.images[this.idx]);
      var image = this.gallery.images[this.idx];
      api.delUserImage({ id: image.id }).then((result) => {
        this.gallery.images.splice(this.idx, 1);
      });
    },
    open() {
      this.$refs.popup.open("center");
    },
    selfDefinedConfirm(e) {
      this.$refs.popup.close();
    },
    selfDefinedClose() {
      this.$refs.popup.close();
    },
    choseImage(type, idx) {
      this.type = type;
      this.idx = idx;
      if ("avatar" === this.type) {
        this.cutWidth = 340;
        this.cutHeight = 340;
      }
      if ("add" === this.type || "cover" === this.type) {
        this.cutWidth = 340;
        this.cutHeight = 544;
      }

      uni.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (chooseImageRes) => {
          this.cutImage = true;
          console.log("xxx", chooseImageRes.tempFilePaths[0]);
          this.src = chooseImageRes.tempFilePaths[0];
        },
      });
    },
    cutImageCancel() {
      this.cutImage = false;
    },
    cutImageConfirm(res) {
      var filePath = res.detail.tempFilePath;
      this.cutImage = false;
      wx.getImageInfo({
        src: filePath,
      }).then((result) => {
        var max = Math.max(result.width, result.height);
        var rate = 100;
        if (max > 600) {
          rate = 100 / (max / 600);
        }
        console.log("rate=", rate);
        wx.compressImage({
          src: filePath, // 图片路径
          quality: rate, // 压缩质量
        }).then((result) => {
          // wx.getFileInfo({
          //   filePath: result.tempFilePath,
          //   success(res) {
          //     console.log("fileInfo=", res);
          //   },
          // });
          api.uploadImageWithPath(result.tempFilePath).then((res) => {
            uni.hideLoading();
            if (res[1].statusCode != 200) {
              uni.showToast({
                title: res[1].statusCode,
                icon: "error",
              });
              return;
            }
            var result = JSON.parse(res[1].data);
            console.log("result=", result);
            if (result.code != 200) {
              uni.showToast({
                title: "上传图片失败",
                icon: "error",
              });
              return;
            }
            var url = result.data.url;
            if ("avatar" === this.type) {
              api.updateProfile({ avatar: url }).then((result) => {
                this.gallery.profile.avatar = url;
                uni.showToast({
                  title: "更新头像成功",
                  icon: "success",
                });
              });
            }
            if ("add" === this.type) {
              api.addUserImage({ url: url }).then((result) => {
                this.gallery.images.push({
                  id: result,
                  url: url,
                });
                uni.showToast({
                  title: "添加图片成功",
                  icon: "success",
                });
              });
            }
            if ("cover" === this.type) {
              for (var i = 0; i < this.gallery.images.length; i++) {
                console.log(i, this.idx);
                if (i === this.idx) {
                  api
                    .replaceUserImage({
                      url: url,
                      id: this.gallery.images[i].id,
                    })
                    .then((result) => {
                      this.gallery.images[i].url = url;
                      uni.showToast({
                        title: "更新图片成功",
                        icon: "success",
                      });
                    });

                  break;
                }
              }
            }
          });
        });
      });
      return;
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
  justify-content: center;
  margin-bottom: 200rpx;
  padding-bottom: 200rpx;
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
  margin-bottom: 100rpx;
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
  height: 90vh;
}

.cropper-ops {
  position: relative;
  color: white;
  top: -180rpx;
  font-size: 35rpx;
  right: 10rpx;
  text-align: right;
}

.cropper-ops text {
  margin-right: 40rpx;
}
.tips {
  color: gray;
  margin-top: 20rpx;
  padding-left: 40rpx;
}

.img-cut-tips {
  width: 100%;
  text-align: center;
  position: fixed;
  top: 12rpx;
  z-index: 999;
}

.img-cut-tips text {
  background-color: white;
  padding: 5rpx 40rpx;
  border-radius: 5rpx;
}
</style>

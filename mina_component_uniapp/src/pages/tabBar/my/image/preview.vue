<template>
  <view class="content">
    <button @click="onPreview">点击</button>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageList: [
        "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
        "http://img.qijin.tech/social/WX20210713-110710@2x.png",
        "http://img.qijin.tech/tmp_066601e23cae06414da39319932f51d6.jpg",
      ],
    };
  },
  onLoad(query) {
    this.errMsg = query.errMsg || "";
  },
  methods: {
    onPreview: function() {
      // 预览图片
      uni.previewImage({
        urls: this.imageList,
        longPressActions: {
          itemList: ["发送给朋友", "保存图片", "收藏"],
          success: function(data) {
            console.log(
              "选中了第" +
                (data.tapIndex + 1) +
                "个按钮,第" +
                (data.index + 1) +
                "张图片"
            );
          },
          fail: function(err) {
            console.log(err.errMsg);
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
}
my-chat {
  width: 100%;
}
</style>

<template>
  <view class="content">
    <my-me-head class="width100" :name="name" :avatar="avatar" />
    <my-profile class="width100" :myProfile="meInfo" />
    <view class="placeholder"></view>
  </view>
</template>

<script>
import myMeHead from "../../components/my-me-head.vue";
import myProfile from "../../components/my-profile.vue";
import api from "@/static/js/api.js";
export default {
  components: {
    myMeHead,
    myProfile,
  },
  data() {
    return {
      name: "",
      avatar: "",
      meInfo: {},
    };
  },
  onShow() {
    this.getMe();
  },
  onLoad() {},
  methods: {
    getMe() {
      api.getMe().then((result) => {
        console.log("meInfo=", result);
        this.name = result.profile.name;
        this.avatar = result.profile.avatar;
        this.meInfo = result;
      });
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
.placeholder {
  width: 100%;
  height: 100rpx;
}
</style>

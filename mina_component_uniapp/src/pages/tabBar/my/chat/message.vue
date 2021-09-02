<template>
  <view class="content">
    <my-chat :chatList="chatList"></my-chat>
  </view>
</template>

<script>
import myChat from "@/components/my-im/chat.vue";
export default {
  components: {
    myChat,
  },
  data() {
    return {
      chatList: [
        {
          id: 10000001,
          lastMsg:
            "阿萨德佛哦阿萨德浪费老框架阿斯顿发发大水凋零骷髅撒旦法了解了解了解拉数据订饭啦",
          date: "2021-08-08 12:20",
          unreadCount: "10",
          profile: {
            name: "德善",
            avatar:
              "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
          },
        },
        {
          id: 10000002,
          lastMsg: "阿萨德佛哦阿萨德浪费老框架",
          date: "2021-08-08 12:20",
          unreadCount: "+99",
          profile: {
            name: "阿泽",
            avatar: "http://img.qijin.tech/social/WX20210713-110710@2x.png",
          },
        },
        {
          id: 10000003,
          lastMsg: "奋起！！！！",
          date: "2021-08-08 12:20",
          unreadCount: "",
          profile: {
            name: "宝拉",
            avatar: "http://img.qijin.tech/social/WX20210713-110603@2x.png",
          },
        },
        {
          id: 10000004,
          lastMsg: "阿萨德佛哦阿萨德浪费老框架",
          date: "2021-08-08 12:20",
          unreadCount: "2",
          profile: {
            name: "蛋花汤",
            avatar:
              "http://img.qijin.tech/tmp_066601e23cae06414da39319932f51d6.jpg",
          },
        },
        {
          id: 10000005,
          lastMsg: "👋",
          date: "2021-08-08 12:20",
          unreadCount: "",
          profile: {
            name: "勇敢狗狗不怕困难",
            avatar:
              "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLThAyqO9ic7pzQqpzluKRvM2JQP9AxoiaX0NNqNOFq0ucdGIAv2KYu3KPcLkIwqXzcAib88xalNFfWQ/132",
          },
        },
        {
          id: 10000001,
          lastMsg:
            "阿萨德佛哦阿萨德浪费老框架阿斯顿发发大水凋零骷髅撒旦法了解了解了解拉数据订饭啦",
          date: "2021-08-08 12:20",
          unreadCount: "10",
          profile: {
            name: "德善",
            avatar:
              "http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png",
          },
        },
        {
          id: 10000002,
          lastMsg: "阿萨德佛哦阿萨德浪费老框架",
          date: "2021-08-08 12:20",
          unreadCount: "+99",
          profile: {
            name: "阿泽",
            avatar: "http://img.qijin.tech/social/WX20210713-110710@2x.png",
          },
        },
        {
          id: 10000003,
          lastMsg: "奋起！！！！",
          date: "2021-08-08 12:20",
          unreadCount: "",
          profile: {
            name: "宝拉",
            avatar: "http://img.qijin.tech/social/WX20210713-110603@2x.png",
          },
        },
        {
          id: 10000004,
          lastMsg: "阿萨德佛哦阿萨德浪费老框架",
          date: "2021-08-08 12:20",
          unreadCount: "2",
          profile: {
            name: "蛋花汤",
            avatar:
              "http://img.qijin.tech/tmp_066601e23cae06414da39319932f51d6.jpg",
          },
        },
        {
          id: 10000005,
          lastMsg: "👋",
          date: "2021-08-08 12:20",
          unreadCount: "",
          profile: {
            name: "勇敢狗狗不怕困难",
            avatar:
              "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLThAyqO9ic7pzQqpzluKRvM2JQP9AxoiaX0NNqNOFq0ucdGIAv2KYu3KPcLkIwqXzcAib88xalNFfWQ/132",
          },
        },
      ],
    };
  },
  onLoad(query) {
    this.errMsg = query.errMsg || "";
  },
  methods: {},
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

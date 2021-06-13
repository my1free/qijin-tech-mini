<template>
  <view class="content">
    <view class="my-group">
      <uni-row class="demo-uni-row">
        <my-group />
      </uni-row>
    </view>
  </view>
</template>

<script>
import myGroup from "../../../components/chat-group.vue";
export default {
  components: {
    myGroup,
  },
  data() {
    return {
      title: "Hello",
      itemList: [
        {
          id: 20000002,
          user: {
            id: 10001,
            name: "德善",
            avatar: "/static/image/deshan.jpeg",
          },
          content: {
            type: "text",
            text:
              "每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n每天一个问候\n",
          },
          hasLiked: false,
          doInput: false,
          likeList: [
            {
              uid: 10002,
              name: "阿泽",
            },
            {
              uid: 10004,
              name: "狗焕",
            },
            {
              uid: 10005,
              name: "娃娃鱼",
            },
          ],
          commentList: [
            {
              id: 40000001,
              fromUser: {
                uid: 10002,
                name: "阿泽",
              },
              text: "我亲爱的德善",
            },
            {
              id: 40000002,
              fromUser: {
                uid: 10005,
                name: "娃娃鱼",
              },
              toUser: {
                uid: 10002,
                name: "阿泽",
              },
              text: "能不能不要这么恶心",
            },
            {
              id: 40000003,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "藏起来~~",
            },
            {
              id: 40000004,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "阿萨德富兰克林水电费尽量少打飞机",
            },
            {
              id: 40000005,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text:
                "阿士大夫撒旦法 撒打飞机拉双方均对拉丝解放路撒 发苏打绿发撒拉发动机",
            },
            {
              id: 40000006,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "仨",
            },
            {
              id: 40000007,
              fromUser: {
                uid: 10004,
                name: "狗焕",
              },
              text: "藏起来~~",
            },
          ],
        },
        {
          id: 20000003,
          user: {
            id: 10002,
            name: "阿泽",
            avatar: "/static/image/aze.jpeg",
          },
          content: {
            type: "image",
            text: "第一个动态",
            urls: [
              "/static/image/deshan2.jpg",
              "/static/image/deshan3.jpg",
              "/static/image/aze.jpeg",
              "/static/image/aze2.jpeg",
            ],
          },
          doInput: false,
          hasLiked: false,
        },
        {
          id: 20000004,
          user: {
            id: 10003,
            name: "宝拉",
            avatar: "/static/image/baola.jpeg",
          },
          content: {
            type: "image",
            text: "每天都要元气满满",
            urls: ["/static/image/baola3.jpeg"],
          },
          doInput: false,
          hasLiked: false,
        },
      ],
      showPreview: false,
      imgList: [
        "/static/image/deshan2.jpg",
        "/static/image/deshan3.jpg",
        "/static/image/aze.jpeg",
        "/static/image/aze2.jpeg",
      ],
    };
  },
  onLoad() {},
  methods: {
    hhh() {
      console.log("asdfdf");
      this.showPreview = true;
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

.my-group {
  width: 100%;
}
</style>

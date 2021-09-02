<template>
  <view class="content">
    <uni-list :border="true">
      <!-- 显示圆形头像 -->
      <uni-list-chat
        v-for="chat in chatList"
        :key="chat.id"
        :title="chat.profile.name"
        :avatar="chat.profile.avatar"
        :note="chat.lastMsg"
        :time="chat.date"
        :badge-text="chat.unreadCount"
        showBadge="true"
        v-on:click="onMessage(chat.id)"
      ></uni-list-chat>
    </uni-list>
  </view>
</template>

<script>
export default {
  name: "myChat",
  props: {
    chatList: [],
  },
  data() {
    return {};
  },
  onLoad(query) {
    this.errMsg = query.errMsg || "";
  },
  methods: {
    onMessage: function(chatId) {
      console.log("chatId=", chatId);
      uni.navigateTo({
        url: "./message",
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
}
</style>

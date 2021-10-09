<template>
  <view class="content">
    <view
      class="my-group width100 border-bt"
      v-if="managedGroups && managedGroups.length > 0"
    >
      <view class="g-title">我管理的群组</view>
      <uni-row class="demo-uni-row">
        <my-group :groups="managedGroups" />
      </uni-row>
    </view>
    <view
      class="my-group width100 border-bt"
      v-if="auditGroups && auditGroups.length > 0"
    >
      <view class="g-title">审核中的群组</view>
      <uni-row class="demo-uni-row">
        <my-group :groups="auditGroups" />
      </uni-row>
    </view>
    <view
      class="my-group width100 border-bt"
      v-if="joinedGroups && joinedGroups.length > 0"
    >
      <view class="g-title">我加入的群组</view>
      <uni-row class="demo-uni-row">
        <my-group :groups="joinedGroups" />
      </uni-row>
    </view>
    <view class="my-group width100" v-if="groups && groups.length > 0">
      <view class="g-title">全部群组</view>
      <uni-row class="demo-uni-row">
        <my-group :groups="groups" />
      </uni-row>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
import myGroup from "../../components/my-group.vue";
export default {
  components: {
    myGroup,
  },
  data() {
    return {
      groups: [],
      auditGroups: [],
      managedGroups: [],
      joinedGroups: [],
    };
  },
  onShow() {
    api.pageGroup(1, 10).then((result) => {
      console.log("groups=", result);
      this.groups = result.groups;
    });
    api.listAuditGroup(1, 10).then((result) => {
      console.log("auditGroups=", result);
      this.auditGroups = result.groups;
    });
    api.listManagedGroup(1, 10).then((result) => {
      console.log("managedGroups=", result);
      this.managedGroups = result.groups;
    });
    api.listJoinedGroup(1, 10).then((result) => {
      console.log("joinedGroups=", result);
      this.joinedGroups = result.groups;
    });
  },
  onLoad() {},
  methods: {},
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
  margin-top: 30rpx;
}

.g-title {
  padding-left: 20rpx;
  padding-bottom: 20rpx;
  font-size: 40rpx;
  font-weight: bold;
}

.border-bt {
  border-bottom: 1rpx #eeeeee solid;
}
</style>

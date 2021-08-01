<template>
  <view class="content pd-40">
    <view class="panel pd-b-20 border-bottom width100">
      <view class="panel-head">
        <view class="panel-head-title">我的爱好</view>
      </view>
      <view class="panel-body pd">
        <span
          class="my-tag"
          v-bind:class="tag.cl"
          v-for="tag in hobbies"
          :key="tag.content"
          v-on:click="removeIntrest(tag)"
        >
          {{ tag.content }}
        </span>
        <span class="my-tag customize-tag" @click="open">
          自定义
        </span>
      </view>
    </view>
    <view class="panel mg-top-40">
      <view class="panel-head">
        <view class="panel-head-title">可选爱好</view>
      </view>
      <view class="panel-body pd">
        <span
          class="my-tag bg-gray.light"
          v-for="tag in hobbyUnits"
          :key="tag.id"
          v-on:click="addIntrest(tag.content)"
        >
          {{ tag.content }}
        </span>
      </view>
    </view>
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog
        title="自定义"
        placeholder="请输入爱好"
        :value="selfDefined"
        mode="input"
        message="成功"
        :duration="2000"
        @close="selfDefinedClose"
        @confirm="selfDefinedConfirm"
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
      selfDefined: "",
      hobbies: [],
      hobbyUnits: [],
    };
  },
  onLoad() {
    api.getHobbies().then((result) => {
      this.hobbies = result.hobbies;
      this.hobbyUnits = result.hobbyUnits;
    });
  },
  methods: {
    addIntrest(content) {
      api.addHobby(content).then((result) => {
        this.pushHobby(content);
      });
    },
    removeIntrest(tag) {
      var index = this.hobbies.indexOf(tag);
      if (index > -1) {
        api.delHobby(tag.content).then((result) => {
          this.hobbies.splice(index, 1);
        });
      }
    },
    open() {
      this.$refs.popup.open("center");
    },
    selfDefinedConfirm(done, value) {
      this.addIntrest(value);
      done();
    },
    selfDefinedClose() {
      this.$refs.popup.close();
    },
    pushHobby(content) {
      for (var i = 0; i < this.hobbies.length; i++) {
        if (this.hobbies[i].content == content) {
          return;
        }
      }
      var t = {
        content: content,
        cl: "bg-gray.light",
      };
      this.hobbies.push(t);
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

.customize-tag {
  border: 1rpx gray dashed;
}

.panel-head-title {
  font-size: 35rpx;
  font-weight: bold;
  padding: 10rpx;
}
</style>

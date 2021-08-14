<template>
  <view class="content">
    <view class="apply width100">
      <view class="head">
        <view class="logo">
          <image :src="group.logoSmall"></image>
        </view>
        <view class="name-info">
          <view class="name title">
            <text>{{ group.name }}</text>
          </view>
          <view class="info">
            <text>共 {{ group.memberCount }} 人</text>
            <text>
              ( 男 {{ group.maleCount }} 人 / 女 {{ group.femaleCount }} 人)
            </text>
          </view>
        </view>
      </view>
      <view class="description">
        <text>{{ group.description }}</text>
      </view>
      <view class="admin-list">
        <view class="pd-l-r-20 text-bold ft-35">管理员</view>
        <view class="admin" v-for="admin in group.admins" :key="admin.userId">
          <view class="avatar">
            <image :src="admin.avatar"></image>
          </view>
          <view class="name">
            <text>{{ admin.name }}</text>
          </view>
        </view>
      </view>
      <view class="reject-info" v-if="applyStatus === 'REJECTED'">
        <text>
          你在 {{ apply.createTimeStr }} 提交的申请被管理员拒绝，拒绝原因：
          {{ apply.reason }}
          请按照申请规则要求，重新提交
        </text>
      </view>
      <view class="apply" v-if="!applying">
        <view
          class="profile"
          v-if="
            group.profileRequirementArray &&
              group.profileRequirementArray.length > 0
          "
        >
          <view class="pd-40 text-bold ft-35 width100">
            个人信息
          </view>
          <view class="detail">
            <view v-if="needName" class="pd-20">
              <text class="profile-title">姓名: </text>
              <text class="ft-cl-gray" v-if="profile.name">{{
                profile.name
              }}</text>
              <text class="ft-cl-red" v-if="!profile.name">
                未知，点击此处填写 >>
              </text>
            </view>
            <view v-if="needBirthday" class="pd-20">
              <text class="profile-title">生日: </text>
              <text
                class="ft-cl-gray"
                v-if="profile.birthday && profile.age > 12"
              >
                {{ profile.birthday }}&nbsp;年
              </text>
              <text
                class="ft-cl-red"
                v-if="!profile.birthday || profile.age < 12"
                v-on:click="onEdit('birthday', profile.birthday)"
              >
                未知，点击此处填写 >>
              </text>
            </view>
            <view v-if="needBornCity" class="pd-20">
              <text class="profile-title">籍贯: </text>
              <text class="ft-cl-gray" v-if="profile.bornCity">
                {{ profile.bornCity }}
              </text>
              <text
                class="ft-cl-red"
                v-if="!profile.bornCity"
                v-on:click="onEdit('bornCity', profile.bornCity)"
              >
                未知，点击此处填写 >>
              </text>
            </view>
            <view v-if="needEdu" class="pd-20">
              <text class="profile-title">学校: </text>
              <text class="ft-cl-gray" v-if="profile.edu">
                {{ profile.edu }}
              </text>
              <text
                class="ft-cl-red"
                v-if="!profile.edu"
                v-on:click="onEdit('edu', profile.edu)"
              >
                未知，点击此处填写 >>
              </text>
            </view>
            <view v-if="needLiveCity" class="pd-20">
              <text class="profile-title">现居地: </text>
              <text class="ft-cl-gray" v-if="profile.liveCity">
                {{ profile.liveCity }}
              </text>
              <text
                class="ft-cl-red"
                v-if="!profile.liveCity"
                v-on:click="onEdit('liveCity', profile.liveCity)"
              >
                未知，点击此处填写 >>
              </text>
            </view>
          </view>
        </view>
        <view class="certify">
          <view class="cover-area">
            <view class="pd-40 text-bold ft-35 width100">
              相关证明
            </view>
            <view class="width100 pd-l-40 pb-tb-20 ft-cl-red">
              <text>{{ group.certifyRequirements }}</text>
            </view>
            <view
              class="cover img"
              v-for="(cover, idx) in images"
              :key="cover.url"
              v-on:longpress="deleteImage(idx)"
            >
              <image :src="cover.url" mode="heightFix"></image>
            </view>
            <view class="cover add" v-on:click="choseImage('add', 0)">
              <image src="/static/image/plus-gray.png" mode="widthFix"></image>
            </view>
          </view>
          <view class="tips width100">
            <text>注：图片可通过长按删除</text>
          </view>
        </view>
        <view
          class="width100"
          style="text-align:right; margin-right: 100rpx; margin-top: 20rpx"
        >
          <button
            class="mini-btn mg-r-40"
            type="primary"
            size="mini"
            v-on:click="onSave()"
          >
            提交
          </button>
        </view>

        <uni-popup ref="popup" type="dialog">
          <uni-popup-dialog
            mode="base"
            type="warn"
            title="删除确认"
            content="确认删除图片？"
            :duration="2000"
            :before-close="true"
            @close="closePopup"
            @confirm="confirmDeleteImage"
          ></uni-popup-dialog>
        </uni-popup>
      </view>
      <view class="applying width100" v-if="applying">
        <view>
          <text>申请已提交，请耐心等待 >>>>>></text>
        </view>
        <view class="pd-tb-40">
          <button
            class="mini-btn mg-r-40"
            type="warn"
            size="mini"
            v-on:click="onCancel()"
          >
            取消
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import api from "@/static/js/api.js";
export default {
  components: {},
  data() {
    return {
      groupId: 0,
      group: {},
      images: [],
      profile: {},
      needName: false,
      needBirthday: false,
      needBornCity: false,
      needEdu: false,
      needLiveCity: false,
      applying: false,
      applyStatus: "",
      apply: {},
    };
  },
  onShow() {
    const groupId = this.groupId;
    if (groupId == undefined || groupId == null) {
      return;
    }
    this.onLoadData(groupId);
  },
  onLoad(option) {
    var groupId = option.groupId;
    this.groupId = groupId;
  },
  methods: {
    onLoadData: function(groupId) {
      console.log("groupId=", groupId);
      api.joinGroupTip(groupId).then((result) => {
        console.log("joinGroupTip=", result);
        this.group = result.group;
        this.profile = result.profile;
        this.apply = result.apply;
        if (
          this.group.profileRequirementArray != undefined &&
          this.group.profileRequirementArray.length > 0
        ) {
          this.needName = this.group.profileRequirementArray.includes("name");
          this.needBirthday = this.group.profileRequirementArray.includes(
            "birthday"
          );
          this.needBornCity = this.group.profileRequirementArray.includes(
            "bornCity"
          );
          this.needEdu = this.group.profileRequirementArray.includes("edu");
          this.needLiveCity = this.group.profileRequirementArray.includes(
            "liveCity"
          );
        }
        if (this.apply != undefined && this.apply != null) {
          this.applyStatus = this.apply.status;
        }
        if (
          this.apply != undefined &&
          this.apply != null &&
          this.apply.status == "APPLYING"
        ) {
          this.applying = true;
        }
      });
    },
    onEdit: function(key, value) {
      uni.setStorage({
        key: "groupId",
        data: this.groupId,
      });
      var url = `/pages/me/editor/index?key=${key}`;
      if (value != undefined) {
        url = `/pages/me/editor/index?key=${key}&value=${value}`;
      }
      uni.navigateTo({
        url: url,
      });
    },
    deleteImage(idx) {
      this.imageIdx = idx;
      this.$refs.popup.open();
    },
    confirmDeleteImage() {
      console.log("confirmDeleteImage=", this.imageIdx);
      var newImages = [];
      for (var i = 0; i < this.images.length; i++) {
        if (this.imageIdx != i) {
          newImages.push(this.images[i]);
        }
      }
      this.images = newImages;
      this.$refs.popup.close();
    },
    choseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (chooseImageRes) => {
          wx.getImageInfo({
            src: chooseImageRes.tempFilePaths[0],
          }).then((result) => {
            var max = Math.max(result.width, result.height);
            var rate = 100;
            if (max > 600) {
              rate = 100 / (max / 600);
            }
            wx.compressImage({
              src: chooseImageRes.tempFilePaths[0], // 图片路径
              quality: rate, // 压缩质量
            }).then((result) => {
              const tempFilePaths = result.tempFilePath;
              wx.getFileInfo({
                filePath: tempFilePaths,
              }).then((res) => {
                console.log("imageSize=", res.size);
                if (res.size > 800 * 1024) {
                  uni.showToast({
                    title: "图片不能超过800kB",
                    icon: "error",
                  });
                } else {
                  api.uploadImageWithPath(tempFilePaths).then((res) => {
                    console.log("res=", res);
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
                    this.images.push(url);
                  });
                }
              });
            });
          });
        },
      });
    },
    onSave: function() {
      var data = {
        groupId: this.groupId,
        images: this.images,
      };
      api.applyGroup(data).then((result) => {
        uni.showToast({
          title: "申请成功",
          icon: "success",
        });
        api.sleep(2000).then((result) => {
          this.onLoadData(this.groupId);
        });
      });
    },
    onCancel: function() {
      var data = {
        groupId: this.groupId,
      };
      api.cancelApply(data).then((result) => {
        uni.showToast({
          title: "取消成功",
          icon: "success",
        });
        api.sleep(2000).then((result) => {
          this.applying = false;
          this.onLoadData(this.groupId);
        });
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
  padding-bottom: 300rpx;
}

.title {
  font-size: 45rpx;
  font-weight: bold;
}

.head {
  padding: 40rpx 0rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}

.head .logo image {
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
}

.head .name-info {
  padding-left: 40rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.head .name {
  padding: 5rpx;
}

.head .info {
  padding: 5rpx;
  color: gray;
}

.admin-list {
  width: 100%;
  display: flex;
  margin-top: 50rpx;
  align-items: flex-start;
  padding: 20rpx;
  box-shadow: 0 0 0.1em #ddd, 0 0 0.6em #ddd;
}

.admin-list .admin {
  margin-left: 40rpx;
}

.admin .name {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.avatar image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 10%;
}

.description {
  margin-top: 20rpx;
  padding: 0rpx 60rpx;
  color: gray;
  line-height: 45rpx;
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
  width: 300rpx;
  height: 200rpx;
  margin-left: 50rpx;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin-top: 20rpx;
}

.cover-area .img image {
  width: 300rpx;
  height: 200rpx;
  border-radius: 10rpx;
}

.cover-area .add image {
  width: 200rpx;
  height: 160rpx;
}

.tips {
  color: gray;
  padding-left: 40rpx;
}

.profile .detail {
  display: flex;
  flex-direction: column;
}

.profile-title {
  font-size: 30rpx;
  padding-left: 40rpx;
  font-weight: bold;
  padding-right: 20rpx;
}
.applying {
  padding: 50rpx;
  margin-top: 50rpx;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  font-size: 30rpx;
  color: rgb(221, 122, 10);
}
.reject-info {
  background-color: orangered;
  padding: 40rpx;
  color: white;
}
.reject-info text {
  line-height: 60rpx;
}
</style>

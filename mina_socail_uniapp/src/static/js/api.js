// import request from '@/api/request'; // 引入封装好的request

const host = "http://127.0.0.1:8080";
const isMock = false;

import mock from "./mock.js";
import http from "./http.js";

const headers = {
  channel: "SOCIAL",
  token: "TODO",
  "content-type": "application/json",
};

// 上传图片
function uploadImageWithFile(file) {
  var url = host + "/api/v1/base/upload/image";
  headers.token = http.getToken();
  return uni.uploadFile({
    url: url,
    filePath: "",
    file,
    file,
    name: "file",
    header: headers,
  });
}

function uploadImageWithPath(filePath) {
  headers.token = http.getToken();
  var url = host + "/api/v1/base/upload/image";
  uni.showLoading({
    title: "加载中...",
    mask: true,
  });
  return uni.uploadFile({
    url: url,
    filePath: filePath,
    name: "file",
    header: headers,
  });
}

function login() {
  console.log("ssssssssss");
  //   var url = host + "/api/v1/user/account/login/mini";
  wx.login({
    success(res) {
      console.log("resssssss=", res);
      http
        .post("/api/v1/user/account/login/mini", { code: res.code })
        .then((res) => {
          uni.setStorage({
            key: "token",
            data: res.token,
            success: function() {},
          });
        });
    },
    fail(err) {
      console.log("err", err);
    },
  });
}

function getToken() {
  try {
    const token = uni.getStorageSync("token");
    return token;
  } catch (e) {
    uni.showToast({ title: "获取token失败", icon: "none" });
  }
}

function saveProfile(avatar, name, gender) {
  var url = host + "/api/v1/user/profile/mini/update";
  var data = {
    avatar: avatar,
    name: name,
    gender: gender,
  };
  ppost(url, data).then((data) => {
    //data为一个数组，数组第一项为错误信息，第二项为返回数据
    var [error, res] = data;
    if (error != null) {
      console.log("error=", error);
      uni.showToast({ title: "更新资料失败", icon: "none" });
    } else {
      if (res.statusCode != 200) {
        uni.showToast({ title: res.statusCode, icon: "none" });
        return;
      }
      console.log("res=", res);
      if (res.data.code != 200) {
        uni.showToast({ title: "更新资料失败", icon: "none" });
        return;
      }
      uni.showToast({ title: "更新资料成功", icon: "none", duration: 2000 });
      sleep(1500).then(() => {
        uni.navigateTo({
          url: "/pages/login/mobile/index",
          events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            acceptDataFromOpenedPage: function(data) {
              console.log(data);
            },
            someEvent: function(data) {
              console.log(data);
            },
          },
          success: function(res) {
            console.log("success", res);
          },
          fail: function(res) {
            console.log("fail", res);
          },
        });
      });
    }
  });
}

function listCard() {
  if (isMock) return new Promise((resolve) => resolve(mock.listCard().data));
  return http.get("/incubator/social/card/recommend");
}

function getCardDetail(userId) {
  if (isMock) {
    return new Promise((resolve) => resolve(mock.getCardDetail(userId).data));
  }
  return http.get("/incubator/social/card/detail?userId=" + userId);
}

function listActivity() {
  if (isMock)
    return new Promise((resolve) => resolve(mock.listActivity().data));
  return http.get("/incubator/social/activity/list");
}

function getActivityDetail(activityId) {
  if (isMock)
    return new Promise((resolve) =>
      resolve(mock.getActivityDetail(activityId).data)
    );
  return http.get("/incubator/social/activity/detail?activityId=" + activityId);
}

function getMe() {
  if (isMock) return new Promise((resolve) => resolve(mock.getMe().data));
  return http.get("/incubator/social/me/detail");
}

function getGallery() {
  if (isMock) return new Promise((resolve) => resolve(mock.getGallery().data));
  return http.get("/incubator/social/me/gallery");
}

function updateProfile(data = {}) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/api/v1/user/profile/update", data);
}

function addUserImage(data = {}) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/api/v1/user/image/add", data);
}

function delUserImage(data = {}) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/api/v1/user/image/delete", data);
}

function replaceUserImage(data = {}) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/api/v1/user/image/replace", data);
}

function getHobbies() {
  if (isMock) return new Promise((resolve) => resolve(mock.getHobbies().data));
  return http.get("/incubator/social/me/hobbies");
}

function addHobby(content) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/me/hobby/add", { content: content });
}

function delHobby(content) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/me/hobby/del", { content: content });
}

function updateLove(data) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/me/love/update", data);
}

function saveOrUpdateActivity(data) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/activity/update", data);
}

function joinActivity(data) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/activity/join", data);
}

function cancelActivity(data) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/activity/cancel", data);
}

function closeActivity(data) {
  if (isMock) return new Promise((resolve) => resolve());
  return http.post("/incubator/social/activity/close", data);
}

// ====== 以下是基础方法 ========

function ppost(url, data) {
  var token = getToken();
  headers["token"] = token;
  return uni.request({
    method: "POST",
    url: url,
    data: data,
    header: headers,
  });
}

function gget(url, data) {
  var token = getToken();
  headers["token"] = token;
  return uni.request({
    method: "GET",
    url: url,
    data: data,
    header: headers,
  });
}

function onResponse(res) {
  console.log("response", res);
  if (res.statusCode == 200) {
    uni.showToast({
      title: "登录成功",
      icon: "success",
    });
  }
}

function onError(err) {
  uni.showToast({
    title: err.msg,
    icon: "none",
  });
}

// ====== 以下是工具类 ========
function showToast(title) {
  http.showToast(title);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  uploadImageWithFile,
  uploadImageWithPath,
  login,
  saveProfile,
  sleep,
  showToast,

  // social 业务
  listCard,
  getCardDetail,
  listActivity,
  getActivityDetail,
  getMe,
  getGallery,
  updateProfile,
  addUserImage,
  delUserImage,
  replaceUserImage,
  getHobbies,
  addHobby,
  delHobby,
  updateLove,
  saveOrUpdateActivity,
  joinActivity,
  cancelActivity,
  closeActivity,
};

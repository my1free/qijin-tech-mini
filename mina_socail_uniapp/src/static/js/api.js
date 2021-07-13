// import request from '@/api/request'; // 引入封装好的request

const host = "http://127.0.0.1:8080";
const isMock = true;

import mock from "./mock.js";
import post from "./http.js";
import get from "./http.js";
import http from "./http.js";

const headers = {
  channel: "SOCIAL",
  token: "TODO",
  "content-type": "application/json",
};

// 上传图片
function uploadImageWithFile(file) {
  var url = host + "/api/v1/base/upload/image";
  // return post(url, data)
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
  var url = host + "/api/v1/base/upload/image";
  // return post(url, data)
  return uni.uploadFile({
    url: url,
    filePath: filePath,
    name: "file",
    header: headers,
  });
}

function login() {
  var url = host + "/api/v1/user/account/login/mini";
  wx.login({
    success(res) {
      ppost(url, { code: res.code }).then((res) => {
        var data = res[1].data;
        if (data.code == 200) {
          uni.setStorage({
            key: "token",
            data: data.data.token,
            success: function() {
              console.log("success");
            },
          });
        } else if (data.code == 401) {
          // 跳转到信息补充页面
        }
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  uploadImageWithFile,
  uploadImageWithPath,
  login,
  saveProfile,
  sleep,

  // social 业务
  listCard,
  getCardDetail,
};

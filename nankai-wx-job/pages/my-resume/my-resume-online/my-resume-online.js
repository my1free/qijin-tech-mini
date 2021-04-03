// pages/my-resume/my-resume-online/my-resume-online.js

var util = require('../../../utils/util.js');
var common = require('../../../utils/common.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    onlineResume: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindOnlineResumeInput: function (e) {
    var onlineResume = e.detail.value
    console.log("[bindOnlineResumeInput] onlineResume=", onlineResume)
    this.setData({
      onlineResume: onlineResume
    })
  },

  saveUserInfo: function () {
    var url = app.globalData.host + "/user/resume/online"
    var data = {
      "sessionId": util.getSessionId(),
      "onlineResume": this.data.onlineResume
    }
    
    util.httpPost(url, data, {
      do: function (res) {
        util.toast("保存成功", 1000)
      }
    })
  }
})
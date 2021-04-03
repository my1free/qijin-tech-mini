// pages/my-index/my-index.js

var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isCandidate: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var isCandidate = util.isCandidate()
    this.setData({
      isCandidate: isCandidate
    })
    console.log("[my-index] isCandidate=", isCandidate)
    console.log("[my-index] onload app.globalData=", app.globalData)
    if (app.globalData.userInfo) {
      console.log("[my-index] user info already exists. userInfo=", app.globalData)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: app.globalData.hasUserInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      console.log("[my-index] canIUse=true")
      app.userInfoReadyCallback = res => {
        console.log("[my-index] user info is", res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: res.hasUserInfo
        })
      }
    } else {
      console.log("[my-index] user info not exists")
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.hasUserInfo= true
          this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: app.globalData.hasUserInfo
          })
        }
      })
    }

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

  //获取用户信息
  getUserInfo: function (e) {
    console.log("[getUserInfo] 获取用户信息", e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.hasUserInfo = true
    // console.log(app.globalData.hasUserInfo)
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: app.globalData.hasUserInfo
    })
    var url = app.globalData.host + "/user/update"
    var data = {
      "sessionId": util.getSessionId(),
      "name": app.globalData.userInfo.nickName,
      "avatar": app.globalData.userInfo.avatarUrl
    }
    util.httpPost(url, data, {
      do: function (res) {
        console.log("[my-index] save user info success")
      }
    })
    wx.navigateTo({
      url: '../my-info/my-info',
    })
  },

  myResumeBtn: function(e){
    // console.log(app.globalData.hasUserInfo)
    wx.navigateTo({
      url: '/pages/my-resume/my-resume-local/my-resume-local',
    })
  },

  myCollectionBtn: function (e) {
    wx.navigateTo({
      url: '../my-collection/my-collection',
    })
  },

  myConcernedBtn: function (e) {
    wx.navigateTo({
      url: '../my-concerned/my-concerned',
    })
  },

  myDeliveryBtn: function (e) {
    wx.navigateTo({
      url: '../my-delivery/my-delivery',
    })
  },

  feedbackTap: function(e){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  changeUserTypeTap: function(){
    util.changeUserType(this)
  }
})
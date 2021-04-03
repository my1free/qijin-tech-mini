// pages/my-info/my-info-edit/my-info-edit.js

var util = require('../../../utils/util.js');
var common = require('../../../utils/common.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: null,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var types = options.types
    console.log("[onLoad] types=", types)
    this.setData({
      types: types
    })
    common.userInfo(this)
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

  bindEmailInput: function (e) {
    console.log(e.detail.value)
    var newUserInfo = this.data.userInfo
    newUserInfo.email = e.detail.value
    console.log("[bindEmailInput] newUserInfo=", newUserInfo)
    this.setData({
      userInfo: newUserInfo
    })
  },

  bindMobileInput: function (e) {
    console.log(e.detail.value)
    var newUserInfo = this.data.userInfo
    newUserInfo.mobile = e.detail.value
    console.log("[bindMobileInput] newUserInfo=", newUserInfo)
    this.setData({
      userInfo: newUserInfo
    })
  },

  bindWeChatInput: function (e) {
    console.log(e.detail.value)
    var newUserInfo = this.data.userInfo
    newUserInfo.wechat = e.detail.value
    console.log("[bindWeChatInput] newUserInfo=", newUserInfo)
    this.setData({
      userInfo: newUserInfo
    })
  },

  /**
   * 保存用户信息
   */
  saveUserInfo: function(){
    var url = app.globalData.host + "/user/update?sessionId=" + util.getSessionId()
    var userInfo = this.data.userInfo
    var types = this.data.types

    console.log("[saveUserInfo] data=", this.data)

    if(types == "email"){
      if(userInfo.email == undefined || userInfo.email == ""){
        util.toast("请输入邮箱", null)
        return;
      }
      url = url + "&email=" + userInfo.email
    }else if(types == "mobile"){
      if (userInfo.mobile == undefined || userInfo.mobile == "") {
        util.toast("请输入手机号", null)
        return;
      }
      url = url + "&mobile=" + userInfo.mobile
    }else if(types == "wechat"){
      if (userInfo.wechat == undefined || userInfo.wechat == "") {
        util.toast("请输入微信号", null)
        return;
      }
      url = url + "&wechat=" + userInfo.wechat
    }
    util.httpGet(url, {
      do: function(res){
        util.toast("保存成功", 1000)
      }
    })
  }
})
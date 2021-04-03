// pages/my-info/my-info.js
var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
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
    common.userInfo(this)
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

  infoEditBtn: function(e){
    var types = e.currentTarget.dataset.type
    console.log("[infoEditBtn] type=", types)
    wx.navigateTo({
      url: '../my-info/my-info-edit/my-info-edit?types=' + types
    })
  }
})
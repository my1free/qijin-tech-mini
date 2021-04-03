// pages/feedback/feedback.js

var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback: null,
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

  feedbackConfirm: function(e){
    var content = e.detail.value;
    console.log("[feedbackConfirm] content=", content)
    this.setData({
      feedback: content
    })
  },

  saveFeedback: function(){
    var feedback = this.data.feedback;
    console.log("[saveFeedback] feedback=", feedback)
    common.saveFeedback(this, feedback)
  }
})
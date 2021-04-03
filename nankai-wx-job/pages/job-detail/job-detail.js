// pages/seeker-detail/seeker-detail.js

var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobId: null,
    jobDetail: {},
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var jobId = options.id
    console.log("[job-detail] jobId: ", jobId)
    this.setData({
      jobId: jobId
    })

    common.jobDetail(this, jobId)

    //TODO 删除下面的代码
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
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

  //跳转到首页
  toHomePage: function(){
    wx.switchTab({
      url: '../index/index',
    })
  },

  //公司详情
  companyInfo: function(e){
    var companyId = e.currentTarget.dataset.id;
    console.log("[companyInfo]", companyId)
    wx.navigateTo({
      url: '../company/company?id=' + companyId,
    })
  },

  opsCollection: function(e){
    var page = this;
    var url = app.globalData.host + (page.data.collected ? '/user/collection/cancel' : '/user/collection/confirm')
    var data = {
      "sessionId": util.getSessionId(),
      "jobId": this.data.jobId
    }
    
    util.httpPost(url, data, {
      page: page,
      do: function(res){
        if(page.data.collected){
          util.toast("取消成功", 1000)  
        }else{
          util.toast("收藏成功", 1000)
        }
        page.setData({
          collected: !page.data.collected
        })
      }
    })
  },
})
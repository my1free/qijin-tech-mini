// pages/company/company.js

var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyId: 0,
    companyDetail: {},
    jobList:{},
    concerned: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var companyId = options.id
    console.log("[job-detail onLoad] companyId: ", companyId)
    this.setData({
      companyId: companyId
    })
    common.companyDetail(this, companyId)
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
    console.log("reach bottom")
    var companyIds = []
    companyIds.push(this.data.companyId)
    common.pageJobListWithCompany(this, companyIds)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //回到主页
  toHomePage: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  
  //关注该公司
  focusOnCompany: function(e){
    console.log("focusOn");
    console.log(e);
  },

  //job详情
  jobDetailTap: function (e) {
    var jobId = e.currentTarget.dataset.jobid
    wx.navigateTo({
      url: '../job-detail/job-detail?id=' + jobId
    })
  },

  opsConcerned: function (e) {
    var page = this;
    var url = app.globalData.host + (page.data.concerned ? '/user/concerned/cancel' : '/user/concerned/confirm')
    var data = {
      "sessionId": util.getSessionId(),
      "companyId": this.data.companyId
    }

    util.httpPost(url, data, {
      page: page,
      do: function (res) {
        if (page.data.concerned) {
          util.toast("取消成功", 1000)
        } else {
          util.toast("关注成功", 1000)
        }
        page.setData({
          concerned: !page.data.concerned
        })
      }
    })
  }
})
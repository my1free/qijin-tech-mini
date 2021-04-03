// pages/my-collection/my-collection.js

var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.collectedJobList(this)
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

  //job详情
  jobDetailTap: function (e) {
    // console.log(e.currentTarget.dataset.jobid)
    var jobId = e.currentTarget.dataset.jobid
    wx.navigateTo({
      url: '../job-detail/job-detail?id=' + jobId
    })
  },

  //取消收藏
  cancelCollection: function (e) {
    var page = this;
    var jobId = e.currentTarget.dataset.jobid
    wx.showModal({
      title: '提示',
      content: '确定取消收藏？',
      success: function (res) {
        if (res.confirm) {
          console.log('[cancelCollection] 用户点击确定')
          var url = app.globalData.host + '/user/cancelCollection'
          var data = {
            "sessionId": util.getSessionId(),
            "jobId": jobId
          }

          util.httpPost(url, data, {
            page: page,
            do: function (res) {
              var newJobList = []
              page.data.jobList.forEach(function (e, i) {
                if (e.id != jobId){
                  newJobList.push(e)
                }
              })
              page.setData({
                jobList: newJobList
              })
            }
          })
        } else if (res.cancel) {
          console.log('[cancelCollection] 用户点击取消')
        }
      }
    })
  }
})
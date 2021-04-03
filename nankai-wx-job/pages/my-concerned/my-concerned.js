// pages/my-concerned/my-concerned.js


var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCompany:true,
    companyList: [],
    jobList: []
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
    common.concernedList(this)
    common.concernedJobList(this)
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
    console.log("showCompany", this.data.showCompany)
    if (this.data.showCompany){
      //显示company
    }else{
      //显示Job
      common.pageConcernedJobList(this)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  showCompanyList: function(){
    // companyAnimation.translateX(604).step({ duration: 500 });
    // jobAnimation.translateX(604).step({ duration: 500 });
    this.setData({
      showCompany: true,
      // companyAnimation: companyAnimation.export(),
      // jobAnimation: jobAnimation.export()
    })
  },

  showJobList: function () {
    // companyAnimation.translateX(-604).step({ duration: 500 });
    // jobAnimation.translateX(-604).step({ duration: 500 });
    this.setData({
      showCompany: false,
      // companyAnimation: companyAnimation.export(),
      // jobAnimation: jobAnimation.export()
    })
  },
  //公司详情
  companyInfo: function (e) {
    var companyId = e.currentTarget.dataset.id;
    console.log("[companyInfo]", companyId)
    wx.navigateTo({
      url: '../company/company?id=' + companyId,
    })
  },
  //job详情
  jobDetailTap: function (e) {
    var jobId = e.currentTarget.dataset.jobid
    wx.navigateTo({
      url: '../job-detail/job-detail?id=' + jobId
    })
  },

})
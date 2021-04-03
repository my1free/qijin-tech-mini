// pages/search/search.js

var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //city相关
    cityOption: {},
    cityIndex: 0,
    currCityId: 0,

    //搜索相关
    keyword: "",
    hotTag: ["Java", "美团", "阿里", "C++", "算法", "实习"],
    currKeyword: "",

    //job list相关
    jobList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.jobListNavi(this)
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
    common.pageJobListWithKeyword(this, this.data.currCityId, this.data.currKeyword)
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

  bindCityPicker: function(e){
    // console.log('picker发送选择改变，携带值为', e.detail.value);
    var pickerIndex = e.detail.value
    var cityId = this.data.cityOption.ids[pickerIndex];
    console.log('cityId is', cityId);
    this.setData({
      cityIndex: e.detail.value,
      currCityId: cityId
    })
    var keyword = this.data.currKeyword;
    if(keyword == null || keyword == ""){
      console.log("eeee")
      return;
    }
    common.jobListWithKeyword(this, cityId, keyword)
  },

  bindKeywordInput: function(e){
    console.log(e.detail.value)
    this.setData({
      keyword: e.detail.value
    })
  },

  //按关键词搜索
  doSearch: function(e){
    console.log("要搜索的关键词是：", this.data.keyword)
    this.setData({
      currKeyword: this.data.keyword
    })
    common.jobListWithKeyword(this, this.data.currCityId, this.data.keyword)
  },

  selectKeyword: function(e){
    console.log("select keyword:", e.currentTarget.dataset.word)
    this.setData({
      keyword: e.currentTarget.dataset.word
    })
  }
})

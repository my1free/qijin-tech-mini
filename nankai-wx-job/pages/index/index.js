//index.js
//获取应用实例
// const app = getApp()
var util = require('../../utils/util.js');
var common = require('../../utils/common.js');

Page({
  data: {
    jobList: [],
    categoryList: [{ "id": "c0", "name": "不限" }, { "id": "c10", "name": "开发" }, { "id": "c11", "name": "测试" }, { "id": "c12", "name": "产品" }, { "id": "c13", "name": "HR" }],
    
    //city相关
    cityOption: {},
    cityIndex: 0,

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
    currCityId: 0,
    currCategoryId: 0,

    
    tabIndex: 0,
    scrollId: "c0",
  },
  onLoad: function () {
    var page = this
    common.jobListNavi(this)
    common.jobList(this, 0, 0)
  },
  onReachBottom: function () {
    common.pageJobList(this, this.data.currCityId, this.data.currCategoryId);
  },
  

  //job详情
  jobDetailTap: function (e) {
    // console.log(e.currentTarget.dataset.jobid)
    var jobId = e.currentTarget.dataset.jobid
    wx.navigateTo({
      url: '../job-detail/job-detail?id=' + jobId
    })
  },
  
  bindCityPicker: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value);
    var pickerIndex = e.detail.value
    var cityId = this.data.cityOption.ids[pickerIndex];
    // console.log("cityId is:", cityId)
    common.jobList(this, cityId, this.data.currCategoryId)
    this.setData({
      cityIndex: pickerIndex,
      currCityId: cityId
    })
    //TODO do search witch city
  },

  switchTab: function(e){
    console.log("categoryId is: ", e.target.id)
    var cId = e.target.id;
    var categoryId = cId.substring(1, cId.length)
    console.log("new categoryId is: ", categoryId)
    common.jobList(this, this.data.currCityId, categoryId)
    this.setData({
      tabIndex:e.target.dataset.index,
      scrollId:e.target.id,
      currCategoryId: categoryId
    });
  },
})

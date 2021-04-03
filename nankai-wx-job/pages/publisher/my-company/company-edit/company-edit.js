// pages/publisher/my-company/company-edit/company-edit.js
var util = require('../../../../utils/util.js');
var common = require('../../../../utils/common.js');

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyId: 0,
    company: {
      "id": 10,
      "name": "美团",
      "logo": "http://opopjydml.bkt.clouddn.com/meituan.png",
      "fullname": "北京三快在线科技有限公司",
      "locations": [{ "lng": "116.488126", "lat": "40.008776", "title": "恒电大厦", "address": "北京市朝阳区望京东路6号阿斯顿发发发" }, { "lng": "116.479376", "lat": "40.012245", "address": "北京市朝阳区望京北路1号", "title": "数码港大厦" }],
      "introduction": "美团网，是2010年3月4日成立的团购网站。美团网有着“吃喝玩乐全都有”和“美团一次美一次”的服务宣传宗旨。总部位美团网，是2010年3月4日成立的团购网站。美团网有着“吃喝玩乐全都有”和“美团一次美一次”的服务宣传宗旨。总部位美团网，是2010年3月4日成立的团购网站。美团网有着“吃喝玩乐全都有”和“美团一次美一次”的服务宣传宗旨。总部位"
    },
    name: "",
    fullname: "",
    addedLocations: [],
    modifiedLocations: [],
    removedLocations: [],
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("[editCompany onLoad] companyId=", options.id)
    options.id = 1
    this.setData({
      companyId: options.id
    })
    common.companyInfo(this, options.id)
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
    console.log(app.location)
    if(app.location != null){
      var locations = this.data.company.locations
      locations.push(app.location)
      var company = this.data.company
      company.locations = locations
      console.log("comany=", company)
      this.setData({
        company: company
      })
    }
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

  bindInputName: function(e){
    console.log("name=", e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },

  bindInputFullname: function(e){
    console.log("fullname=", e.detail.value)
    this.setData({
      fullname: e.detail.value
    })
  },

  bindInputIntroduction: function(e){
    console.info("introduction=", e.detail.value)
    this.setData({
      introduction: e.detail.value
    })
  },

  removeLocation: function(e){
    var locationId = e.currentTarget.dataset.id
    var idx = e.currentTarget.dataset.idx
    console.log("location id=", locationId)
    console.log("location idx=", idx)
    
    var locations = []
    this.data.company.locations.forEach(function(ele, i){
      if(i != idx){
        locations.push(ele)
      }
    })
    var company = this.data.company
    company.locations = locations
    this.setData({
      company: company
    })
    if(locationId != undefined && locationId != null){
      var removedLocations = this.data.removedLocations
      removedLocations.push({id: locationId}) 
      this.setData({
        removedLocations: removedLocations
      })
    }
  },

  addLocation: function(){
    wx.navigateTo({
      url: '/pages/map/map-add/map-add',
    })
  }
})
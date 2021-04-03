// pages/publisher/my-company/my-company.js

var util = require('../../../utils/util.js');
var common = require('../../../utils/common.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMask: {},
    companies: [
      {
        "id": 10,
        "name": "美团",
        "logo": "http://opopjydml.bkt.clouddn.com/meituan.png",
        "fullname": "北京三快在线科技有限公司",
        "locations": [{ "lng": "116.488126", "lat": "40.008776", "title": "恒电大厦", "address": "北京市朝阳区望京东路6号阿斯顿发发发" }, { "lng": "116.479376", "lat": "40.012245", "address":"北京市朝阳区望京北路1号", "title": "数码港大厦" }],
        "introduction":"美团网，是2010年3月4日成立的团购网站。美团网有着“吃喝玩乐全都有”和“美团一次美一次”的服务宣传宗旨。总部位美团网，是2010年3月4日成立的团购网站。美团网有着“吃喝玩乐全都有”和“美团一次美一次”的服务宣传宗旨。总部位美团网，是2010年3月4日成立的团购网站。美团网有着“吃喝玩乐全都有”和“美团一次美一次”的服务宣传宗旨。总部位"
      },
      {
        "id": 12,
        "name": "阿里巴巴",
        "logo": "http://opopjydml.bkt.clouddn.com/alibaba-logo.png",
        "fullname": "北京三快在线科技有限公司",
        "locations": [{ "lng": "116.487793", "lat":"39.999793", "address":"北京市朝阳区宏泰东街东", "title": "绿地中心" }],
        "introduction": "美团网，是2010年3月4日成立的团购网站。\n美团网，是2010年3月4日成立的团购网站\n美团网美团网美团网美团网美团网美团网美美团网美团网美团网美团网美团网美团网美"
      }
    ]
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
    common.companyList(this)
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


  bindFoldMask: function(e){
    var id = e.currentTarget.dataset.id;
    var showMask = this.data.showMask;
    if(showMask[id] == 1){
      showMask[id] = 2
      this.setData({
        showMask: showMask
      })
    }else if(showMask[id] == 2){
      showMask[id] = 1
      this.setData({
        showMask: showMask
      })
    }
  },

  addCompany: function(){
    wx.navigateTo({
      url: '/pages/publisher/my-company/company-search/company-search',
    })
  },

  editCompany: function(e){
    var companyId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/publisher/my-company/company-edit/company-edit?id=' + companyId,
    })
  }
})
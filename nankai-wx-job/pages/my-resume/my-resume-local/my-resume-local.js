// pages/my-resume/my-resume-local/my-resume-local.js

var util = require('../../../utils/util.js');
var common = require('../../../utils/common.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userDto: null,
    workExp: [
      {
        "id": 10,
        "company": "美团",
        "startDate": "2015-11",
        "endDate": "2018-07",
        "position": "服务端工程师",
        "content": "负责支付平台的会员系统、交易系统、支付系统、生活服务缴费、促销系统等模块的开发工作； 持续优化性能，提升系统稳定性以及提高系统的并发处理能力。 \n1.本科或本科以上学历，计算机相关专业者优先，三年以上大中型软件开发经验； \n2.熟悉Java/PHP这几种语言中的至少一种； \n3.优秀的数据库设计和优化能力，至少精通一种数据库应用，精通Mysql数据库应用者优先； \n4.对数据结构，算法设计，设计模式具有深刻的理解； \n5.良好的发现问题并解决问题的能力； \n6.学习能力强，拥有优秀的逻辑思维能力；\n 7.有较好的沟通交流能力，能够迅速融入团队"
      },
      {
        "id": 23,
        "company": "美团",
        "startDate": "2015-11",
        "endDate": null,
        "position": "服务端工程师",
        "content": "负责支付平台的会员系统、交易系统、支付系统、生活服务缴费、促销系统等模块的开发工作； 持续优化性能，提升系统稳定性以及提高系统的并发处理能力。 \n1.本科或本科以上学历，计算机相关专业者优先，三年以上大中型软件开发经验； \n2.熟悉Java/PHP这几种语言中的至少一种； \n3.优秀的数据库设计和优化能力，至少精通一种数据库应用，精通Mysql数据库应用者优先； \n4.对数据结构，算法设计，设计模式具有深刻的理解； \n5.良好的发现问题并解决问题的能力； \n6.学习能力强，拥有优秀的逻辑思维能力；\n 7.有较好的沟通交流能力，能够迅速融入团队"
      }
    ],
    eduExp: [
      {
        "id": 23,
        "university": "南开大学",
        "startTime": "2006",
        "endTime": "2010",
        "degree": "本科",
        "specialty": "光电子技术科学"
      },
      {
        "id": 25,
        "university": "清华大学",
        "startTime": "2010",
        "endTime": "2013",
        "degree": "硕士研究生",
        "specialty": "计算机科学技术"
      }
    ],
    showDict: {},
    personalEvaluation: "阿斯顿发顺丰撒飞洒发所发生的发顺丰舒服舒服阿士大夫撒飞洒发顺丰是飞洒发是飞洒发是否是"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.resume(this)

    console.log("app.globalData.userInfo=", app.globalData.userInfo)
    if (app.globalData.userInfo) {
      console.log("[my-index] user info already exists. userInfo=", app.globalData)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: app.globalData.hasUserInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      console.log("[my-index] canIUse=true")
      app.userInfoReadyCallback = res => {
        console.log("user info is", res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: res.hasUserInfo
        })
      }
    } else {
      console.log("[my-index] user info not exists")
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.hasUserInfo = true
          this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: app.globalData.hasUserInfo
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
    common.resume(this)
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

  //获取用户信息
  getUserInfo: function (e) {
    console.log("[getUserInfo] 获取用户信息", e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.hasUserInfo = true
    // console.log(app.globalData.hasUserInfo)
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: app.globalData.hasUserInfo
    })
    var url = app.globalData.host + "/user/update"
    var data = {
      "sessionId": util.getSessionId(),
      "name": app.globalData.userInfo.nickName,
      "avatar": app.globalData.userInfo.avatarUrl
    }
    util.httpPost(url, data, {
      do: function (res) {
        console.log("[my-index] save user info success")
      }
    })
  },

  infoEditBtn: function (e) {
    var types = e.currentTarget.dataset.type
    console.log("[infoEditBtn] type=", types)
    wx.navigateTo({
      url: '/pages/my-info/my-info-edit/my-info-edit?types=' + types
    })
  },


  editWorkExp: function(e){
    console.log("[editWorkExp] id=", e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/my-resume/my-resume-add/my-resume-add?types=work&id=' + e.currentTarget.dataset.id,
    })
  },

  delWorkExp: function (e) {
    console.log("[delWorkExp] id=", e.currentTarget.dataset.id)
  },

  showWorkDesc: function(e){
    var id = e.currentTarget.dataset.id
    console.log("[showWorkDesc] id", e.currentTarget.dataset.id)
    var showDict = this.data.showDict
    if (!showDict[id]){
      showDict[id] = true
    }else{
      showDict[id] = false
    }
    this.setData({
      showDict: showDict
    })
  },

  addWorkExp: function(){
    wx.navigateTo({
      url: '/pages/my-resume/my-resume-add/my-resume-add?types=work',
    })
  },

  addEduExp: function () {
    wx.navigateTo({
      url: '/pages/my-resume/my-resume-add/my-resume-add?types=edu',
    })
  },

  editEduExp: function (e) {
    console.log("[editEduExp] id=", e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/my-resume/my-resume-add/my-resume-add?types=edu&id=' + e.currentTarget.dataset.id,
    })
  },
})
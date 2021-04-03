// pages/my-resume/my-resume-add/my-resume-add.js

var util = require('../../../utils/util.js');
var common = require('../../../utils/common.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: null,
    company: null,
    school: null,
    startDate: "",
    endDate: "",
    position: null,
    major: null,
    content: null,
    workexp: null,
    eduexp: null,
    id: null,
    degreeArr: ["本科", "硕士", "博士"],
    degreeIndex: 0,
    degree: "本科",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id
    var types = options.types
    if (types == undefined) {
      types = "edu"
    }
    this.setData({
      types: types
    })
    if (id != null && id != undefined) {
      this.setData({
        id: id,
      })
      if ("edu" == types) {
        common.eduexp(this, id)
      } else {
        common.workexp(this, id)
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  companyInput: function(e) {
    var company = e.detail.value
    console.log("[companyInput] company=", company)
    this.setData({
      company: company
    })
  },

  schoolInput: function (e) {
    var school = e.detail.value
    console.log("[schoolInput] school=", school)
    this.setData({
      school: school
    })
  },

  startDatePickerChange: function(e) {
    var startDate = e.detail.value
    console.log("[startDatePickerChange] startDate=", startDate)
    this.setData({
      startDate: startDate
    })
  },

  endDatePickerChange: function(e) {
    var endDate = e.detail.value
    console.log("[endDatePickerChange] endDate=", endDate)
    this.setData({
      endDate: endDate
    })
  },

  degreePickerChange: function(e) {
    var index = e.detail.value
    var degree = this.data.degreeArr[index]
    this.setData({
      degreeIndex: index,
      degree: degree
    })
  },

  positionInput: function(e) {
    var position = e.detail.value
    console.log("[positionInput] position=", position)
    this.setData({
      position: position
    })
  },

  majorInput: function (e) {
    var major = e.detail.value
    console.log("[majorInput] major=", major)
    this.setData({
      major: major
    })
  },

  workContentConfirm: function(e) {
    var content = e.detail.value;
    console.log("[workContentConfirm] content=", content)
    this.setData({
      content: content
    })
  },

  updateWorkexp: function() {
    console.log("[updateWorkwxp]")
    var url = app.globalData.host + "/user/resume/workexp/update"
    var id = this.data.id
    var data = {
      "sessionId": util.getSessionId(),
      "id": id
    }
    if (this.data.company != null && this.data.company != "") {
      data.company = this.data.company
    }
    if (this.data.startDate != null && this.data.startDate != "") {
      data.startDate = this.data.startDate;
    }
    if (this.data.endDate != null && this.data.endDate != "") {
      data.endDate = this.data.endDate;
    }
    if (this.data.position != null && this.data.position != "") {
      data.position = this.data.position
    }
    if (this.data.content != null && this.data.content != "") {
      data.content = this.data.content
    }

    console.log("[updateWorkexp] data=", data)
    util.httpPost(url, data, {
      do: function(res) {
        util.toast("保存成功", 1000)
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },

  saveWorkexp: function() {
    console.log("[saveWorkexp]")
    var url = app.globalData.host + "/user/resume/workexp/save"
    if (this.data.company == null || this.data.company == "") {
      util.toast("公司名称不能为空", 1000)
      return
    }
    if (this.data.startDate == null || this.data.startDate == "" ||
      this.data.endDate == null || this.data.endDate == "") {
      util.toast("起止时间不能为空", 1000)
      return
    }
    if (this.data.position == null || this.data.position == "") {
      util.toast("工作职位不能为空", 1000)
      return
    }
    if (this.data.content == null || this.data.content == "") {
      util.toast("工作内容不能为空", 1000)
      return
    }
    var data = {
      "sessionId": util.getSessionId(),
      "company": this.data.company,
      "startDate": this.data.startDate,
      "endDate": this.data.endDate,
      "position": this.data.position,
      "content": this.data.content
    }
    console.log("[saveWorkexp] data=", data)
    util.httpPost(url, data, {
      do: function(res) {
        util.toast("保存成功", 1000)
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },

  updateEduexp: function () {
    console.log("[updateEdukexp]")
    var url = app.globalData.host + "/user/resume/eduexp/update"
    var id = this.data.id
    var data = {
      "sessionId": util.getSessionId(),
      "id": id
    }
    if (this.data.school != null && this.data.school != "") {
      data.name = this.data.school
    }
    if (this.data.startDate != null && this.data.startDate != "") {
      data.startDate = this.data.startDate;
    }
    if (this.data.endDate != null && this.data.endDate != "") {
      data.endDate = this.data.endDate;
    }
    if (this.data.major != null && this.data.major != "") {
      data.major = this.data.major
    }
    if (this.data.degree != null && this.data.degree != "") {
      data.degree = this.data.degree
    }

    console.log("[updateEduexp] data=", data)
    util.httpPost(url, data, {
      do: function (res) {
        util.toast("保存成功", 1000)
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },

  saveEduexp: function () {
    console.log("[saveEduexp]")
    var url = app.globalData.host + "/user/resume/eduexp/save"
    if (this.data.school == null || this.data.school == "") {
      util.toast("学校名称不能为空", 1000)
      return
    }
    if (this.data.startDate == null || this.data.startDate == "" ||
      this.data.endDate == null || this.data.endDate == "") {
      util.toast("起止时间不能为空", 1000)
      return
    }
    if (this.data.major == null || this.data.major == "") {
      util.toast("专业不能为空", 1000)
      return
    }
    if (this.data.degree == null || this.data.degree == "") {
      util.toast("学历不能为空", 1000)
      return
    }
    var data = {
      "sessionId": util.getSessionId(),
      "name": this.data.school,
      "startDate": this.data.startDate,
      "endDate": this.data.endDate,
      "major": this.data.major,
      "degree": this.data.degree
    }
    console.log("[saveEduexp] data=", data)
    util.httpPost(url, data, {
      do: function (res) {
        util.toast("保存成功", 1000)
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },

  saveOrUpdate: function() {
    console.log("[saveOrUpdate] types=", this.data.types)
    if ("edu" == this.data.types) {
      if(this.data.eduexp != null){
        this.updateEduexp()
      }else{
        this.saveEduexp()
      }
    } else {
      console.log("[saveOrUpdate] workexp=", this.data.workexp)      
      if (this.data.workexp != null) {
        this.updateWorkexp()
      } else {
        this.saveWorkexp()
      }
    }
  },
})
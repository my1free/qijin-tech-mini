var util = require('./util.js');

const app = getApp()

module.exports = {
  jobList: jobList,  //job列表
  pageJobList: pageJobList, //分页获取job列表
  jobListNavi: jobListNavi,  //导航信息
  jobListWithKeyword: jobListWithKeyword,  //按关键字搜索
  pageJobListWithKeyword: pageJobListWithKeyword, //按关键词搜索(分页)
  jobDetail: jobDetail, //职位详情
  companyDetail: companyDetail, //公司详情
  companyInfo: companyInfo, //公司详情。编辑公司时用
  pageJobListWithCompany: pageJobListWithCompany, //分页获取多个公司下的职位
  collectedJobList: collectedJobList, //获取收藏职位列表
  concernedList: concernedList, //关注的公司列表
  pageConcernedList: pageConcernedList, //分页获取关注的公司列表
  concernedJobList: concernedJobList, //所关注公司的职位列表
  pageConcernedJobList: pageConcernedJobList, //分页获取所关注公司的职位列表
  userInfo: userInfo, //获取用户信息
  resume: resume, //获取个人简历
  workexp: workexp, //获取指定工作经验信息
  eduexp: eduexp, //教育信息
  saveFeedback: saveFeedback, //反馈意见，
  companyList: companyList, //我的公司列表
  companySearch: companySearch, //搜索公司
  companySave: companySave, //保存公司
  addBelongedCompany: addBelongedCompany, //
}

/**
 * job列表
 * @param page: 要展示数据的page对象
 * @param cityId: 城市id
 * @param categoryId: 分类id
 */
function jobList(page, cityId, categoryId) {
  console.log("[jobList] categoryId:", categoryId)
  console.log("[jobList] currCategoryId", page.data.currCategoryId)

  var url = app.globalData.host + '/job/list?cityId=' + cityId
    + "&categoryId=" + categoryId
    + "&limit=10";

  util.httpGet(url, {
    page: page,
    do: function (data) {
      console.log("[jobList] list is:", data)
      this.page.setData({
        jobList: data
      })
    }
  })
}

/**
 * 分页获取job列表
 * @param page: 要展示数据的page对象
 * @param cityId: 城市id
 * @param categoryId: 分类id
 */
function pageJobList(page, cityId, categoryId) {
  var originJobList = page.data.jobList
  var maxId = 0;
  if (originJobList != undefined && originJobList.length > 0) {
    maxId = originJobList[originJobList.length - 1].id
  }

  var url = app.globalData.host + '/job/list?cityId=' + cityId
    + "&categoryId=" + categoryId
    + "&maxId=" + maxId
    + "&limit=10";

  util.httpGet(url, {
    page: page,
    do: function (data) {
      console.log("[page jobList] list is:", data)
      if (data.length > 0) {
        var newJobList = originJobList.concat(data)
        console.log("[page jobList] newJobList: ", newJobList)
        page.setData({
          jobList: newJobList
        })
      } else {
        console.log("没有更多数据了")
      }
    }
  })
}

/**
 * 获取导航信息，包括城市信息和分类信息
 * @param page: 要展示数据的page对象
 */
function jobListNavi(page) {
  var cityArray = ["全国"]
  var cityId = [0]
  var cityOption = {}
  var categoryList = [{ "id": "c0", "name": "不限" }]
  var url = app.globalData.host + '/integrated/navi'
  util.httpGet(url, {
    do: function(data){
      //设置city列表
      data.cities.forEach(function (e, i) {
        cityArray.push(e.name)
        cityId.push(e.id)
      })

      //设置category列表
      data.categories.forEach(function (e, i) {
        //需要将int id转换成字符串
        var newCategory = {}
        newCategory.id = "c" + e.id
        newCategory.name = e.name
        categoryList.push(newCategory)
      })

      //将信息封装
      cityOption.ids = cityId
      cityOption.options = cityArray

      console.log("[jobListNavi] cityOption is:", cityOption)
      console.log("[jobListNavi] categoryList is:", categoryList)

      //设置数据
      page.setData({
        cityOption: cityOption,
        categoryList: categoryList
      })
    },
    clear: function(){
      cityOption.ids = cityId
      cityOption.options = cityArray
      console.log("[jobListNavi] cityOption is:", cityOption)
      page.setData({
        cityOption: cityOption,
        categoryList: categoryList
      })
    }
  })
}


/**
 * 搜索职位展示结果
 * @param page: 要展示数据的page对象
 * @param cityId: 搜索条件中的cityId
 * @param keyword: 搜索关键字
 */
function jobListWithKeyword(page, cityId, keyword) {
  if (keyword == null || keyword == "" || keyword == undefined) {
    util.toast("请输入关键字", 500)
    return;
  }
  if (cityId == null) {
    cityId = 0;
  }

  console.log("[jobListWithKeyword] cityId is:", cityId)
  console.log("[jobListWithKeyword] keyword is:", keyword)

  var url = app.globalData.host + '/job/search?cityId=' + cityId
    + "&keyword=" + keyword
    + "&limit=10"

  util.httpGet(url, {
    page: page,
    do: function(data){
      console.log("[jobListWithKeyword] job list: ", data)
      page.setData({
        jobList: data
      })
    }
  })
}

/**
 * 搜索职位展示结果，分页展示
 * @param page: 要展示数据的page对象
 * @param cityId: 搜索条件中的cityId
 * @param keyword: 搜索关键字
 */
function pageJobListWithKeyword(page, cityId, keyword) {
  var originJobList = page.data.jobList
  var maxId = 0;
  if (originJobList != undefined && originJobList.length > 0) {
    maxId = originJobList[originJobList.length - 1].id
  }

  console.log("[pageJobListWithKeyword] cityId is:", cityId)
  console.log("[pageJobListWithKeyword] keyword is:", keyword)

  var url = app.globalData.host + '/job/search?cityId=' + cityId
    + "&keyword=" + keyword
    + "&maxId=" + maxId
    + "&limit=10"

  util.httpGet(url, {
    page: page,
    do: function(data){
      if (data.length > 0) {
        var newJobList = originJobList.concat(data)
        console.log("[pageJobListWithKeyword] new job list: ", newJobList)
        page.setData({
          jobList: newJobList
        })
      } else {
        console.log("没有更多数据了")
      }
    }
  })
}

/**
 * 公司详情
 * @param page: 要展示数据的page对象
 * @param companyId: 公司id
 */
function companyDetail(page, companyId) {
  console.log("[companyDetail] companyId: ", companyId)
  var url = app.globalData.host + '/company/detail'
  var data = {
    "companyId": companyId,
    "sessionId": util.getSessionId(),
  }
  util.httpPost(url, data, {
    page: page,
    do: function(res){
      console.log("[companyDetail] companyDetail:", res)
      this.page.setData({
        companyDetail: res,
        jobList: res.jobInfoDtos,
        concerned: res.concerned
      })
    }
  })
}

function companyList(page){
  var url = app.globalData.host + "/user/company/list?sessionId=" + util.getSessionId()
  util.httpGet(url, {
    page: page,
    do: function(res){
      this.page.setData({
        companies: res
      })
      var dataArr = []
      res.forEach(function (data, i) {
        dataArr.push({
          "id": data.id,
          "content": data.introduction
        })
      })
      initMask(page, dataArr)
    }
  })
}

/**
 * 添加mask
 */
function initMask(page, dataArr) {
  if (dataArr.length <= 0) {
    return
  }
  var showMask = {}
  dataArr.forEach(function (data, i) {
    showMask[data.id] = checkMask(data.content)
  })
  page.setData({
    showMask: showMask
  })
}

function checkMask(content) {
  if(content == null || content == undefined || content == ""){
    return
  }
  var arr = content.split("\n")
  if (arr.length > 3) {
    return 1
  }
  if (arr.length == 1) {
    if (arr[0].length > 19 * 4) {
      return 1
    }
  }
  if (arr.length == 2) {
    if (arr[1].length > 19 * 3) {
      return 1
    }
  }
  if (arr.length == 3) {
    if (arr[2].length > 19 * 2) {
      return 1
    }
  }
  return 0
}

/**
 * 根据名称搜索company
 */
function companySearch(page, keyword){
  if(util.isInvalid(keyword)){
    util.toast("请输入合法的关键词", 1000)
    return false
  }
  var url = app.globalData.host + "/company/search?sessionId=" + util.getSessionId() + "&keyword=" + keyword + "&limit=10"
  util.httpGet(url, {
    page: page,
    do: function(res){
      console.log("[companySearch] res=", res)
      this.page.setData({
        companies: res
      })
    }
  })
  return true
}

/**
 * 添加所属的公司
 */
function addBelongedCompany(page, companyId){
  var url = app.globalData.host + "/user/company/belonged/add"
  var data = {
    "sessionId": util.getSessionId(),
    "companyId": companyId
  }
  util.httpPost(url, data, {
    page: page,
    do: function(res){
      console.log("[addBelongedCompany] res=", res)
      var companies = page.data.companies
      companies.forEach(function(ele, i){
        if(ele.id == companyId){
          ele.belonged = res
        }
      })
      page.setData({
        companies: companies
      })
    }
  })
}

/**
 * 获取company信息。编辑company的时候
 */
function companyInfo(page, companyId){
  var url = app.globalData.host + "/company/info"
  var data = {
    "sessionId": util.getSessionId(),
    "companyId": companyId,
    "isCandidate": util.isCandidate()
  }
  util.httpPost(url, data, {
    page: page,
    do: function(res){
      console.log("[companyInfo] company=", res)
      this.page.setData({
        company: res
      })
    }
  })
}

function companySave(page){
  //
}

/**
 * 职位详情
 * @param page: 要展示数据的page对象
 * @param jobId: 职位id
 */
function jobDetail(page, jobId) {
  console.log("[jobDetail] jobId: ", jobId)
  var url = app.globalData.host + '/job/detail'
  var data = {
    "jobId": jobId,
    "sessionId": util.getSessionId(),
  }
  util.httpPost(url, data, {
    page: page,
    do: function(data){
      this.page.setData({
        jobDetail: data,
        collected: data.collected
      })
    }
  })
}

/**
 * 分页获取多个公司下的职位列表
 * @param page: 
 * @param companyIds: 公司id列表，用逗号分隔
 */
function pageJobListWithCompany(page, companyIds) {
  console.log("[pageJobListWithCompany] companyIds=", companyIds)

  var originJobList = page.data.jobList
  var maxId = 0;
  if (originJobList != undefined && originJobList.length > 0) {
    maxId = originJobList[originJobList.length - 1].id
  }

  var url = app.globalData.host + '/job/list?companyIds=' + companyIds
    + "&maxId=" + maxId
    + "&limit=10"

  util.httpGet(url, {
    page: page,
    do: function(res){
      if (res.length > 0) {
        var newJobList = originJobList.concat(res)
        console.log("[pageJobListWithCompany] new job list is", newJobList)
        page.setData({
          jobList: newJobList
        })
      } else {
        console.log("没有更多数据了")
      }
    }
  })
}

/**
 * 获取收藏职位列表
 * @param page:
 */
function collectedJobList(page) {
  console.log("[collectedJobList]")
  var url = app.globalData.host + "/user/collection/list"
  var data = {
    "sessionId": util.getSessionId(),
    "limit": 10
  }
  util.httpPost(url, data, {
    page: page,
    do: function(res){
      console.log("[collectedJobList] res:", res)
      page.setData({
        jobList: res
      })
    }
  })
}

/**
 * 关注公司列表
 */
function concernedList(page){
  console.log("[concernedList]")
  var url = app.globalData.host + "/user/concerned/list"
  var data = {
    "sessionId": util.getSessionId(),
    "limit": 10
  }
  util.httpPost(url, data, {
    page: page,
    do: function (res) {
      console.log("[concernedList] res:", res)
      page.setData({
        companyList: res
      })
    }
  })
}

function pageConcernedList(page) {
  console.log("[pageConcernedList]")
  var originCompanyList = page.data.companyList
  var maxId = 0;
  if (originCompanyList != undefined && originCompanyList.length > 0) {
    maxId = originCompanyList[originCompanyList.length - 1].id
  }
  var url = app.globalData.host + "/user/concerned/list"
  var data = {
    "maxId": maxId,
    "sessionId": util.getSessionId(),
    "limit": 10
  }
  util.httpPost(url, data, {
    page: page,
    do: function (res) {
      console.log("[pageConcernedList] res:", res)
      var newCompanyList = originCompanyList.concat(res)
      page.setData({
        companyList: newCompanyList
      })
    }
  })
}

/**
 * 所关注公司的职位列表
 */
function concernedJobList(page) {
  console.log("[concernedJobList]")
  var url = app.globalData.host + "/user/concerned/job/list"
  var data = {
    "sessionId": util.getSessionId(),
    "limit": 10
  }
  util.httpPost(url, data, {
    page: page,
    do: function (res) {
      console.log("[concernedJobList] res:", res)
      page.setData({
        jobList: res
      })
    }
  })
}

/**
 * 分页获取所关注公司的职位列表
 */
function pageConcernedJobList(page) {
  console.log("[pageConcernedJobList]")
  var originJobList = page.data.jobList
  var maxId = 0;
  if (originJobList != undefined && originJobList.length > 0) {
    maxId = originJobList[originJobList.length - 1].id
  }
  var url = app.globalData.host + "/user/concerned/job/list"
  var data = {
    "maxId": maxId,
    "sessionId": util.getSessionId(),
    "limit": 10
  }
  util.httpPost(url, data, {
    page: page,
    do: function (res) {
      console.log("[concernedJobList] res:", res)
      if(res.length > 0) {
        var newJobList = originJobList.concat(res)
        page.setData({
          jobList: newJobList
        })
      } else {
        console.log("没有更多数据了")
      }
    }
  })
}

/**
 * 获取用户信息
 * @param page: 
 */
function userInfo(page){
  console.log("[userInfo]")
  var url = app.globalData.host + "/user/info?sessionId=" + util.getSessionId()
  util.httpGet(url, {
    page: page,
    do: function(res){
      console.log("[userInfo] res=", res)
      page.setData({
        userInfo: res
      })
    }
  })
}

/**
 * 获取个人简历
 * @param page:
 */
function resume(page){
  var url = app.globalData.host + "/user/resume?sessionId=" + util.getSessionId()
  util.httpGet(url, {
    page: page,
    do: function(res){
      console.log("[resume] res=", res)
      var showDict = {}
      res.workexps.forEach(function (e, i) {
        showDict[e.id] = false
      })
      page.setData({
        userDto: res.userDto,
        workExp: res.workexps,
        showDict: showDict,
        eduExp: res.edus
      })
    }
  })
}

function workexp(page, id) {
  var url = app.globalData.host + "/user/workexp?sessionId=" + util.getSessionId()
  + "&id=" + id
  util.httpGet(url, {
    page: page,
    do: function (res) {
      console.log("[workexp] res=", res)
      page.setData({
        workexp: res,
        startDate: res.startDate,
        endDate: res.endDate
      })
    }
  })
}

function eduexp(page, id) {
  var url = app.globalData.host + "/user/eduexp?sessionId=" + util.getSessionId()
    + "&id=" + id
  util.httpGet(url, {
    page: page,
    do: function (res) {
      console.log("[eduexp] res=", res)
      page.setData({
        eduexp: res,
        startDate: res.startDate,
        endDate: res.endDate
      })
    }
  })
}

function saveFeedback(page, feedback){
  var url = app.globalData.host + "/user/feedback/report";
  var data = {
    'sessionId': util.getSessionId(),
    'feedback': feedback
  }
  util.httpPost(url, data, {
    page: page,
    do: function(res){
      util.toast("感谢您的反馈!", 2000)
    }
  })
}

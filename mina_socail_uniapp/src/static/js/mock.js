// import request from '@/api/request'; // 引入封装好的request

function listCard() {
  var data =
    '{"code":200,"data":{"cards":[{"images":[{"id":7,"selected":false,"url":"http://img.qijin.tech/social/deshan.jpeg"},{"id":8,"selected":false,"url":"http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png"},{"id":9,"selected":false,"url":"http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png"},{"id":10,"selected":false,"url":"http://img.qijin.tech/kxPqgPMVLUDRe65f240de00a01e854308b237a77f634.png"},{"id":11,"selected":false,"url":"http://img.qijin.tech/EoM0DHvXHQXXe4bb53c34bf66b143fdc2fc684d2ce41.png"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善"},"userId":10002},{"images":[{"id":12,"selected":false,"url":"http://img.qijin.tech/social/aze.jpeg"},{"id":13,"selected":false,"url":"http://img.qijin.tech/ZJxLLMiSm0GL4501bd050d15a047feaaa158e345ac61.png"},{"id":14,"selected":false,"url":"http://img.qijin.tech/social/aze2.jpeg"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽"},"userId":10003},{"images":[{"id":15,"selected":false,"url":"http://img.qijin.tech/social/baola.jpeg"},{"id":16,"selected":false,"url":"http://img.qijin.tech/social/baola3.jpeg"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110603@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"首尔大学","eduDegree":"博士","gender":"FEMALE","job":"投行","liveCity":"首尔","name":"宝拉"},"userId":10004},{"images":[{"id":17,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-113517@2x.png"},{"id":18,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-113645@2x.png"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110756@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"空军学院","eduDegree":"学士","gender":"MALE","job":"空军","liveCity":"首尔","name":"狗焕"},"userId":10005},{"images":[{"id":19,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-1137592x.png"},{"id":20,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-1137152x.png"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110840@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"家里蹲大学","eduDegree":"学士","gender":"FEMALE","job":"经理","liveCity":"首尔","name":"娃娃鱼"},"userId":10006}]},"message":"success"}';
  return JSON.parse(data);
}

function getCardDetail(userId) {
  if (userId == 10002) {
    var data =
      '{"code":200,"data":{"hobbies":[{"cl":".bg-brown.light","content":"羽毛球","id":1},{"cl":".bg-brown.light","content":"王者荣耀","id":2},{"cl":".bg-cyan.light","content":"摄影","id":3},{"cl":".bg-brown.light","content":"做饭","id":4},{"cl":".bg-purple.light","content":"绘画","id":5},{"cl":".bg-orange.light","content":"钢琴","id":6},{"cl":".bg-cyan.light","content":"旅游","id":7},{"cl":".bg-purple.light","content":"户外探险","id":8},{"cl":".bg-blue.light","content":"徒步","id":9},{"cl":".bg-blue.light","content":"躺平","id":10}],"images":[{"id":7,"selected":false,"url":"http://img.qijin.tech/social/deshan.jpeg"},{"id":8,"selected":false,"url":"http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png"},{"id":9,"selected":false,"url":"http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png"},{"id":10,"selected":false,"url":"http://img.qijin.tech/kxPqgPMVLUDRe65f240de00a01e854308b237a77f634.png"},{"id":11,"selected":false,"url":"http://img.qijin.tech/EoM0DHvXHQXXe4bb53c34bf66b143fdc2fc684d2ce41.png"}],"love":{"expected":"希望你是热爱生活的好姑凉，脾气好，感情经历简单，对生活有品位，有幽默感，160以上，本科以上，家人脾气温和","family":"出生山西省朔州市区，城市户口，工薪家庭，家中有一小妹从小勤勉，未有任何娇生惯养的恶习。母亲温暖，父亲严肃，都是通情达理之人，不世故，讲道理，识大体。","interest":"性格开朗，内心平和，风趣幽默，是大家公认的开心果。热爱旅行、阅读，与音乐。每周羽毛球，每年去一个国内喜欢的地方，到一个未去过的国家。","selfInfo":"90双子座173cm,普通高校本科毕业，公司的一个小项目负责人，工作偏忙，收入稳定，偶尔加班，较少应酬。即使目前一切安逸，也没有停止学习，始终在为能够创造更美好的努力生活着。"},"profile":{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善"}},"message":"success"}';
    return JSON.parse(data);
  }
  if (userId == 10003) {
    var data =
      '{"code":200,"data":{"hobbies":[],"images":[{"id":12,"selected":false,"url":"http://img.qijin.tech/social/aze.jpeg"},{"id":13,"selected":false,"url":"http://img.qijin.tech/ZJxLLMiSm0GL4501bd050d15a047feaaa158e345ac61.png"},{"id":14,"selected":false,"url":"http://img.qijin.tech/social/aze2.jpeg"}],"love":{},"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽"}},"message":"success"}';
    return JSON.parse(data);
  }
  if (userId == 10004) {
    var data =
      '{"code":200,"data":{"hobbies":[],"images":[{"id":15,"selected":false,"url":"http://img.qijin.tech/social/baola.jpeg"},{"id":16,"selected":false,"url":"http://img.qijin.tech/social/baola3.jpeg"}],"love":{},"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110603@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"首尔大学","eduDegree":"博士","gender":"FEMALE","job":"投行","liveCity":"首尔","name":"宝拉"}},"message":"success"}';
    return JSON.parse(data);
  }
}

function listActivity() {
  var data =
    '{"code":200,"data":{"activities":[{"description":"关于组织奥森奔跑5.20+相亲联谊活动”的通知一个人奔跑形影孤单一群人奔跑畅快狂欢为拓展奔跑外延，融通社交内涵，中国农业大学跑团协同北京马拉松协会并联合中国高校在京校友跑团，组织“奥森奔跑5.20+相亲联谊活动”，为在京新入职未婚青年搭建健身和情感交流平台，现把有关内容通知如下。一.活动主题：健康奔跑+情侣携进二.活动时间：每周六早8：00—12：00三.活动地点：奥森公园南园及相应户外草坪四.活动方案：每周六早8：00在奥森公园南大门集合，由专业人员组织讲解示范拉伸，共同奔跑5.20公里（南园一圈）。根据参加人员情况分成每组30人，男女各15人，到不同区域草坪组织户外联谊活动，包括背板、俯卧撑等静态比赛，自我介绍并联欢及进行冷餐冷宴活动。本活动为系列持续活动。五.报名条件：① 在京新近入职的未婚青年② 有正确的婚恋观、收入稳定③ 本科以上学历，有文化素养参加人必须隶属于一个高校校友跑团，并由团长推荐。六.报名方式：扫码入群，群作为系列活动的沟通联系的基础平台。七.活动费用：活动为公益性质，不提前收取费用。冷餐等食物请自行准备，产生的相关费用平摊（租赁场地、统一食物、活动奖品、活动策划等费用）。欢迎参加人根据个人情况给予相应捐助。八.本活动倡导好色而非猥琐、热情绝不粗鲁、浪漫绝非炫耀的交往风尚，我们赞赏心灵的美好，提倡环保、简约、利他主义。","endTime":1628995103000,"id":1,"location":"北京市朝阳区奥林匹克公园","participants":[{"age":22,"avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLThAyqO9ic7pzQqpzluKRvM2JQP9AxoiaX0NNqNOFq0ucdGIAv2KYu3KPcLkIwqXzcAib88xalNFfWQ/132","bornCity":"山东聊城","constellation":"巨蟹座","edu":"南开大学","eduDegree":"硕士","gender":"MALE","job":"互联网","liveCity":"北京","name":"齐晋","userId":10001},{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善","userId":10002},{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽","userId":10003},{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110603@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"首尔大学","eduDegree":"博士","gender":"FEMALE","job":"投行","liveCity":"首尔","name":"宝拉","userId":10004},{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110756@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"空军学院","eduDegree":"学士","gender":"MALE","job":"空军","liveCity":"首尔","name":"狗焕","userId":10005}],"sponsor":{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善","userId":10002},"startTime":1626316703000,"tags":["跑步","定向越野"],"title":"奥森跑步"},{"description":"大家好，27号（本周日）下午有一个俱乐部的小聚会，有喜欢玩麻将、扑克、剧本杀的小伙伴，可以联系我或者雪蕊@崔雪蕊~非单 ，想自带其它桌游玩的也欢迎。位置在 军事博物馆 地铁站旁边。场地有限，原则上不超过16人，现在已经11个~","endTime":1630377759000,"id":2,"location":"北京市海淀区军事博物馆","sponsor":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽","userId":10003},"startTime":1626316959000,"tags":["剧本杀","扑克","麻将"],"title":"棋牌聚会"}]},"message":"success"}';
  return JSON.parse(data);
}

function getActivityDetail(activityId) {
  if (activityId == 1) {
    var data =
      '{"code":200,"data":{"description":"关于组织奥森奔跑5.20+相亲联谊活动”的通知一个人奔跑形影孤单一群人奔跑畅快狂欢为拓展奔跑外延，融通社交内涵，中国农业大学跑团协同北京马拉松协会并联合中国高校在京校友跑团，组织“奥森奔跑5.20+相亲联谊活动”，为在京新入职未婚青年搭建健身和情感交流平台，现把有关内容通知如下。一.活动主题：健康奔跑+情侣携进二.活动时间：每周六早8：00—12：00三.活动地点：奥森公园南园及相应户外草坪四.活动方案：每周六早8：00在奥森公园南大门集合，由专业人员组织讲解示范拉伸，共同奔跑5.20公里（南园一圈）。根据参加人员情况分成每组30人，男女各15人，到不同区域草坪组织户外联谊活动，包括背板、俯卧撑等静态比赛，自我介绍并联欢及进行冷餐冷宴活动。本活动为系列持续活动。五.报名条件：① 在京新近入职的未婚青年② 有正确的婚恋观、收入稳定③ 本科以上学历，有文化素养参加人必须隶属于一个高校校友跑团，并由团长推荐。六.报名方式：扫码入群，群作为系列活动的沟通联系的基础平台。七.活动费用：活动为公益性质，不提前收取费用。冷餐等食物请自行准备，产生的相关费用平摊（租赁场地、统一食物、活动奖品、活动策划等费用）。欢迎参加人根据个人情况给予相应捐助。八.本活动倡导好色而非猥琐、热情绝不粗鲁、浪漫绝非炫耀的交往风尚，我们赞赏心灵的美好，提倡环保、简约、利他主义。","endTime":1628995103000,"id":1,"location":"北京市朝阳区奥林匹克公园","participants":[{"age":22,"avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLThAyqO9ic7pzQqpzluKRvM2JQP9AxoiaX0NNqNOFq0ucdGIAv2KYu3KPcLkIwqXzcAib88xalNFfWQ/132","bornCity":"山东聊城","constellation":"巨蟹座","edu":"南开大学","eduDegree":"硕士","gender":"MALE","job":"互联网","liveCity":"北京","name":"齐晋","userId":10001},{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善","userId":10002},{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽","userId":10003},{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110603@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"首尔大学","eduDegree":"博士","gender":"FEMALE","job":"投行","liveCity":"首尔","name":"宝拉","userId":10004},{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110756@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"空军学院","eduDegree":"学士","gender":"MALE","job":"空军","liveCity":"首尔","name":"狗焕","userId":10005}],"sponsor":{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善","userId":10002},"startTime":1626316703000,"tags":["跑步","定向越野"],"title":"奥森跑步"},"message":"success"}';
    return JSON.parse(data);
  }
  if (activityId == 2) {
    var data =
      '{"code":200,"data":{"description":"大家好，27号（本周日）下午有一个俱乐部的小聚会，有喜欢玩麻将、扑克、剧本杀的小伙伴，可以联系我或者雪蕊@崔雪蕊~非单 ，想自带其它桌游玩的也欢迎。位置在 军事博物馆 地铁站旁边。场地有限，原则上不超过16人，现在已经11个~","endTime":1630377759000,"id":2,"location":"北京市海淀区军事博物馆","sponsor":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽","userId":10003},"startTime":1626316959000,"tags":["剧本杀","扑克","麻将"],"title":"棋牌聚会"},"message":"success"}';
    return JSON.parse(data);
  }
}

function getMe() {
  var data =
    '{"code":200,"data":{"hobbies":[{"cl":".bg-blue.light","content":"羽毛球","id":11},{"cl":".bg-blue.light","content":"王者荣耀","id":12},{"cl":".bg-purple.light","content":"摄影","id":13},{"cl":".bg-orange.light","content":"躺平","id":14}],"images":[{"id":1,"selected":false,"url":"http://img.qijin.tech/social/deshan.jpeg"},{"id":2,"selected":false,"url":"http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png"},{"id":3,"selected":false,"url":"http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png"},{"id":4,"selected":false,"url":"http://img.qijin.tech/kxPqgPMVLUDRe65f240de00a01e854308b237a77f634.png"},{"id":5,"selected":false,"url":"http://img.qijin.tech/EoM0DHvXHQXXe4bb53c34bf66b143fdc2fc684d2ce41.png"}],"love":{"expected":"希望你是热爱生活的好姑凉，脾气好，感情经历简单，对生活有品位，有幽默感，160以上，本科以上，家人脾气温和","family":"出生山西省朔州市区，城市户口，工薪家庭，家中有一小妹从小勤勉，未有任何娇生惯养的恶习。母亲温暖，父亲严肃，都是通情达理之人，不世故，讲道理，识大体。","interest":"性格开朗，内心平和，风趣幽默，是大家公认的开心果。热爱旅行、阅读，与音乐。每周羽毛球，每年去一个国内喜欢的地方，到一个未去过的国家。","selfInfo":"90双子座173cm,普通高校本科毕业，公司的一个小项目负责人，工作偏忙，收入稳定，偶尔加班，较少应酬。即使目前一切安逸，也没有停止学习，始终在为能够创造更美好的努力生活着。"},"profile":{"age":22,"avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLThAyqO9ic7pzQqpzluKRvM2JQP9AxoiaX0NNqNOFq0ucdGIAv2KYu3KPcLkIwqXzcAib88xalNFfWQ/132","birthday":"2000-07-11","bornCity":"山东聊城","constellation":"巨蟹座","edu":"南开大学","eduDegree":"硕士","gender":"MALE","job":"互联网","liveCity":"北京","name":"齐晋","userId":10001}},"message":"success"}';
  return JSON.parse(data);
}

function getGallery() {
  var data =
    '{"code":200,"data":{"images":[{"id":1,"selected":false,"url":"http://img.qijin.tech/social/deshan.jpeg"},{"id":2,"selected":false,"url":"http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png"},{"id":3,"selected":false,"url":"http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png"},{"id":4,"selected":false,"url":"http://img.qijin.tech/kxPqgPMVLUDRe65f240de00a01e854308b237a77f634.png"},{"id":5,"selected":false,"url":"http://img.qijin.tech/EoM0DHvXHQXXe4bb53c34bf66b143fdc2fc684d2ce41.png"}],"profile":{"age":22,"avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLThAyqO9ic7pzQqpzluKRvM2JQP9AxoiaX0NNqNOFq0ucdGIAv2KYu3KPcLkIwqXzcAib88xalNFfWQ/132","birthday":"2000-07-11","bornCity":"山东聊城","constellation":"巨蟹座","edu":"南开大学","eduDegree":"硕士","gender":"MALE","job":"互联网","liveCity":"北京","name":"齐晋","userId":10001}},"message":"success"}';
  return JSON.parse(data);
}

function getHobbies() {
  var data =
    '{"code":200,"data":{"hobbies":[{"cl":".bg-mauve.light","content":"摄影","id":13},{"cl":".bg-cyan.light","content":"王者荣耀","id":12},{"cl":".bg-purple.light","content":"羽毛球","id":11},{"cl":".bg-grey.light","content":"躺平","id":14}],"hobbyUnits":[{"content":"羽毛球","count":0},{"content":"王者荣耀","count":0},{"content":"摄影","count":0},{"content":"做饭","count":0},{"content":"绘画","count":0},{"content":"钢琴","count":0},{"content":"旅游","count":0},{"content":"户外探险","count":0},{"content":"徒步","count":0},{"content":"躺平","count":0}]},"message":"success"}';
  return JSON.parse(data);
}

export default {
  listCard,
  getCardDetail,
  listActivity,
  getActivityDetail,
  getMe,
  getGallery,
  getHobbies,
};

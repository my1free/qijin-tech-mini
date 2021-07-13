// import request from '@/api/request'; // 引入封装好的request

function listCard() {
  var data =
    '{"code":200,"data":{"cards":[{"images":[{"id":7,"selected":false,"url":"http://img.qijin.tech/social/deshan.jpeg"},{"id":8,"selected":false,"url":"http://img.qijin.tech/1nRczRSkxuSq4b66f781091993e1a7ea81b3fc3ed955.png"},{"id":9,"selected":false,"url":"http://img.qijin.tech/tcW82sLalUYd2f5c23683ee9f1dbcc39b86fe6c935ae.png"},{"id":10,"selected":false,"url":"http://img.qijin.tech/kxPqgPMVLUDRe65f240de00a01e854308b237a77f634.png"},{"id":11,"selected":false,"url":"http://img.qijin.tech/EoM0DHvXHQXXe4bb53c34bf66b143fdc2fc684d2ce41.png"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/VjLPWj5VftQJ13fea8ccf05e250236f9f60151b66b41.png","bornCity":"首尔","constellation":"巨蟹座","edu":"延世大学","eduDegree":"学士","gender":"FEMALE","job":"航空","liveCity":"首尔","name":"德善"},"userId":10002},{"images":[{"id":12,"selected":false,"url":"http://img.qijin.tech/social/aze.jpeg"},{"id":13,"selected":false,"url":"http://img.qijin.tech/ZJxLLMiSm0GL4501bd050d15a047feaaa158e345ac61.png"},{"id":14,"selected":false,"url":"http://img.qijin.tech/social/aze2.jpeg"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110710@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"韩国棋学院","eduDegree":"博士","gender":"MALE","job":"棋士","liveCity":"首尔","name":"阿泽"},"userId":10003},{"images":[{"id":15,"selected":false,"url":"http://img.qijin.tech/social/baola.jpeg"},{"id":16,"selected":false,"url":"http://img.qijin.tech/social/baola3.jpeg"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110603@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"首尔大学","eduDegree":"博士","gender":"FEMALE","job":"投行","liveCity":"首尔","name":"宝拉"},"userId":10004},{"images":[{"id":17,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-113517@2x.png"},{"id":18,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-113645@2x.png"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110756@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"空军学院","eduDegree":"学士","gender":"MALE","job":"空军","liveCity":"首尔","name":"狗焕"},"userId":10005},{"images":[{"id":19,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-1137592x.png"},{"id":20,"selected":false,"url":"http://img.qijin.tech/social/WX20210713-1137152x.png"}],"profile":{"age":22,"avatar":"http://img.qijin.tech/social/WX20210713-110840@2x.png","bornCity":"首尔","constellation":"巨蟹座","edu":"家里蹲大学","eduDegree":"学士","gender":"FEMALE","job":"经理","liveCity":"首尔","name":"娃娃鱼"},"userId":10006}]},"message":"success"}';
  return JSON.parse(data);
}

function getCardDetail(userId) {
  console.log("mock=", userId);
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

export default {
  listCard,
  getCardDetail,
};

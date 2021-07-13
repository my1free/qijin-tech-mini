const baseUrl = "http://127.0.0.1:8080";

const showToast = (title) => {
  uni.showToast({
    title: title,
    icon: "none",
  });
};

const get = (url, data = {}, option = {}) => {
  return http(url, data, { method: "GET" });
};

const post = (url, data = {}, option = {}) => {
  return http(url, data, { method: "POST" });
};

/**请求接口
 * @method http
 * @param {String} url 接口地址
 * @param {Object} data 接口参数
 * @param {Object} option 接口配置信息，可选
 * @return {Object} Promise
 */
const http = (url, data = {}, option = {}) => {
  let hideLoading = option.hideLoading || false; // 是否显示 loading
  let hideMsg = option.hideMsg || false; // 是否隐藏错误提示
  let token = getToken(); // 登录鉴权获得的 token
  if (!hideLoading) {
    uni.showLoading({
      title: "加载中...",
      mask: true,
    });
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      method: option.method || "POST", // 默认 post 请求
      header: {
        token: token,
        channel: "SOCIAL",
      },
      data: data,
      success: (res) => {
        // 服务器成功返回的回调函数
        if (!hideLoading) uni.hideLoading();
        if (res.statusCode === 200) {
          let result = res.data;
          if (result.code === 200) {
            resolve(result.data);
            return;
          }
          reject(result.message);
          if (!hideMsg) showToast(result.message);
        } else {
          // 返回值非 200，强制显示提示信息
          showToast("[" + res.statusCode + "] 系统处理失败");
          reject("[" + res.statusCode + "] 系统处理失败");
        }
      },
      fail: (err) => {
        // 接口调用失败的回调函数
        if (!hideLoading) uni.hideLoading();
        if (err.errMsg != "request:fail abort") {
          showToast("连接超时，请检查您的网络。");
          reject("连接超时，请检查您的网络。");
        }
      },
    });
  });
};

function getToken() {
  try {
    const token = uni.getStorageSync("token");
    return token;
  } catch (e) {
    uni.showToast({ title: "获取token失败", icon: "none" });
  }
}
export default {
  http,
  post,
  get,
};

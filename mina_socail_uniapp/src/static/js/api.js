// import request from '@/api/request'; // 引入封装好的request

const host = "http://127.0.0.1:8080"

const headers = {
    "channel": "SOCIAL",
    "token": "TODO"
}

// 上传图片
function uploadImageWithFile (file) {
    var url = host + "/api/v1/base/upload/image"
    // return post(url, data)
    return uni.uploadFile({
        url: url,
        filePath: "",
        file, file,
        name: 'file',
        header: headers
    });
}

function uploadImageWithPath (filePath) {
    var url = host + "/api/v1/base/upload/image"
    // return post(url, data)
    return uni.uploadFile({
        url: url,
        filePath: filePath,
        name: 'file',
        header: headers
    });
}


function post(url, data){
    return uni.request({
        method: "POST",
		url: url,
		data: data,
        header: headers
    })
}

function get(url, data){
    return uni.request({
        method: "GET",
		url: url,
		data: data,
        header: headers
    })
}

function onResponse(res){
    console.log("response", res)
    if (res.statusCode == 200) {
        uni.showToast({
            title: "登录成功",
            icon: 'success'
        })
    }
}

function onError(err){
    uni.showToast({
        title: err.msg,
        icon: 'none'
    })
}

export default{
    uploadImageWithFile,
    uploadImageWithPath
}

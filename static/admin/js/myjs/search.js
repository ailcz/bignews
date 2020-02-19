//获取搜索框输入的搜索条件   从index跳转过来
var key = getUrlParams("key");

// 获取输入搜索框的内

if (key == '-1') {
    key = null;
} else {
    // url参数被编码  需要解码获取真实参数
    key = decodeURI(key);
}

//获取文章列表数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    data: { key: key },
    success: function (response) {
        // location.reload()
        console.log(response);
        var html = template('listsTpl', response);
        $('#listsBox').html(html);
        location.search = 'state' + state + '&type=' + type;
        //分页展示
        // var page = template('pageTpl', { data: response.data })

        // $('#pageBox').html(page)
    },

})


// 封装一个函数，用于从浏览器的地址栏中获取指定的参数
function getUrlParams(name) {
    var paramsAry = location.search.substr(1).split('&');
    // 循环数据
    for (var i = 0; i < paramsAry.length; i++) {
        var tmp = paramsAry[i].split('=');
        if (tmp[0] == name) {
            return tmp[1];
        }
    }
    // 参数不存在，则返回-1
    return -1;
}
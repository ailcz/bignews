// 获取搜索关键字
var text = getParams('keyValue');

// 通过关键字查询相关文章
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/search',
    data: { key: text },
    success: function (response) {

        // 封装数字变成数组的函数
        function getArr(num) {
            var arr = [];
            for (var i = 1; i <= num; i++) {
                arr.push(i);
            }
            return arr;

        }

        // 页数数组
        var pageArr = getArr(response.data.pages);
        response.pageArr = pageArr;

        console.log(response);

        var html = template('postsearchTpl', response);

        console.log(html);

        $('#postsearchBox').html(html)

    }
})









// 分页函数
function changePage(p) {


    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/index/search',
        data: { page: p, key: text },
        success: function (response) {


            // 页数数组
            var pageArr = getArr(response.data.pages);
            response.pageArr = pageArr;

            console.log(response);

            var html = template('postsearchTpl', response);

            console.log(html);

            $('#postsearchBox').html(html)

        }
    })
}


// 获取url上面参数的函数封装

function getParams(name) {

    //从地址获取get方式，从点击编辑文章按钮，传过来id=id值
    //为了把‘ id=id值’这个字符串变成数组，用一个不存在的字符作为split参数，就能把‘id=123’变成数组['id=123']
    var strArr = location.search.substr(1).split('&');

    for (var i = 0; i < strArr.length; i++) {
        var tmpArr = strArr[i].split('=');

        if (tmpArr[0] == name) {

            return tmpArr[1];
        }

    }
    return -1;

}

// 封装数字变成数组的函数
function getArr(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;

}
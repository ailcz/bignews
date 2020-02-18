// 获取文章id
var id = getParams('id');

// 根据文章id获取文章详细信息
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/article?id=' + id,
    success: function (response) {

        var html = template('postTpl', response);
        $('#postBox').html(html);

    }
})

// 文章评论功能

$('#commentForm').on('submit', function () {


    if ($('#username').val().trim().length == 0) {

        alert('请输入用户名');
        return false;
    };

    if ($('#comment').val().trim().length == 0) {
        alert('请输入评论内容');
        return false;
    }

    // 获取表单参数
    var params = $(this).serialize() + '&articleId=' + id;

    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/index/post_comment',
        data: params,
        success: function (res) {
            location.reload();

        },
        error: function (err) {
            alert('发表失败!')
        }
    })


    return false;
})

// 获取文章的评论
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/get_comment?articleId=' + id,
    success: function (response) {

        var html = template('commentTpl', response);
        $('#commentBox').html(html);
        $('#commentCount').html(response.data.length + '条评论');
    }
})










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

// 向服务器端发送请求 索要分类数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/category/list',

    success: function (response) {
        var html = template('listTpl', response);
        $('#selCategory').html(html);
    }
})


// 获取文章信息

$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',

    success: function (response) {
        console.log(response);

        var html = template('listsTpl', response);
        $('#listsBox').html(html);
    }
});

// 分页
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    success: function (response) {
        var html = template('listsTpl', response);
        $('#listsBox').html(html);
        var page = template('pageTpl', response);
        $('#page').html(page);
        // console.log(response);
    }
});

// 筛选按钮注册事件
$('#listForm').on('submit', function () {
    var obj = {};
    if ($('#selCategory').val() != -1) {
        obj.type = $('#selCategory').val();
    }
    if ($('#selStatus').val() != -1) {
        obj.state = $('#selStatus').val();
    }
    console.log(obj);
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: obj,
        success: function (response) {
            // 重新渲染文章和分页数据
            var html = template('listsTpl', response);
            $('#listsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(page);
        }
    });
    // 阻止表单默认提交行为
    return false;
})


// 删除
$('#listsBox').on('click', '.delete', function () {
    if (confirm('您真的要执行删除操作吗')) {
        var id = $(this).attr('data-id');

        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/article/delete',
            data: {
                id: id
            },
            success: function (rr) {


                location.reload();
            }
        })
    }
})

// 封装数字变成数组的函数
function getArr(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;

}


// 分页函数
function changePage(p) {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: {
            page: p
        },
        success: function (response) {


            var html = template('listsTpl', response);
            $('#listsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(page);

        }
    })
}

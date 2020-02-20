// 向服务器端发送请求 索要分类数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/category/list',

    success: function (response) {
        var html = template('listTpl', response);
        $('#selCategory').html(html);
    }
})

console.log(location.search.substr(1));

// 获取文章信息
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    data: '',
    success: function (response) {
        var html = template('listsTpl', response);
        $('#listsBox').html(html);
    }
});

// 分页
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    data: location.search.substr(1),
    success: function (response) {
        var html = template('listsTpl', response);
        $('#listsBox').html(html);
        var page = template('pageTpl', response);
        $('#page').html(page);


    }
});

// 筛选按钮注册事件
$('#listForm').on('submit', function () {
    var obj = {};
    var type = $('#selCategory').val();
    var state = $('#selStatus').val();;
    if (type != -1) {

        obj.type = type;
    }

    if (type == -1) {
        obj.type = '';
        type = '';
    }
    if (state != -1) {
        obj.state = state;
    }

    if (state == -1) {
        obj.state = '';
        state = '';
    }
    console.log(obj);
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: obj,
        success: function (response) {
            console.log(response);

            // 重新渲染文章和分页数据
            var html = template('listsTpl', response);
            $('#listsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(page);
            location.search = 'state' + state + '&type=' + type;
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

    var obj = {};
    obj.page = p;
    var strArr = location.search.substr(1).split('&');
    for (var i = 0; i < strArr.length; i++) {

        var newArr = strArr[i].split('=');
        if (newArr[0] == 'state') {
            obj.state = newArr[1]

        };

        if (newArr[0] == 'type') {
            obj.type = newArr[1]
        };

        if (newArr[0] == 'key') {
            obj.key = newArr[1]
        };

    }

    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: obj,
        success: function (response) {


            var html = template('listsTpl', response);
            $('#listsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(page);

        }
    })
}
// 文章列表跳转分页
$('#page').on('change', '#aaaa', function () {


    console.log(1);


    var obj = {};
    obj.page = $('#aaaa option:selected').val();


    var strArr = location.search.substr(1).split('&');
    for (var i = 0; i < strArr.length; i++) {

        var newArr = strArr[i].split('=');
        if (newArr[0] == 'state') {
            obj.state = newArr[1]

        };

        if (newArr[0] == 'type') {
            obj.type = newArr[1]
        };

        if (newArr[0] == 'key') {
            obj.key = newArr[1]
        };

    }

    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: obj,
        success: function (response) {


            var html = template('listsTpl', response);
            $('#listsBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(page);

        }
    })

})




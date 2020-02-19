// 当添加分类表单发生提交行为的时候
$('#addCategory').on('submit', function () {
    var formData = $(this).serialize();
    // 向服务器端发送请求 添加分类
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/category/add',
        data: formData,
        success: function (response) {
            console.log(formData);

            // location.reload();
        }
    })
    // 阻止表单默认提交行为
    return false;
});

// // 发送ajax请求 向服务器端所有分类列表数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/category/list',
    success: function (response) {
        // 将服务器端返回的数据和HTML模板进行拼接
        var html = template('addCategoryTpl', response);
        // console.log(html);
        // 将拼接好的内容放到页面中
        $('#categoryBox').html(html);
    }
});


$('#categoryBox').on('click', '.edit', function () {
    // 获取要修改的分类数据的id
    var id = $(this).attr('data-id');
    // 根据id获取分类数据的详细信息
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/category/search',
        data: {
            id: id,
        },
        success: function (response) {
            // console.log(response);
            var html = template('modifyCategoryTpl', response);
            $('#formBox').html(html);
        }
    })
});

// 注册表单提交事件
$('#formBox').on('submit', '#modifyCategory', function () {
    alert('ok')
    // 获取管理员在表单中输入的内容
    var formData = $(this).serialize();
    console.log(formData);

    // 获取要修改的分类id
    var id = $(this).attr('data-id');
    // 发送请求 修改分类数据
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/category/edit',
        data: formData,
        success: function () {
            console.log(formData);

            location.reload();
        }
    })
    // 阻止表单的默认提交行为
    return false;
});

// 注册删除事件
$('#categoryBox').on('click', '.delete', function () {
    if (confirm('您真的要执行删除操作吗')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/category/delete',
            data: { id: id },
            success: function () {
                location.reload();
            }
        })
    }
})
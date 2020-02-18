// 照片预览
$('#exampleInputFilere').on('change', function () {
    // 获取到管理员选择到的文件 不管用户上传多少个文件，这个文件的信息都存储在files中
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file);
    var img = $('#preview').prop('src', imgURL);
    // console.log(imgURL);
    // var imga = imgURL.substr(27)
    // console.log(imga);

    // 创建formData对象 实现二进制文件上传
    // var formData = new FormData();
    // // 将选择到的文件追加到formData对象中
    // formData.append('cover', file);
    // 实现文章封面图片上传
    // $.ajax({
    //     type: 'post',
    //     url: 'http://localhost:8080/api/v1/admin/article/publish',
    //     data: formData,
    //     // 告诉$.ajax方法不要处理data属性对应的参数
    //     processData: false,
    //     // 告诉$.ajax方法不要设置参数类型
    //     contentType: false,
    //     success: function (response) {
    //         // 把图片的保存路径保存到隐藏域中
    //         $('#thumbnail').val(response[0].cover);
    //     }
    // })
});


$('#addForm').on('submit', function () {
    // 获取管理员在表单中输入的内容
    var formData = new FormData(this);
    // 向服务器端发送请求 实现添加文章功能

    // console.log(formData + '&' + document.getElementById('feature').files[0]);
    // var aa = formData + '&' + document.getElementById('feature').files[0];
    // console.log(typeof document.getElementById('feature').files[0]);

    // var obj = {};
    // obj.title = $('#inputEmail3');
    // obj.cover = document.getElementById('feature').files[0];

    // console.log(formData);

    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/article/publish/',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            // 文章添加成功 跳转到文章列表页面
            console.log(response);
            location.reload();

        },

    })
    // 阻止表单默认提交的行为
    return false;
});
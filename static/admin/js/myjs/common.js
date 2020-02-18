// 后台用户退出功能
$('#logout').on('click', function () {

    if (confirm('确认退出吗?')) {
        window.localStorage.removeItem('token');
        location.href = '/admin/login.html';
    }

});


// 后台首页侧边栏，登录用户信息显示
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/user/info',
    success: function (response) {
        // 侧边栏登录用户信息显示和头像显示
        $('#loginName').html(`欢迎&nbsp;&nbsp;${response.data.nickname}`)
        $('#userImg').prop('src', response.data.userPic);

        // 显示顶部导航栏用户头像图片
        $('#topuserImg').prop('src', response.data.userPic);

    }
})

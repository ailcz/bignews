// 后台用户退出功能
$('#logout').on('click', function () {

    if (confirm('确认退出吗?')) {
        window.localStorage.removeItem('token');
        location.href = '/admin/login.html';
    }

})
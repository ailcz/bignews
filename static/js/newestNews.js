// 展示前台首页最新资讯
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/latest',
    success: function (response) {

        var html = template('newsetTpl', response)
        $('#NewestNews').html(html);
    },
})
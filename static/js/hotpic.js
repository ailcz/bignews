// 获取热点图 发送ajax请求
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/hotpic',
    success: function (data) {
        console.log(data);
        var html = template('focusTpl', { data: data.data });
        $('#focusBox').html(html);
        $('#focusBox li:first-child').addClass('first');
    }
})
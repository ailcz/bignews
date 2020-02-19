$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/comment/search',
    // data: {
    //     page: page,
    //     perpage: perpage
    // },
    success: function (response) {
        console.log(response)
        var html = template('commentsTpl', response);
        // console.log(html);
        $('#commentBox').html(html)


        var pageHTML = template('pageTpl', response);


        $('#pageBox').html(pageHTML);

    }
})

$('#commentBox').on('click', '.tongguo', function () {
    if (confirm('您确定通过吗')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/comment/pass',
            data: { id: id },
            success: function () {
                location.reload();
            }
        })
    }
});

$('#commentBox').on('click', '.jujue', function () {
    if (confirm('您确定拒绝吗')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/comment/reject',
            data: { id: id },
            success: function () {
                location.reload();
            }
        })
    }
});








$('#commentBox').on('click', '.delete', function () {
    if (confirm('您确定删除吗')) {
        var id = $(this).attr('data-id');
        console.log(id);
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/comment/delete',
            data: { id: id },
            success: function () {
                location.reload();
            }

        })
    }
})

// 把page转化为数组
function getArr(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
// 分页函数
function changePage(page) {
    // alert(page)
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/comment/search',
        data: {
            page: page
        },
        success: function (response) {
            // console.log(response)
            var html = template('commentsTpl', response);
            // console.log(html);
            $('#commentBox').html(html)
            var pageHTML = template('pageTpl', response);
            $('#pageBox').html(pageHTML);

        }
    })
}
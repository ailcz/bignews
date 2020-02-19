// 获取文章类型ID
var categoryId = getParams('id');
// 根据文章类型id获取，该类型下所有的文章
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/search',
    data: { type: categoryId },
    success: function (response) {

        // 利用封装数组获取分页数组
        var aab = getArr(response.data.pages);

        response.pageArr = aab;

        var html = template('listTpl', response);

        $('#listBox').html(html);



    }
})


// 分页函数
function changePage(p) {


    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: { page: p, type: categoryId },
        success: function (response) {


            // 利用封装数组获取分页数组
            var aab = getArr(response.data.pages);

            response.pageArr = aab;

            var html = template('listTpl', response);

            $('#listBox').html(html);


        }
    })
}

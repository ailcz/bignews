// 获取总文章数，日新增文章数，评论总数和日新增评论总数
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/data/info',
    success: function (response) {
        // 渲染文章总数
        $('#postTotal').text(response.totalArticle);
        // 渲染日新增文章数
        $('#postAdd').text(response.dayArticle);
        // 渲染评论总数
        $('#commetTotal').text(response.totalComment);
        // 渲染日新增评论数
        $('#commentAdd').text(response.dayComment);

    }
})
//获取焦点关注数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/attention',
    success: function (response) {
        // console.log(response);

        var recommendTpl = `
        {{each data}}
        <li>
           <a href="article.html?id={{$value.id}}">{{$value.intro}}</a>
        </li>
        {{/each}}
        `
        var html = template.render(recommendTpl, response);
        // console.log(html);
        $('#jiaodian').html(html)

    }
})


//获取最新评论数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/latest_comment',
    success: function (response) {
        console.log(response);
        var zixunTpl = `
        {{each data}}
        <li>
            <span>{{$value.author.substring(0,1)}}</span>
            <b><em>{{$value.author}}</em> {{$imports.Time.human((new $imports.Date($value.date)))}}说:</b>
            <strong>{{$value.intro}}</strong>
          </li>
          {{/each}}
        `
        var html = template.render(zixunTpl, response);
        $('#pinglun').html(html)
    }
})

// 前台首页文章点击搜索按钮，传输搜索内容
$('#searchBtn').on('click', function () {

    // 获取输入内容
    var text = $('#serachInpt').val();
    if (text.trim().length !== 0) {


        location.href = 'postSearch.html?keyValue=' + text;
    }

})









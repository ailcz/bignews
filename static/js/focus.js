//获取焦点关注数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/attention',
    success: function (response) {
        // console.log(response);

        var recommendTpl = `
        {{each data}}
        <li>
           <a href="articel.html?id={{$value.id}}">{{$value.intro}}</a>
        </li>
        {{/each}}
        `
        var html = template.render(recommendTpl, response);
        // console.log(html);
        $('#jiaodian').html(html)

    }
})





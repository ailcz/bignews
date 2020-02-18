// 获取热门推荐数据
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/rank',
    success: function (response) {
        console.log(response);
        var weekTpl = `
{{each data}}
<li>
<span class="{{if $index==0}}first {{else if $index==1}}second{{else if $index==2}}third{{/if}}">{{$index+1}}</span>
<a href="javascript:;">{{$value.title}}</a>
</li>
{{/each}}`;
        console.log();
        var html = template.render(weekTpl, response);
        // console.log(html);
        $('#weekBox').html(html);
    }
})
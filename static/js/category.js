// 获取分类信息 发送请求
$.ajax({
  type: 'get',
  url: 'http://localhost:8080/api/v1/index/category',
  success: function (data) {
    // console.log(data);
    var leftTpl = `
        {{each data}}
        <li><a href="list.html?id={{$value.id}}">{{$value.name}}</a></li>
      {{/each}}
    `;
    var middleTpl = `
        {{each data}}
        <li><a href="list.html?id={{$value.id}}">{{$value.name}}</a></li>
      {{/each}}
    `
    var html = template.render(leftTpl, { data: data.data });
    var html = template.render(middleTpl, { data: data.data });
    // console.log(html);
    $('#postBox').html(html);
    $('#postsBox').html(html);
  }
})
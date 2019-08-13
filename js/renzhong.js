
var type = 3;
$(function () {
    $.ajax({
        url: "http://manage.wnw108.com/w/api/news/list",
        type: 'POST',
        dataType: 'json',

        data: {
            langType: 0,  //0中文  1英文

            type:type  //类型
        },
        contentType: "application/json",
        success: function (res) {
            var html = '';


            if (res.code == 200) {
                var newlist = res.result
                for (var i in newlist) {
                    html += ' <div class="content-con"> ';
                    html += '<div class="content-con-left">';
                    html += '<img src="' + newlist[i].news_img + '" alt="" srcset="">';
                    html += '</div>';

                    html += '<a href="newstext.html?newsId=' + newlist[i].news_id +'&type=' + type + '" class="content-con-right">';
                    html += '<div class="content-con-right-title"> ' + newlist[i].news_title + '</div>';

                    html += '<div class="content-con-right-con ">' + newlist[i].news_desc + '</div>';


                    html += '<div class="content-con-right-bottom">发布时间：' + newlist[i].pub_time + '</div>';
                    html += '</a>';
                    html += '</div>';
                    
                }



                $('.content').append(html)

                $('.content-con-right-con').each(function (i, item) {
                    var newstr;
                    
                    console.log(item)
                    newstr = $(item).html().substr(0, 120);
                    console.log(newstr)
                    if (newstr.length <=1) {
                        return 
                    }
                    
                    $(item).html(newstr + '...<span>[阅读全文]</span>');
                })

            }
        }
    });


})
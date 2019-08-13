
var type = 3;
$(function () {
    $.ajax({
        url: api.newlist,
        type: 'POST',
        dataType: 'json',

        data: {
            langType: 1,  //0中文  1英文

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

                    html += '<a href="ennewstext.html?newsId=' + newlist[i].news_id +'&type=' + type + '" class="content-con-right">';
                    html += '<div class="content-con-right-title"> ' + newlist[i].news_title + '</div>';

                    html += '<div class="content-con-right-con ">' + newlist[i].news_desc + '</div>';


                    html += '<div class="content-con-right-bottom">issuing time：' + newlist[i].pub_time + '</div>';
                    html += '</a>';
                    html += '</div>';
                    
                }



                $('.content').append(html)

                $('.content-con-right-con').each(function (i, item) {
                    var newstr;
                    if ($(item).html().length > 120) {
                        newstr = $(item).html().substr(0, 120);
                        $(item).html(newstr + '...');
                    } 
                })

                $('.content-con-right-con').append("<span>[Read All]</span>")

            }
        }
    });


})
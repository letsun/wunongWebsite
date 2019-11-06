
var type = 5;
$(function () {
    $.ajax({
        url: api.newlist,
        type: 'POST',
        dataType: 'json',

        data: {
            langType: 0,  //0中文  1英文
            type: type  //类型
        },

        success: function (res) {
            var html = '';


            if (res.code == 200) {
                var newlist = res.result;

                for (var i in newlist) {
                    var that = this

                    if (newlist[i].news_id != 60) {
                        html += ' <div class="content-con" data-id=" ' + newlist[i].news_id + '">';
                        html += '<div class="content-con-left">';
                        html += '<img src="' + newlist[i].news_img + '" alt="" srcset="">';
                        html += '</div>';
                        if (newlist[i].desc_type == 1) {
                            html += '<a href=" ' + newlist[i].desc_href + '" class="content-con-right">';
                        } else {
                            html += '<a href="newstext.html?newsId=' + newlist[i].news_id + '&type=' + type + '" class="content-con-right">';
                        }

                        html += '<div class="content-con-right-title"> ' + newlist[i].news_title + '</div>';

                        html += '<div class="content-con-right-con ">' + newlist[i].news_desc + '  </div>';


                        html += '<div class="content-con-right-bottom">发布时间：' + newlist[i].pub_time + '</div>';
                        html += '</a>';
                        html += '</div>';
                    }

                }





                $('.content').append(html)

                var newsid = $('.content-con').attr('data-id')


                $('.content-con-right-con').each(function (i, item) {
                    var newstr;
                    if ($(item).html().length > 120) {
                        newstr = $(item).html().substr(0, 120);
                        $(item).html(newstr + '...');
                    }


                })


                $('.content-con-right-con').append("<span>[阅读全文]</span>")

            }
        },
        error: function (res) {
            console.log(JSON.stringify(res));
        }
    });


})
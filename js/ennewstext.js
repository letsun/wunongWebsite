var newsId = newsid('newsId');
var type = newsid('type')
console.log(newsId)
console.log(type)



$(function () {

    if (newsId != '' && newsId != null) {

        var html = ''

        if(type ==1 ){
            html += '<a href="enindex.html"> Home</a>><a href="enhomeDepot.html"> Wunong grain farmer′s warehouse </a>><span class="news_title"> </span>';
            
            $(".header-en-a1").attr("href",'homeDepot.html')
            $(".header-en-a2").attr("href",'enhomeDepot.html')
            $('.header-nav-item:first-child ').addClass('a1')
        }else if(type ==2){
            html += '<a href="enindex.html"> Home</a>><a href="enadoption.html"> Wunong Claim Aquaculture</a>><span class="news_title"> </span>';

            $(".header-en-a1").attr("href",'adoption.html')
            $(".header-en-a2").attr("href",'enadoption.html')
            $('.header-nav-item:first-child ').addClass('a1')
        }else if(type ==3){
            html += '<a href="enindex.html"> Home</a>><a href="enrenzhong.html"> Wunong Claim Planting</a>><span class="news_title"> </span>';

            $(".header-en-a1").attr("href",'renzhong.html')
            $(".header-en-a2").attr("href",'enrenzhong.html')
            $('.header-nav-item:first-child ').addClass('a1')
        }else{
            html += '<a href="ennews.html"> news</a>><span class="news_title"> </span>';

            $(".header-en-a1").attr("href",'news.html')
            $(".header-en-a2").attr("href",'ennews.html')
            $('.header-nav-item:nth-child(4) ').addClass('a2')
        }


        $(".nav").html(html)


        $.ajax({
            url: api.newlistdetail + newsId,
            type: 'POST',
            dataType: 'json',

            data: {
                langType: 0  //0中文  1英文
            },
            success: function (res) {

                if (res.code == 200) {
                    var news_author = res.result.news_author //作者
                    var news_content = res.result.news_content //资讯内容
                    var news_title = res.result.news_title //资讯标题
                    var pub_time = res.result.pub_time //资讯发布时间
                    var browse_cnt = res.result.browse_cnt //浏览次数

                    $('.news_title').html(news_title)

                    $('.news_author').html(news_author)
                    $('.pub_time').html(pub_time)
                    $('.news_title').html(news_title)
                    $('#news_content').html(news_content)

                    $('.browse_cnt').html(browse_cnt)



                }

            }
        });
    }
})




/**
	 *获取url上面的参数值
	 *@param string name 参数名
	 *return string 参数值
	 */
function newsid(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
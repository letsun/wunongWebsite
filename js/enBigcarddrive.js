$(function () {
    window.onload = function () {
        setInterval(function () {
            window.location.reload()
        }, 600000)
    }
    //获去分类id
    $.ajax({
        url: api.getPrefectureByAreaType,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        success: function (res) {
            getId(14)


        }
    });





    $('.content-con').on('mouseenter', ".item", function () {
        //二维码生成 
        $('#qrcode').qrcode({
            render: "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
            text: 'https://life.wnw108.com/customer#/offlineProductDetail/' + $(this).attr("data-productId"),
            //text: window.location.protocol + '//' + window.location.host + '/customer#/offlineProductDetail/' + $stateParams.productId + '?shareId=_' + window.sessionStorage.getItem('id'),    //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
            width: "256",               //二维码的宽度
            height: "256",              //二维码的高度
            background: "#ffffff",       //二维码的后景色
            foreground: "#000000"
        });
        //找到需要转换的canvas
        var mycanvas1 = document.getElementsByTagName('canvas')[0];
        var imgHtml = canvasToImage(mycanvas1);
        $(this).find('.item-hover img').remove();
        $(this).find('.item-hover').prepend(imgHtml);
        $(this).find('.item-hover').show();
    })


    function canvasToImage(canvas) {
        var image = new Image();
        // 指定格式 PNG 图片后缀可自定义
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    $(".content-con").on('mouseleave', ".item", function () {

        $(this).find('.item-hover').hide();
        $('#qrcode canvas:first-child').remove()
    })






})




//大牌驾到
function getId(id) {
    var objinfo = {
        pageNo: 0,
        pageSize: 12,
        orderBy: 'asc',
        orderType: 'price',
        requestData: {
            areaType: 1,
            id: id,
        }
    }
    var html = '';
    $.ajax({
        url: api.getPrefectureProductList,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify(objinfo),
        success: function (res) {
            var responseData = res.responseData;
            for (var i in responseData) {

                var spec1lent = res.responseData[i].productDetail.spec1.length - 1;


                html += '<div href="#" class="item" data-productId="' + responseData[i].productId + '">';
                html += '<a class="item-click">';
                html += '<img src="' + responseData[i].firstUrl + '">';
                html += '<p class="box"> ' + responseData[i].productName + '</p>';
                html += '<del>￥' + responseData[i].price + '</del> ';

                if (responseData[i].productDetail.spec1[0].colPrice == responseData[i].productDetail.spec1[spec1lent].colPrice) {
                    html += '<span>￥' + responseData[i].productDetail.spec1[0].colPrice + '</span>';
                } else {
                    html += '<span>￥' + responseData[i].productDetail.spec1[0].colPrice + '~' + responseData[i].productDetail.spec1[spec1lent].colPrice + '</span> ';
                }


                html += '</a>';
                html += '<div class="item-hover">';
                html += '<img src="img/1_1_1.png" alt="" srcset="">';
                html += '<p>Wechat scanner</p>';
                html += '<p>Easy shopping</p>';
                html += '</div>';
                html += '</div>';
            }
            $(".content-con").html(html)

            //截取字符
            $('.box').each(function (i, item) {
                if ($(item).html().length>20) {
                    var newstr = $(item).html().substr(0, 20);
                    $(item).html(newstr + '...');
                }
            })
        }
    });
}
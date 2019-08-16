$(function(){
    $.ajax({
        url: api.live,
        type: 'POST',
        dataType: 'json',

        data: {
            type: 1  //0中文  1英文
        },

        success: function (res) {

            if (res.code == 200) {

                var banner_img = res.result.banner_img; //banner
                var qrcode_img = res.result.qrcode_img; // 二维码
                var live_href = res.result.live_href;   //点击链接

                $('#banner_img').attr("src",banner_img)

                $('#qrcode_img').attr("src",qrcode_img)
                $('#live_href').attr("href",live_href)
            }

        }
    });
})
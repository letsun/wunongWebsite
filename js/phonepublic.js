$(function () {
    // debugger
    //点击开启侧边栏
    $('.header-img2').on('click', function () {
        $('.sidebar').fadeIn()
    })

    //关闭侧边栏

    $('.sidebar-cona').on('click', function () {
        
        $('.sidebar').fadeOut()
    })




    //关闭侧边栏
    $('.sidebar-conb-header').on('click', function () {
        $('.sidebar').fadeOut()
    })
})
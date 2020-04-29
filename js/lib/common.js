// 关闭有下家悬浮窗
$('.close-fudong').on('click',function () {
    $(this).hide();
    $('.fudong').hide();
});

// 关闭有下家悬浮窗
$('.close-fudong2').on('click',function () {
    $(this).hide();
    $('.fudong').hide();
});


// 头部二级菜单显示隐藏
$('.header-nav-item').on('mouseleave',function () {
    $(this).find('.child-list').slideUp(300);
});

// 头部二级菜单显示隐藏
$('.header-nav-item').on('mouseenter',function () {
    if ($(this).find('.child-list').css('display') == 'none') {
        $(this).find('.child-list').slideDown(300);
    }
});

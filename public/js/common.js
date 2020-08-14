$(document).ready(function () {
    $('#nl_menu_mobile').on('click', function(){
        $("#nl_menu_left_nav").css("display","block");
        $("html").css('overflow', 'hidden');
    });
    $('#nl_btn_close').on('click', function(){
        $("#nl_menu_left_nav").css("display","none");
        $("html").css('overflow', 'auto');
    });
});
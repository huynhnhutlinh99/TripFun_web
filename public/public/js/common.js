$(document).ready(function () {
    //show menu menu in mobile
    $('#nl_menu_mobile').on('click', function(){
        $("#nl_menu_left_nav").show();
        $("html").css('overflow', 'hidden');
    });
    //close menu in mobile
    $('#nl_btn_close').on('click', function(){
        $("#nl_menu_left_nav").animate({
            width: 'toggle',
            background: 'toggle'
        });
        $("html").css('overflow', 'auto');
    });
    //close menu in mobile when click grey background
    $('#nl_menu_left_nav').on('click', function(e){
        var container = $('.nl-ctn-menu');
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $("#nl_menu_left_nav").animate({
                width: 'toggle',
                background: 'toggle'
            });
            $("html").css('overflow', 'auto');
        }
    });
});


// $(".link").click(function() {
//     $(".popup").fadeIn(300);
//   }
  
//   );
//   $('.close').click(function() {
//     $(".popup").fadeOut(300);
//   }
  
//   );
//   $('body').click(function() {
//     if (!$(this.target).is('.popup')) {
//       $(".popup").hide();
//     }
//   }
  
//   );
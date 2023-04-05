



    // dashboard show and hide
    $('#openSidebar').click(function(){
    $('.leftbar').addClass('biger');
    });
    $('#closebtn').click(function(){
        $('.leftbar').removeClass('biger');
    });


    $(document).ready(function(){
     //jquery for toggle sub menus
     $('.sub-btn').click(function(){
       $(this).next('.sub-menu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });

    });


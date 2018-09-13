$(function(){
    //首页切换
    $('.title-mod .nav-tab li').hover(function(){
        var that = $(this);
        var shu = that.index();
        that.addClass('active').siblings('li').removeClass('active');
        that.closest('.title-mod').next('.content').find('.tab-cont').eq(shu).removeClass('dn').siblings('.tab-cont').addClass('dn');
    });
    //右边切换导航
    $('.ta a').hover(function(){
        var that = $(this);
        var shu = that.index();
        that.addClass('current').siblings('a').removeClass('current');
        that.closest('.ta').next('.ca').find('.blog-list').eq(shu).show().siblings('.blog-list').hide();
    });
    //导航栏目隐藏
    $('.error-head .nav-head .more-nav').hover(function(){
                $(".more-nav-box").css("visibility","inherit");
                $(".more-nav-box").css("opacity","1");
            },function(){
                $(".more-nav-box").css("visibility","");
                $(".more-nav-box").css("opacity","");
            
    });
    

})





setTimeout(function () {

    $('.cover_id').each(function(){
        var that = $(this);
        var idd = that.attr('data-src');
        if(!that.attr('src')){
            $.get("/pic.php", { id: idd },
                function(data){
                    that.attr('src',data);
                });
        }
    });

}, 2000);
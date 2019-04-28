$(document).ready(function() {
    setTimeout(function () {
        $(".loading").fadeOut()
    }, 100)
    // $(window).scroll(function(e){
    //     console.log(e.currentTarget.scrollY)
    // })
    function newsAutoRoll () {
        $(".news-info .news-container ul li").eq(0).animate({marginTop: "-50px"}, "1000", function () {
            $(this).css({"margin-top": 0})
            $(this).appendTo($(".news-info .news-container ul"))
        })
    }

    var news_inter = setInterval(newsAutoRoll, 5000)
    $(".news-info .news-container ul li").bind('mouseover', function () {
        clearInterval(news_inter)
    })

    $(".news-info .news-container ul li").bind('mouseout', function () {
        news_inter = setInterval(newsAutoRoll, 5000)
    })
    $(".deplay-navigation").bind('click', function () {
       if($(this).hasClass('expand')) {
           $(this).removeClass('expand')
           $(".nav-wrapper").slideUp('slow')
       } else{
           $(this).addClass('expand')
            $(".nav-wrapper").slideDown('slow')
       }
    })

    $(".header .nav-wrapper li").bind('click', function () {
        console.log($(this).width())
        if ($(this).width() <= 768) {
            if ($(this).find(".pro-menu").length) {
                if($(this).find(".pro-menu").css('display') == 'block') {
                    $(this).find(".pro-menu").slideUp()
                    $(this).find('a>span').removeClass('rotate')
                } else {
                    $(this).find(".pro-menu").slideDown()
                    $(this).find('a>span').addClass('rotate')
                }
            }
        }
    })

    if ($(window).width() > 1200) {
        $(".content .nav-pro").css({"left": ($(window).width() -1200) / 2 + 'px'})
    } else{
        $(".content .nav-pro").css({"left":  '20px'})
    }
    $(".pay-nav li").bind("click", function () {
        $(this).addClass('active')
        $(this).siblings().removeClass("active")
        if ($(this).index()) {
            $(".other-account").siblings().fadeOut()
            $(".other-account").fadeIn()
        } else {
            $(".company-account").siblings().fadeOut()
            $(".company-account").fadeIn()
        }
    })


    $(".nav-pro dt").on('click', function () {
        if ($(this).find('i').hasClass('fa-angle-down')) {
            $(this).siblings('dd').css({"display": 'none'})
            $(this).find('i').removeClass('fa-angle-down')
            $(this).find('i').addClass('fa-angle-up')
        } else {
            $(this).siblings('dd').css({"display": 'block'})
            $(this).find('i').removeClass('fa-angle-up')
            $(this).find('i').addClass('fa-angle-down')
        }
    })

})

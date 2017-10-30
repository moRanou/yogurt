//导航栏线条
$(function(){
    $(".top-r li a").mouseover(function(){
      $(this).children("i").stop().animate({
          width:100,
      },200)
    })
    $(".top-r li a").mouseout(function(){
        $(this).children("i").stop().animate({
            width:0
        },200)
    })
})
//下拉菜单
$(function(){
    $(".top-r .newsss").mouseover(function(){
        $(".newsss .down").stop().slideDown(200);

    })
    $(".top-r .newsss").mouseout(function(){
        $(".newsss .down").stop().slideUp(200);
    })
})
//二维码显示
$(function(){
    $(".icon .show").mouseover(function(){
        //console.log(this)
        $(".icon .ewm").stop().show(500)
    })
    $(".icon .show").mouseout(function(){
        console.log(this)
        $(".icon .ewm").stop().toggle(500)
    })
})
//二维码上面的线条
$(function(){
    $(".icon .show").mouseover(function(){
        $(".icon i").stop().show(500)
    })
    $(".icon .show").mouseout(function(){
        console.log(this)
        $(".icon i").stop().hide(500)
    })
})
//鼠标移上去透明度改变
$(function(){
    $(".icon>a").mouseover(function(){
        $(this).css("opacity",1).siblings().css("opacity",0.5)
    })
    $(".icon>a").mouseout(function(){
        $(".icon>a").css("opacity",0.5)
    })
})
//固定导航栏

    $(function(){
        $(window).scroll(function(){
            if($(document).scrollTop()>10){
                $(".top-nav").css({position:"fixed",left:0,top:0})
            }
        })
    })

//轮播图
function animate (element,target){
    //清除
    clearInterval(element.timer)
    //
    element.timer = setInterval(function(){
        var step = 40;
        var current = element.offsetLeft
        current += current<=target?step:-step;
        element.style.left = current + "px";
        if(Math.abs(target-current)<=step){
            clearInterval(element.timer)
            element.style.left = target + "px"
        }

    },20)
}
//tab栏的切换

//$(function(){
//    //获取所有图片
//    var mains = $(".tab-slide>ul");
//    $(".tab-r-t>a").mouseover(function(){
//        $(this).addClass("cur").siblings().removeClass("cur");
//        var index = $(this).index();
//        mains.eq(index).addClass("tab-block").siblings().removeClass("tab-block");
//    });
//});

//遮罩层和播放按钮显示出来
$(function(){
    $(".huya .th-box").mouseover(function(){
        $(".th-box .zhezhao").css("opacity",1);
        $(".th-box .btncut").css("opacity",1)
    })
    $(".th-box").mouseout(function(){
        $(".th-box .zhezhao").css("opacity",0);
        $(".th-box .btncut").css("opacity",0)
    })
})

$(function(){
    $(".kaka .th-box2").mouseover(function(){
        $(".th-box2 .zhezhao").css("opacity",1);
        $(".th-box2 .btncut").css("opacity",1)
    })
    $(".th-box2").mouseout(function(){
        $(".th-box2 .zhezhao").css("opacity",0);
        $(".th-box2 .btncut").css("opacity",0)
    })
})

$(function(){
    $(".liejiu .th-box3").mouseover(function(){
        $(".th-box3 .zhezhao").css("opacity",1);
        $(".th-box3 .btncut").css("opacity",1)
    })
    $(".th-box3").mouseout(function(){
        $(".th-box3 .zhezhao").css("opacity",0);
        $(".th-box3 .btncut").css("opacity",0)
    })
})
//移上去按钮背景图片改变
    $(function(){
        $(".btnleft").mouseover(function(){
            //console.log(this)
            $(this).css("background-positionX",-73)
        })
        $(".btnleft").mouseout(function(){
            //console.log(this)
            $(this).css("background-positionX",0)
        })
    })
$(function(){
    $(".btnright").mouseover(function(){
        //console.log(this)
        $(this).css("background-positionX",61)
    })
    $(".btnright").mouseout(function(){
        //console.log(this)
        $(this).css("background-positionX",129)
    })
})
//动态的修改所有span的背景图片
$(function(){
    $(".picture span:nth-child(1)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","0px 0px")
    })
    $(".picture span:nth-child(1)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","0px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(2)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-96px 0px")
    })
    $(".picture span:nth-child(2)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-96px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(3)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-192px 0px")
    })
    $(".picture span:nth-child(3)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-192px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(4)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-288px 0px")
    })
    $(".picture span:nth-child(4)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-288px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(5)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-384px 0px")
    })
    $(".picture span:nth-child(5)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-384px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(6)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-480px 0px")
    })
    $(".picture span:nth-child(6)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-480px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(7)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-576px 0px")
    })
    $(".picture span:nth-child(7)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-576px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(8)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-672px 0px")
    })
    $(".picture span:nth-child(8)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-672px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(9)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-768px 0px")
    })
    $(".picture span:nth-child(9)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-768px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(10)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-864px 0px")
    })
    $(".picture span:nth-child(10)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-864px -96px")
    })
})

$(function(){
    $(".picture span:nth-child(11)").on("mouseover",function(){
        //console.log(this)
        $(this).css("background-position","-960px 0px")
    })
    $(".picture span:nth-child(11)").on("mouseout",function(){
        //console.log(this)
        $(this).css("background-position","-960px -96px")
    })
})

//轮播
$(function(){

    $(".picture span").mouseover(function(){
        var index = $(this).index();
            $(".dinosaur img").eq(index).addClass("current").siblings().removeClass("current");
        var dinosaurX = $(".dinosaur").width();
        var dinosaurY = $(".dinosaur").height();

        $(".dinosaur img").each(function(index,element){
            $(element).css({
                left:dinosaurX/2,
                marginLeft:-($(this).outerWidth())/2,
                top:dinosaurY/2,
                marginTop:-($(this).outerHeight())/2
            })
        })

        $(".dinosaur img.current").siblings().each(function(index,element){
            $(element).css({
                left:"",
                marginLeft:"",
                top:"",
                marginTop:""
            })
        })
    })
    //$(".picture span").mouseout(function(){
    //    $(".dinosaur img.current").siblings().each(function(index,element){
    //        $(element).css({
    //            left:"",
    //            marginLeft:"",
    //            top:"",
    //            marginTop:""
    //        })
    //    })
    //})
})


//文字切换

    $(function(){
        $(".picture span").eq(1).on("mouseover",function(){
            $(".character-one").siblings().css({
                left:0,
                top:-100,
                opacity:0
            })
          $(".character-one").css({
              left:170,
              top:293,
              opacity:1
          })
        })
    })

$(function(){
    $(".picture span").eq(2).on("mouseover",function(){
        $(".character-two").siblings().css({
            left:0,
            top:-100,
            opacity:0
        })
            $(".character-two").css({
                left:170,
                top:293,
                opacity:1
            })
    })
})

$(function(){
    $(".picture span").eq(3).on("mouseover",function(){
        $(".character-three").siblings().css({
            left:0,
            top:-100,
            opacity:0
        })
            $(".character-three").css({
                left:170,
                top:293,
                opacity:1
            })
    })
})

$(function(){
    $(".picture span").eq(4).on("mouseover",function(){
        $(".character-four").siblings().css({
            left:0,
            top:-100,
            opacity:0
        })
            $(".character-four").css({
                left:170,
                top:293,
                opacity:1
            })
        })
})


$(function(){
    $(".picture span").eq(5).on("mouseover",function(){
        $(".character-five").siblings().css({
            left:0,
            top:-100,
            opacity:0
        })
            $(".character-five").css({
                left:170,
                top:293,
                opacity:1
            })
        })
})

$(function(){
    $(".picture span").eq(6).on("mouseover",function(){
        $(".character-six").siblings().css({
            left:0,
            top:-100,
            opacity:0

        })
            $(".character-six").css({
                left:170,
                top:293,
                opacity:1
            })
        })
})

$(function(){
    $(".picture span").eq(7).on("mouseover",function(){
        $(".character-seven").siblings().css({
            left:0,
            top:-100,
            opacity:0

        })
            $(".character-seven").css({
                left:170,
                top:293,
                opacity:1
            })
        })
})


$(function(){
    $(".picture span").eq(8).on("mouseover",function(){
        $(".character-eight").siblings().css({
            left:0,
            top:-100,
            opacity:0

        })
            $(".character-eight").css({
                left:170,
                top:293,
                opacity:1
            })
        })
})



$(function(){
    $(".picture span").eq(9).on("mouseover",function(){
        $(".character-nine").siblings().css({
            left:0,
            top:-100,
            opacity:0

        })
            $(".character-nine").css({
                left:170,
                top:293,
                opacity:1
            })
        })
    })





$(function(){
    $(".picture span").eq(0).on("mouseover",function(){
        $(".character").siblings().css({
            left:0,
            top:-100,
            opacity:0
        })
            $(".character").css({
                left:170,
                top:293,
                opacity:1
            })
        })
    })



//$(function(){
//    $(".btnleft").on("click",function(){
//        console.log(this)
//



//
//       for(i=0;i<$(".dinosaur img").length;i++){
//          //console.log( $(".dinosaur img").eq(i).index())
//           var index = $(".dinosaur img").eq(i).index()
//           if(index>0){
//              index=9
//               $(".dinosaur img").eq(i).addClass("current").siblings().removeClass("current");
//           }
//           else{
//               index--;
//               $(".dinosaur img").eq(i).addClass("current").siblings().removeClass("current");
//           }
//
//       }
//    })
//})
//
//移上去按钮背景图片改变
$(function(){
    $(".lastPage span:nth-child(1)").mouseover(function(){
        console.log(this)
        $(this).css("background-positionX",-73)
    })
    $(".lastPage span:nth-child(1)").mouseout(function(){
        //console.log(this)
        $(this).css("background-positionX",0)
    })
})
$(function(){
    $(".lastPage span:nth-child(2)").mouseover(function(){
        //console.log(this)
        $(this).css("background-positionX",60)
    })
    $(".lastPage span:nth-child(2)").mouseout(function(){
        //console.log(this)
        $(this).css("background-positionX",-155)
    })
})
//移上去背景色变

$(function(){
    $(".w .downdown").on("mouseover",function(){
        $(this).css("background-positionY",-110 )
    })
    $(".w .downdown").on("mouseout",function(){
        $(this).css("background-position","0px 0px")
    })
})


$(function() {
    $(".login a:nth-child(1)").on("mouseover", function () {
        $(this).css("background-position", "0px -43px")
    })
    $(".login a:nth-child(1)").on("mouseout",function(){
        $(this).css("background-position","0px 0px")
    })
})
$(function() {
    $(".login a:nth-child(2)").on("mouseover", function () {
        $(this).css("background-position", "-44px -43px")
    })
    $(".login a:nth-child(2)").on("mouseout",function(){
        $(this).css("background-position","-44px 0px")
    })
})
$(function() {
    $(".login a:nth-child(3)").on("mouseenter", function () {
        $(this).css("background-position", "-87px -43px")
    })
    $(".login a:nth-child(3)").on("mouseleave",function(){
        $(this).css("background-position","-87px 0px")
    })
})





////让元素预加载效果
//$(window).scroll(function(){
//    //var ban= $(".banxin-l").offset().top;
//    var st = $(this).scrollTop();
//
//    var flag = true;
//    if(flag){
//        if(st>50) {
//            $(".banxin-l").stop().animate({
//                left:0,
//                opacity: 1
//            }, 500);
//            flag = false
//        }
//    }
//});


//$(window).scroll(function(){
//    //var ban= $(".banxin-l").offset().top;
//    var st = $(this).scrollTop();
//
//    var flag = true;
//    if(flag){
//        if(st>200) {
//            $("banxin-c").stop().animate({
//                top:140,
//                opacity: 1
//            }, 500);
//            flag = false
//        }
//    }
//});
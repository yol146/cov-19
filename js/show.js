

function add() {
    $(".header").addClass("on")
    $(".dire-left").addClass("on")
    $(".dire-item1").addClass("on")

    $(".dire-item5").addClass("on")
}

function remove() {
    $(".header").removeClass("on")
    $(".dire-left").removeClass("on")
    $(".dire-item1").removeClass("on")
    $(".dire-item2").removeClass("on")
    $(".dire-item3").removeClass("on")
    $(".dire-item4").removeClass("on")
    $(".dire-item5").removeClass("on")
}

function add1() {
    $(".header1").addClass("on")
    $(".dire-left1").addClass("on")
    $(".n-text1").addClass("on")
}

function remove1() {
    $(".header1").removeClass("on")
    $(".dire-left1").removeClass("on")
    $(".n-text1").removeClass("on")
}

function add3() {
    $(".header2").addClass("on")
    $(".con-top").addClass("on")
    $(".con-bottom").addClass("on")
}

function remove3() {
    $(".header2").removeClass("on")
    $(".con-top").removeClass("on")
    $(".con-bottom").removeClass("on")

}

function add4() {
    $(".header3").addClass("on")
    $(".con4-item1").addClass("on")
    $(".con4-item2").addClass("on")
    $(".con4-item3").addClass("on")
    $(".con4-item4").addClass("on")
    $(".con3-right img").addClass("on")

}

function remove4() {
    $(".header3").removeClass("on")
    $(".con4-item1").removeClass("on")
    $(".con4-item2").removeClass("on")
    $(".con4-item3").removeClass("on")
    $(".con4-item4").removeClass("on")
    $(".con3-right img").removeClass("on")
}

function add5() {
    $(".header4").addClass("on")
    $(".con4-right img").addClass("on")
    $(".con4-left h1").addClass("on")
    $(".con4-text").addClass("on")
}

function remove5() {
    $(".header4").removeClass("on")
    $(".con4-right img").removeClass("on")
    $(".con4-left h1").removeClass("on")
    $(".con4-text").removeClass("on")
}

function add6() {
    $(".header5").addClass("on")
    $(".showon1").addClass("on")
    $(".showon2").addClass("on")
    $(".showon3").addClass("on")
    $(".show2on1").addClass("on")
    $(".show2on2").addClass("on")
    $(".show2on3").addClass("on")

}

function remove6() {
    $(".header6").removeClass("on")
    $(".showon1").removeClass("on")
    $(".showon2").removeClass("on")
    $(".showon3").removeClass("on")
    $(".show2on1").removeClass("on")
    $(".show2on2").removeClass("on")
    $(".show2on3").removeClass("on")
}

function add7() {
    $(".header8").addClass("on")
    $(".con5-left p").addClass("on")
    $(".con5-right img").addClass("on")


}

function remove7() {
    $(".header8").removeClass("on")
    $(".con5-left p").removeClass("on")
    $(".con5-right img").removeClass("on")


}

function add8() {
    $(".header8").addClass("on")
    $(".con9-left img").addClass("on")
    $(".con9-right h2").addClass("on")
    $(".con9-right .pt1").addClass("on")
    $(".con9-right .pt2").addClass("on")

}

function remove8() {
    $(".header8").removeClass("on")
    $(".con9-left img").removeClass("on")
    $(".con9-right h2").removeClass("on")
    $(".con9-right .pt1").removeClass("on")
    $(".con9-right .pt2").removeClass("on")

}

function add9() {
    $(".header9").addClass("on")
    $(".comm").addClass("on")
}

function remove9() {
    $(".header9").removeClass("on")
    $(".comm").removeClass("on")
}

$(".dire-item1").click(function () {
    $(".content1-wrap").removeClass("active");
    remove()
    $(".content2-wrap").addClass("active");
    add1()
})

$(".dire-item2").click(function () {
    $(".content1-wrap").removeClass("active");
    $(".content3-wrap").addClass("active");
    remove()
    add3()
})
$(".dire-item3").click(function () {
    $(".content1-wrap").removeClass("active");
    $(".content4-wrap").addClass("active");
    remove()
    add4()
})
$(".dire-item4").click(function () {
    $(".content1-wrap").removeClass("active");
    $(".content5-wrap").addClass("active");
    remove()
    add5()
})
$(".dire-item5").click(function () {
    $(".content1-wrap").removeClass("active");
    $(".content10-wrap").addClass("active");
    remove()
    add9()
})

$(".home").click(function () {
    $(".ret").removeClass("active")
    $(".content1-wrap").addClass("active")
    add()
    remove1()
})
$(".next").click(function () {
    $(".content2-wrap").removeClass("active");
    $(".content10-wrap").addClass("active");
    remove1()
    add9()
})


$(".home1").click(function () {
    $(".ret1").removeClass("active")
    $(".content1-wrap").addClass("active")
    remove3()
    add()
})
$(".next1").click(function () {
    $(".content3-wrap").removeClass("active");
    $(".content4-wrap").addClass("active");
    remove3()
    add4()
})

$(".home2").click(function () {
    $(".ret2").removeClass("active")
    $(".content1-wrap").addClass("active")
    remove4()
    add()
})
$(".next2").click(function () {
    $(".content4-wrap").removeClass("active");
    $(".content5-wrap").addClass("active");
    remove4()
    add5()
})
$(".home3").click(function () {
    $(".ret3").removeClass("active")
    $(".content1-wrap").addClass("active")
    remove5()
    remove6()
    remove7()
    remove8()
    add()
})
$(".next3").click(function () {
    $(".content5-wrap").removeClass("active");
    $(".content6-wrap").addClass("active");
    remove5()
    add6()
})
$(".next4").click(function () {
    $(".content6-wrap").removeClass("active");
    $(".content7-wrap").addClass("active");
    remove5()
    add5()
})
$(".next5").click(function () {
    $(".content7-wrap").removeClass("active");
    $(".content8-wrap").addClass("active");
    remove5()
    add7();
})
$(".next6").click(function () {
    $(".content8-wrap").removeClass("active");
    $(".content9-wrap").addClass("active");
    remove7()
    add8();
})
$(".next7").click(function () {
    $(".content9-wrap").removeClass("active");
    $(".content10-wrap").addClass("active");
    remove8()
    add9();
})
$(".title-btn ul li").eq(0).click(function () {
    $(".chinabox").removeClass("dis")
    $(".worldbox ").addClass("dis")
    $(this).addClass("on").siblings().removeClass("on")
})
$(".title-btn ul li").eq(1).click(function () {
    $(".chinabox").addClass("dis")
    $(".worldbox ").removeClass("dis")
    $(this).addClass("on").siblings().removeClass("on")
})

var n = 0;
$(".pa1").click(function () {
    $(".chart").eq(n).removeClass("tag")
    n++;
    if (n >= $(".chart").length - 1) {
        n = $(".chart").length - 1
    }
    $(".chart").eq(n).addClass("tag")
})
$(".pa2").click(function () {
    $(".chart").eq(n).removeClass("tag")
    n--;
    if (n <= 0) {
        n = 0
    }
    $(".chart").eq(n).addClass("tag")
})
$(".pa3").click(function () {
    $(".ret3").removeClass("active")
    $(".content1-wrap").addClass("active")
    remove9()
    add()
})

var n1 = 0;
$(".pagg1").click(function () {
    $(".chart1").eq(n1).removeClass("tag")
    n1++;
    if (n1 >= $(".chart1").length - 1) {
        n1 = $(".chart1").length - 1
    }
    $(".chart1").eq(n1).addClass("tag")
})
$(".pagg2").click(function () {
    $(".chart1").eq(n1).removeClass("tag")
    n1--;
    if (n1 <= 0) {
        n1 = 0
    }
    $(".chart1").eq(n1).addClass("tag")
})
$(".pagg3").click(function () {
    $(".ret3").removeClass("active")
    $(".content1-wrap").addClass("active")
    remove9()
    add()
})
window.onload = function(){
    $(".content1-wrap").addClass("active")
    add()
}
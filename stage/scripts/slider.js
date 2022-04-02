// pure JS
var element = document.getElementById('mySwipe')
var element2 = document.getElementById('mySwipeDesign');
var element3 = document.getElementById('mySwipePersona');
// var element4 = document.getElementById('mySwipeFinalDesign');

prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');
prevBtnDesign = document.getElementById('prevDesign'),
nextBtnDesign = document.getElementById('nextDesign');
prevBtnPersona = document.getElementById('prevPersona'),
nextBtnPersona = document.getElementById('nextPersona');
// prevBtnFinalDesign = document.getElementById('prevFinalDesign'),
// nextBtnFinalDesign = document.getElementById('nextFinalDesign');

window.mySwipe = new Swipe(element, {
    startSlide: 0,
    speed: 0,
    auto: 0,
    draggable: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function (index, element) {},
    transitionEnd: function (index, element) {}
});

prevBtn.onclick = mySwipe.prev;
nextBtn.onclick = mySwipe.next;

window.mySwipeDesign = new Swipe(element2, {
    startSlide: 0,
    speed: 0,
    auto: 0,
    draggable: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function (index, element) {},
    transitionEnd: function (index, element) {}
});

prevBtnDesign.onclick = mySwipeDesign.prev;
nextBtnDesign.onclick = mySwipeDesign.next;

window.mySwipePersona = new Swipe(element3, {
    startSlide: 0,
    speed: 0,
    auto: 0,
    draggable: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function (index, element) {},
    transitionEnd: function (index, element) {}
});

prevBtnPersona.onclick = mySwipePersona.prev;
nextBtnPersona.onclick = mySwipePersona.next;
// prevBtnFinalDesign.onclick = mySwipeFinalDesign.prev;
// nextBtnFinalDesign.onclick = mySwipeFinalDesign.next;
// window.mySwipeFinalDesign = new Swipe(element4, {
//     startSlide: 0,
//     speed: 0,
//     auto: 0,
//     draggable: true,
//     continuous: true,
//     disableScroll: false,
//     stopPropagation: false,
//     ignore: ".scroller",
//     callback: function (index, element) {},
//     transitionEnd: function (index, element) {}
// });

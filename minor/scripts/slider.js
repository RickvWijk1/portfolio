// pure JS
var element = document.getElementById('mySwipe')
var element2 = document.getElementById('mySwipe2')
var element3 = document.getElementById('sprint2storyboards')
var element4 = document.getElementById('sprint3storyboards')
var element5 = document.getElementById('sprint4storyboards')
var element6 = document.getElementById('sprint4storyboards1')
var element7 = document.getElementById('sprint5storyboards')
// var element2 = document.getElementById('mySwipeDesign');
// var element3 = document.getElementById('mySwipePersona');
// var element4 = document.getElementById('mySwipeFinalDesign');

prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');
prevBtnMySwipe2 = document.getElementById('prevBtnMySwipe2'),
nextBtnMySwipe2 = document.getElementById('nextBtnMySwipe2');
prevBtnMysprint2storyboards = document.getElementById('prevBtnMysprint2storyboards'),
nextBtnMysprint2storyboards = document.getElementById('nextBtnMysprint2storyboards');
prevBtnMysprint3storyboards = document.getElementById('prevBtnMysprint3storyboards'),
nextBtnMysprint3storyboards = document.getElementById('nextBtnMysprint3storyboards');
prevBtnMysprint4storyboards = document.getElementById('prevBtnMysprint4storyboards'),
nextBtnMysprint4storyboards = document.getElementById('nextBtnMysprint4storyboards');
prevBtnMysprint4storyboards1 = document.getElementById('prevBtnMysprint4storyboards1'),
nextBtnMysprint4storyboards1 = document.getElementById('nextBtnMysprint4storyboards1');
prevBtnMysprint5storyboards = document.getElementById('prevBtnMysprint5storyboards'),
nextBtnMysprint5storyboards = document.getElementById('nextBtnMysprint5storyboards');
// prevBtnDesign = document.getElementById('prevDesign'),
// nextBtnDesign = document.getElementById('nextDesign');
// prevBtnPersona = document.getElementById('prevPersona'),
// nextBtnPersona = document.getElementById('nextPersona');
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



window.mySwipe2 = new Swipe(element2, {
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

prevBtnMySwipe2.onclick = mySwipe2.prev;
nextBtnMySwipe2.onclick = mySwipe2.next;



window.sprint2storyboards = new Swipe(element3, {
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

prevBtnMysprint2storyboards.onclick = sprint2storyboards.prev;
nextBtnMysprint2storyboards.onclick = sprint2storyboards.next;



window.sprint3storyboards = new Swipe(element4, {
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

prevBtnMysprint3storyboards.onclick = sprint3storyboards.prev;
nextBtnMysprint3storyboards.onclick = sprint3storyboards.next;


window.sprint4storyboards = new Swipe(element5, {
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

prevBtnMysprint4storyboards.onclick = sprint4storyboards.prev;
nextBtnMysprint4storyboards.onclick = sprint4storyboards.next;



window.sprint4storyboards1 = new Swipe(element6, {
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

prevBtnMysprint4storyboards1.onclick = sprint4storyboards1.prev;
nextBtnMysprint4storyboards1.onclick = sprint4storyboards1.next;

window.sprint5storyboards = new Swipe(element7, {
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

prevBtnMysprint5storyboards.onclick = sprint5storyboards.prev;
nextBtnMysprint5storyboards.onclick = sprint5storyboards.next;
// pure JS
var element = document.getElementById('mySwipe')
var element2 = document.getElementById('mySwipe2')
var element3 = document.getElementById('sprint2storyboards')
// var element2 = document.getElementById('mySwipeDesign');
// var element3 = document.getElementById('mySwipePersona');
// var element4 = document.getElementById('mySwipeFinalDesign');

prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');
prevBtnMySwipe2 = document.getElementById('prevBtnMySwipe2'),
nextBtnMySwipe2 = document.getElementById('nextBtnMySwipe2');
prevBtnMysprint2storyboards = document.getElementById('prevBtnMysprint2storyboards'),
nextBtnMysprint2storyboards = document.getElementById('nextBtnMysprint2storyboards');
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
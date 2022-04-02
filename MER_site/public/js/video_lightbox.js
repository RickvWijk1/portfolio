//video popup
let showPopupVideo = document.querySelector('.videoShow');
let popupVideoTrigger = document.querySelector('.videoPopup').addEventListener('click', () => {
    showPopupVideo.style.display ="flex";
})

let iframeVid = document.querySelector('.heroFrame');
showPopupVideo.addEventListener('click', ()=>{
    showPopupVideo.style.display ="none";
    iframeVid.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
})

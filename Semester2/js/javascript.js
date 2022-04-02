//typo
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//logo
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";  
  }
  for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}

const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {
  attribution
});

tiles.addTo(mymap);

// marker + icon maken
const issIcon = L.icon({
  iconUrl: '/img/iss.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], {
  icon: issIcon
}).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {
    latitude,
    longitude
  } = data;

  //L.marker([latitude, longitude]).addTo(mymap);
  marker.setLatLng([latitude, longitude]);
  if (firstTime) {
    mymap.setView([latitude, longitude], 3);
    firstTime = false;
  }


  document.getElementById('lat').textContent = latitude.toFixed(2);
  document.getElementById('lon').textContent = longitude.toFixed(2);

}
getISS();
setInterval(getISS, 3000);

//Nav
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
}) //zorgt ervoor dat de navigatie altijd beschikbaar is voor de gebruiker op elke positie van de webpagina


//ModalSCO
const modalSCO = document.querySelector('#my-modal-SCO');
const modalBtnSCO = document.querySelector('#modal-btn-SCO');
const closeBtnSCO = document.querySelector('.closeSCO');

// Events
modalBtnSCO.addEventListener('click', function () {
  OpenModal(modalSCO);
});
closeBtnSCO.addEventListener('click', function () {
  CloseModal(modalSCO);
});
window.addEventListener('click', outsideClickSCO);
window.addEventListener('keydown', outsideClickSCO);

// Open
function openModalSCO() {
  modalSCO.style.display = 'block';
}

// Close
function closeModalSCO() {
  modalSCO.style.display = 'none';
}

// Close If Outside Click
function outsideClickSCO(e) {
  if (e.keyCode == 27) {
    closeModalSCO();
  }
}

//ModalUEX
const modalUEX = document.querySelector('#my-modal-UEX');
const modalBtnUEX = document.querySelector('#modal-btn-UEX');
const closeBtnUEX = document.querySelector('.closeUEX');

// Events
modalBtnUEX.addEventListener('click', function () {
  OpenModal(modalUEX);
});
closeBtnUEX.addEventListener('click', function () {
  CloseModal(modalUEX);
});
window.addEventListener('click', outsideClickUEX);
window.addEventListener('keydown', outsideClickUEX);



// Open
function openModalUEX() {
  modalUEX.style.display = 'block';
}

// Close
function closeModalUEX() {
  modalUEX.style.display = 'none';
}


// Close If Outside Click OR Escape key gets pressed
function outsideClickUEX(e) {
  if (e.keyCode == 27) {
    closeModalUEX();
  }
}

//ModalDEV
const modalDEV = document.querySelector('#my-modal-DEV');
const modalBtnDEV = document.querySelector('#modal-btn-DEV');
const closeBtnDEV = document.querySelector('.closeDEV');

// Events
modalBtnDEV.addEventListener('click', function () {
  OpenModal(modalDEV);
});
closeBtnDEV.addEventListener('click', function () {
  CloseModal(modalDEV);
});
window.addEventListener('click', outsideClickDEV);
window.addEventListener('keydown', outsideClickDEV);


function openModalDEV() {
  modalDEV.style.display = 'block';
}


function closeModalDEV() {
  modalDEV.style.display = 'none';
}

function closeDEV() {
  modalDEV.style.display = 'none';
}

function outsideClickDEV(e) {
  if (e.keyCode == 27) {
    closeModalDEV();
  }
}


const modalPTM = document.querySelector('#my-modal-PTM');
const modalBtnPTM = document.querySelector('#modal-btn-PTM');
const closeBtnPTM = document.querySelector('.closePTM');


modalBtnPTM.addEventListener('click', function () {
  OpenModal(modalPTM);
});
closeBtnPTM.addEventListener('click', function () {
  CloseModal(modalPTM);
});
window.addEventListener('click', outsideClickPTM);
window.addEventListener('keydown', outsideClickPTM);


function OpenModal(element) {
  element.style.display = 'block';
  document.body.style.overflowY = "hidden";
}

function CloseModal(element) {
  element.style.display = 'none';
  document.body.style.overflowY = "auto";
}


function outsideClickPTM(e) {
  if (e.keyCode == 27) {
    CloseModal(modalPTM);
  }
}
const modalSW = document.querySelector('#my-modal-SW');
const modalBtnSW = document.querySelector('#modal-btn-SW');
const closeBtnSW = document.querySelector('.closeSW');


modalBtnSW.addEventListener('click', function () {
  OpenModal(modalSW);
});
closeBtnSW.addEventListener('click', function () {
  CloseModal(modalSW);
});
window.addEventListener('click', outsideClickSW);
window.addEventListener('keydown', outsideClickSW);


function OpenModal(element) {
  element.style.display = 'block';
  document.body.style.overflowY = "hidden";
}

function CloseModal(element) {
  element.style.display = 'none';
  document.body.style.overflowY = "auto";
}


function outsideClickSW(e) {
  if (e.keyCode == 27) {
    CloseModal(modalSW);
  }
}



// function overflow_control(e) {
//   overflowHidden();
//   var modalCloser = document.getElementsByTagName("closeSCO");
//   modalCloser.onclick= function(){
//     body.style.overflow="visible";
//   }
window.addEventListener('keydown', overflow_control);
if (e.keyCode == 27) {
  document.body.style.overflow = "visible";
}


// }
// window.addEventListener('click', overflow_control);

// function overflowHidden() {
//   document.body.style.overflow = "hidden";
// }

// window.addEventListener('scroll', Overflow_On_Close);
// function Overflow_On_Close(){
//   document.body.style.overflow = "visible";
// }
// window.addEventListener('click', overflowOn);

// function overflowOn() {
//   document.body.style.overflow = "scroll";
// }


//SCO-Navigation
// Selection of HTML objects




//DEV ISS API


// map + tiles maken
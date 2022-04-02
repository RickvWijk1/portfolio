function settingUpEvents(){
    // Nav
    // Zorgt ervoor dat de navigatie altijd beschikbaar is voor de gebruiker op elke positie van de webpagina
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
          $('nav').addClass('black');
        } else {
          $('nav').removeClass('black');
        }
      }); 
      
      window.onscroll = function() {progressBar()};
    
    //Progress bar
    function progressBar() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
    
    //Logo change on scroll
    const logoElem = document.querySelector('#imageID1');
    const normalLogo = document.querySelector('#normalLogo')
    const whiteLogo = document.querySelector('#whiteLogo')
    const scrollAmount = 0;
    window.addEventListener('scroll', (event) =>{
      const {top} = logoElem.getBoundingClientRect();
        const logoInView = top - window.innerHeight < scrollAmount;
        normalLogo.style.opacity = +!logoInView;
        whiteLogo.style.opacity = +logoInView;
      });
    
  
      $(function() {
        $('a[href*=#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
      });
    
    //ModalNav
    const modalNav = document.querySelector('#my-modal-nav');
    const modalBtnNav = document.querySelector('#modal-btn-nav');
    const closeBtnNav = document.querySelector('#closeNav');
    
    // //ModalContent
    // const modalContent = document.querySelector('.modal');
    // const modalBtnContent = document.querySelector('.hover-box');
    // const closeBtnContent = document.querySelector('#closeContent');

    // NavEvents
      
    modalBtnNav.addEventListener('click', function () {
      openModal(modalNav);
      });
      closeBtnNav.addEventListener('click', function () {
        closeModal(modalNav);
      }); 

      window.addEventListener('click', outsideClick);
      window.addEventListener('keydown', outsideClick);
      
      // Open
      function openModal() {
        modalNav.style.display = 'block';
      }
      
      // Close
      function closeModal() {
        modalNav.style.display = 'none';
      }
    
      function outsideClick(e) {
        if (e.keyCode == 27) {
          closeModal(modalNav);
        }
      }
      
      function openModal(element) {
        element.style.display = 'block';
        document.body.style.overflowY = "hidden";
      }
      
      function closeModal(element) {
        element.style.display = 'none';
        document.body.style.overflowY = "auto";
      }


    //Smooth scrolling
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    
    //Navigation toggling



//Makes nav responsive by toggling
function toggleNav(){
  let menu = document.querySelector(".mainMenu");
  menu.classList.toggle("toggledNav");
}
    }
          window.onload = function(){
            settingUpEvents();
          };
// function settingUpEvents() {

//   //dropdown in menu
//   $(document).ready(function () {
//     $(".nav-braces, .fa-angle-right").click(function () {
//       $(".dropdown-content").slideToggle("fast");
//     });
//   });

//   //close dropdown when going to different page
//   $(".home-link, .about-link, .projects-link, .interests-link").click(function () {
//     $(".dropdown-content").slideUp("fast");
//   });

//   //dropdown in menu without braces
//   $(document).ready(function () {
//     $(".nav-braces, .fa-angle-right").click(function () {
//       $(".last-brace, .nav-braces").toggle();
//       // $(".fa").toggle().css('transform', 'rotate(90deg)');
//     });
//   });

//   //rotating dropdown icon 90 degrees
//   $(document).ready(function () {
//     $(".nav-braces, .fa-angle-right").click(function () {
//       $(".fa-angle-right").toggleClass('active')
//     });
//   });
// }



  function showTab(page) {
    //elk element met de klasse 'tab' wordt onzichtbaar gemaakt.
    [].forEach.call(document.querySelectorAll('.tab'), tab => tab.style.display = 'none');
    document.querySelector(`#${page}`).style.display = 'initial';
    [].forEach.call(document.querySelectorAll('.nav ul li a'), a => {
      a.parentNode.className = ''
    })
    document.querySelector(`a[href='${page}']`).parentNode.className = 'active-page'
  }

  document.addEventListener('DOMContentLoaded', () => {
    [].forEach.call(document.querySelectorAll('.nav a'), a => {
      a.addEventListener('click', e => {
        e.preventDefault()
        let page = a.attributes['href'].value
        showTab(page)
        history.pushState({
          page: page
        }, page.toUpperCase(), page)
      })
    })

    showTab('home')
  })

  window.addEventListener('popstate', e => {
    if (e.state.page) showTab(e.state.page)
  });

  



  

// function loadAbout() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("load-about-page").innerHTML =
//         this.responseText;
//       }
//     };
//     xhttp.open("GET", "about.html", true);
//     xhttp.send();
//   }

//   function loadIndex() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("load-index-page").innerHTML =
//         this.responseText;
//       }
//     };
//     xhttp.open("GET", "index.html", true);
//     xhttp.send();
//   }\

//navigate between tabs
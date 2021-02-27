let logoContent = document.querySelector('.dropdown-content');
let logoBraces = document.querySelector('.nav-braces');
let logoLastBrace = document.querySelector('.last-brace');
let logoChevron = document.querySelector('#fa_drop');

//creating an array and adding a click 'EventListener' to each element in the array
let logoToggleLocal = [document.querySelector('.nav-braces'), document.querySelector('.fa-angle-right')].forEach(item => {
    item.addEventListener('click', e => {

        //condition to toggle visibility of the 'LogoContent' variable (which is linked to the 'dropdown-content' element)
        if (logoContent.style.display === "none") {
            logoContent.style.display = "block";
        } else {
            logoContent.style.display = "none";
        }

        //condition to toggle visibility of the 'logoBraces' variable (which is linked to the 'nav-braces' element)
        if (logoBraces.style.display === "none") {
            logoBraces.style.display = "unset";
        } else {
            logoBraces.style.display = "none";
        }

        //condition to toggle visibility of the 'logoLastBrace' variable (which is linked to the 'last-brace' element)
        if (logoLastBrace.style.display === "none") {
            logoLastBrace.style.display = "unset";

        } else {
            logoLastBrace.style.display = "none";
        }

        //toggle the chevron icon id to rotate it (element located in the nav)
        logoChevron.classList.toggle('active');
    })
});

//hiding the necessary logo dropdown content when clicking on a different page
let logoToggle = [document.querySelector('.home-link'), document.querySelector('.about-link'), document.querySelector('.projects-link'), document.querySelector('.interests-link')].forEach(item => {
    item.addEventListener('click', e => {
        if (logoContent.style.display === "block") {
            logoChevron.classList.toggle('active');
            logoBraces.style.display = "unset";
            logoLastBrace.style.display = "unset";
            logoContent.style.display = "none";
        }
    })
});
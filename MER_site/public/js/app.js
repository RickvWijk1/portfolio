//responsive menu
let getHamburger = document.querySelectorAll('#toggle-bar');
getHamburger.forEach((toggleMenu) => {
    toggleMenu.onclick = () => {
        let getMenu = document.querySelector("navMobile");
        getMenu.classList.toggle("hamburger");
    };
});

//toggle visitor cards
let rotateChevronVisitors = document.querySelectorAll('#chevronVisitors');
let visitorGrid = document.querySelector('#visitor-items');
let fullWidthGridV = document.querySelector('#research-visitors');
let pHiddenV = document.querySelector('#p-visitors');


rotateChevronVisitors.forEach(chevron => {
    chevron.addEventListener('click', () => {
        chevron.classList.toggle('visitors');
        visitorGrid.classList.toggle('visitor-grid');
        fullWidthGridV.classList.toggle('v-gridFullWidth');
        pHiddenV.classList.toggle('p-hiddenV');
    });
});

//toggle research cards
let rotateChevronResearchers = document.querySelectorAll('#chevronResearchers');
let researchGrid = document.querySelector('#research-items');
let fullWidthGridR = document.querySelector('#research-researchers');
let pHiddenR = document.querySelector('#p-researchers');

rotateChevronResearchers.forEach(chevron => {
    chevron.addEventListener('click', () => {
        chevron.classList.toggle('researchers');
        researchGrid.classList.toggle('research-grid');
        fullWidthGridR.classList.toggle('r-gridFullWidth');
        pHiddenR.classList.toggle('p-hiddenR');
    });
});



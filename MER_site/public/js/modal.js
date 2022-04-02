//element that triggers the modal to open
let openModal = document.querySelectorAll('.modal-popup');

//each modal opens the moment the trigger element gets clicked.
openModal.forEach((trigger) => {
    trigger.onclick = () => {
        //gets the 'data-modal' attribute so that every modal can be identified uniquely
        let modal = trigger.getAttribute('data-modal');

        //the modal becomes visible
        document.getElementById(modal).style.display = "flex";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        // window.location.hash = 'something';
    };
});

//element that triggers the modal to close
let closeModal = document.querySelectorAll('#modal-close');

//each modal closes the moment one of the trigger elements gets clicked
closeModal.forEach((trigger) => {
    trigger.onclick = () => {

        //the modal becomes invisible
        modal = trigger.closest('.modal').style.display = "none";
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
    };
});

// window.onload=

window.onload = (event) => {
    if(location.hash==='#firstItemV'){
        visitorGrid.classList.toggle('visitor-grid');
        document.getElementById('firstItemV').style.display = "flex";
    }
};

//modal closes when user clicks outside modal body
// window.onclick = (e) => {
//     if (e.target.className == 'modal') {
//         e.target.style.display = "none";
//         // document.getElementsByTagName("HTML")[0].style.overflowY="auto";
//     }
// };



// close modal on 'ESC' key press
window.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        

        //Research visitors
        document.querySelector('#firstItemV').style.display = "none";
        document.querySelector('#firstItemR').style.display = "none";

        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
        // document.querySelectorAll('.modal').style.display = "none";
    }
});



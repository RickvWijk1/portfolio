//element that triggers the modal to open
let openModal = document.querySelectorAll('#overview-grid');
// document.getElementsByTagName("BODY").style.overflowY = "auto";
//each modal opens the moment the trigger elemnent gets clicked.
openModal.forEach((trigger) => {
    trigger.onclick = () => {
        //gets the 'data-modal' attribute so that every modal can be identified uniquely
        let modal = trigger.getAttribute('data-modal');

        //the modal becomes visible
        document.getElementById(modal).style.visibility = "visible";
        document.getElementById(modal).style.overflowY = "auto";

        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
    };
    
});

//element that triggers the modal to close
let closeModal = document.querySelectorAll('#modal-close, #btnModalClose');

//each modal closes the moment one of the trigger elements gets clicked
closeModal.forEach((trigger) => {
    trigger.onclick = () => {

        //the modal becomes invisible
        modal = trigger.closest('.modal').style.visibility = "hidden";
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
    };
});

//modal closes when user clicks outside modal body
window.onclick = (e) => {
    if (e.target.className === 'modal') {
        e.target.style.visibility = "hidden";
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
    }
};

// close modal on 'ESC' key press
window.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
    }
});

//routing
window.onload = (event) => {
};
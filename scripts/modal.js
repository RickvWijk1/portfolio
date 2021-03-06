//element that triggers the modal to open
let openModal = document.querySelectorAll('.overview-grid');

//each modal opens the moment the trigger elemnent gets clicked.
openModal.forEach((trigger) => {
    trigger.onclick = () => {
        //gets the 'data-modal' attribute so that every modal can be identified uniquely
        let modal = trigger.getAttribute('data-modal');

        //the modal becomes visible
        document.getElementById(modal).style.display = "block";
    };
});

//element that triggers the modal to close
let closeModal = document.querySelectorAll('.modal-close, .btnModalClose');

//each modal closes the moment one of the trigger elements gets clicked
closeModal.forEach((trigger) => {
    trigger.onclick = () => {

        //the modal becomes invisible
        modal = trigger.closest('.modal').style.display = "none";
    };
});

//modal closes when user clicks outside modal body
window.onclick = (e) => {
    if (e.target.className === 'modal') {
        e.target.style.display = "none";
    }
};



// close modal on 'ESC' key press
window.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        //Projects page
        document.querySelector('#quaquiz').style.display = "none";
        document.querySelector('#mft').style.display = "none";
        document.querySelector('#solidsight').style.display = "none";

        //Interests page
        document.querySelector('#hp').style.display = "none";
        document.querySelector('#p5login').style.display = "none";

        // document.querySelectorAll('.modal').style.display = "none";
    }
});
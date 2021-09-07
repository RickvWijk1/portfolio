//element that triggers the modal to open
let openModal = document.querySelectorAll('#overview-grid, #stage_assignment');
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

        //necessary to show a different slide for each modal
        if(document.querySelector('#assignorient').style.visibility == "visible"){
            document.querySelector('#mySwipe').style.display="block";
            document.querySelector('#mySwipe').style.visibility="visible";
        }
        //necessary to show a different slide for each modal
        if(document.querySelector('#intview_design').style.visibility == "visible"){
            document.querySelector('#mySwipeDesign').style.display="block";
            document.querySelector('#mySwipeDesign').style.visibility="visible";
        }
        if(document.querySelector('#intview_design').style.visibility == "visible"){
            document.querySelector('#mySwipePersona').style.display="block";
            document.querySelector('#mySwipePersona').style.visibility="visible";
        }
    };
    
});

//element that triggers the modal to close
let closeModal = document.querySelectorAll('#modal-close, #btnModalClose');

//each modal closes the moment one of the trigger elements gets clicked
closeModal.forEach((trigger) => {
    trigger.onclick = () => {

        //the modal becomes invisible
        modal = trigger.closest('.modal').style.visibility = "hidden";
        document.getElementById('mySwipe').style.visibility = "hidden";
        document.getElementById('mySwipe').style.display = "none";
        document.getElementById('mySwipeDesign').style.visibility = "hidden";
        document.getElementById('mySwipeDesign').style.display = "none";
        document.getElementById('mySwipePersona').style.visibility = "hidden";
        document.getElementById('mySwipePersona').style.display = "none";
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
    };
});

//modal closes when user clicks outside modal body
window.onclick = (e) => {
    if (e.target.className === 'modal') {
        e.target.style.visibility = "hidden";
        document.getElementById('mySwipe').style.visibility = "hidden";
        document.getElementById('mySwipe').style.display = "none";
        document.getElementById('mySwipeDesign').style.visibility = "hidden";
        document.getElementById('mySwipeDesign').style.display = "none";
        document.getElementById('mySwipePersona').style.visibility = "hidden";
        document.getElementById('mySwipePersona').style.display = "none";
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
    }
};



// close modal on 'ESC' key press
window.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        //Stage page
        document.querySelector('#internintro').style.visibility = "hidden";
        document.querySelector('#assignorient').style.visibility = "hidden";
        document.querySelector('#intview_design').style.visibility = "hidden";
        document.querySelector('#design_testing').style.visibility = "hidden";
        document.querySelector('#realisation').style.visibility = "hidden";
        document.querySelector('#mySwipe').style.visibility = "hidden";
        document.querySelector('#mySwipeDesign').style.visibility = "hidden";
        document.querySelector('#mySwipePersona').style.visibility = "hidden";

        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
        // document.querySelectorAll('.modal').style.display = "none";
    }
});

//routing
window.onload = (event) => {
    if(location.hash==='#modal-intro'){
        document.getElementById('internintro').style.display = "block";
        document.getElementById('internintro').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('internintro').style.overflowY = "auto";
    }
    else if(location.hash==='#modal-assign'){
        document.getElementById('assignorient').style.display = "block";
        document.getElementById('assignorient').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('assignorient').style.overflowY = "auto";
    }
    else if(location.hash==='#modal-inter'){
        document.getElementById('intview_design').style.display = "block";
        document.getElementById('intview_design').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('intview_design').style.overflowY = "auto";
    }
    else if(location.hash==='#modal-design'){
        document.getElementById('design_testing').style.display = "block";
        document.getElementById('design_testing').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('design_testing').style.overflowY = "auto";
    }
    else if(location.hash==='#modal-reali'){
        document.getElementById('realisation').style.display = "block";
        document.getElementById('realisation').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('realisation').style.overflowY = "auto";
    }
};
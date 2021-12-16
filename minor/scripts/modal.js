//element that triggers the modal to open
let openModal = document.querySelectorAll('.overview-grid, .stage_assignment');
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
let closeModal = document.querySelectorAll('.close-modal');

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
    if(location.hash==='#row1-modal1'){
        document.getElementById('sprint0').style.display = "block";
        document.getElementById('sprint0').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('sprint0').style.overflowY = "auto";
    }
    if(location.hash==='#row1-modal2'){
        document.getElementById('sprint1').style.display = "block";
        document.getElementById('sprint1').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('sprint1').style.overflowY = "auto";
    }
    if(location.hash==='#row1-modal3'){
        document.getElementById('sprint2').style.display = "block";
        document.getElementById('sprint2').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('sprint2').style.overflowY = "auto";
    }
    if(location.hash==='#row1-modal4'){
        document.getElementById('sprint3').style.display = "block";
        document.getElementById('sprint3').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('sprint3').style.overflowY = "auto";
    }
    if(location.hash==='#row1-modal5'){
        document.getElementById('sprint4').style.display = "block";
        document.getElementById('sprint4').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('sprint4').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal1'){
        document.getElementById('hybr_tech_research').style.display = "block";
        document.getElementById('hybr_tech_research').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_tech_research').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal2'){
        document.getElementById('flutter_hw_pubdev').style.display = "block";
        document.getElementById('flutter_hw_pubdev').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('flutter_hw_pubdev').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal3'){
        document.getElementById('reactnative_hw').style.display = "block";
        document.getElementById('reactnative_hw').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('reactnative_hw').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal4'){
        document.getElementById('hybr_market_analysis').style.display = "block";
        document.getElementById('hybr_market_analysis').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_market_analysis').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal5'){
        document.getElementById('hybr_concept').style.display = "block";
        document.getElementById('hybr_concept').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_concept').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal6'){
        document.getElementById('hybr_personas').style.display = "block";
        document.getElementById('hybr_personas').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_personas').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal7'){
        document.getElementById('hybr_designs').style.display = "block";
        document.getElementById('hybr_designs').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_designs').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal8'){
        document.getElementById('hybr_development').style.display = "block";
        document.getElementById('hybr_development').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_development').style.overflowY = "auto";
    }
    if(location.hash==='#row2-modal9'){
        document.getElementById('hybr_designdocu').style.display = "block";
        document.getElementById('hybr_designdocu').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('hybr_designdocu').style.overflowY = "auto";
    }
    if(location.hash==='#row3-modal1'){
        document.getElementById('andr_concepting').style.display = "block";
        document.getElementById('andr_concepting').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('andr_concepting').style.overflowY = "auto";
    }

    if(location.hash==='#row3-modal2'){
        document.getElementById('andr_techresearch').style.display = "block";
        document.getElementById('andr_techresearch').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('andr_techresearch').style.overflowY = "auto";
    }
    if(location.hash==='#row3-modal3'){
        document.getElementById('andr_xml').style.display = "block";
        document.getElementById('andr_xml').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('andr_xml').style.overflowY = "auto";
    }
    if(location.hash==='#row3-modal4'){
        document.getElementById('andr_kotlin').style.display = "block";
        document.getElementById('andr_kotlin').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('andr_kotlin').style.overflowY = "auto";
    }
    if(location.hash==='#row3-modal5'){
        document.getElementById('andr_endproduct').style.display = "block";
        document.getElementById('andr_endproduct').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('andr_endproduct').style.overflowY = "auto";
    }
};
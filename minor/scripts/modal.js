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

        //necessary to show a different slide for each modal
        if(document.querySelector('#sprint1').style.visibility == "visible"){
            document.querySelector('#mySwipe').style.display="block";
            document.querySelector('#mySwipe').style.visibility="visible";
            document.querySelector('#mySwipe2').style.display="block";
            document.querySelector('#mySwipe2').style.visibility="visible";
        }
        if(document.querySelector('#sprint2').style.visibility == "visible"){
            document.querySelector('#sprint2storyboards').style.display="block";
            document.querySelector('#sprint2storyboards').style.visibility="visible";
        }
        if(document.querySelector('#sprint3').style.visibility == "visible"){
            document.querySelector('#sprint3storyboards').style.display="block";
            document.querySelector('#sprint3storyboards').style.visibility="visible";
        }
        if(document.querySelector('#sprint4').style.visibility == "visible"){
            document.querySelector('#sprint4storyboards').style.display="block";
            document.querySelector('#sprint4storyboards').style.visibility="visible";
            document.querySelector('#sprint4storyboards1').style.display="block";
            document.querySelector('#sprint4storyboards1').style.visibility="visible";
        }
        if(document.querySelector('#sprint5').style.visibility == "visible"){
            document.querySelector('#sprint5storyboards').style.display="block";
            document.querySelector('#sprint5storyboards').style.visibility="visible";
        }
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
        document.getElementById('mySwipe').style.visibility = "hidden";
        document.getElementById('mySwipe').style.display = "none";
        document.getElementById('mySwipe2').style.visibility = "hidden";
        document.getElementById('mySwipe2').style.display = "none";
        document.getElementById('sprint2storyboards').style.visibility = "hidden";
        document.getElementById('sprint2storyboards').style.display = "none";
        document.getElementById('sprint3storyboards').style.visibility = "hidden";
        document.getElementById('sprint3storyboards').style.display = "none";
        document.getElementById('sprint4storyboards').style.visibility = "hidden";
        document.getElementById('sprint4storyboards').style.display = "none";
        document.getElementById('sprint4storyboards1').style.visibility = "hidden";
        document.getElementById('sprint4storyboards1').style.display = "none";
        document.getElementById('sprint5storyboards').style.visibility = "hidden";
        document.getElementById('sprint5storyboards').style.display = "none";
    };
});

//modal closes when user clicks outside modal body
window.onclick = (e) => {
    if (e.target.className === 'modal') {
        e.target.style.visibility = "hidden";
        document.getElementsByTagName("HTML")[0].style.overflowY="auto";
        document.getElementById('mySwipe').style.visibility = "hidden";
        document.getElementById('mySwipe').style.display = "none";
        document.getElementById('mySwipe2').style.visibility = "hidden";
        document.getElementById('mySwipe2').style.display = "none";
        document.getElementById('sprint2storyboards').style.visibility = "hidden";
        document.getElementById('sprint2storyboards').style.display = "none";
        document.getElementById('sprint3storyboards').style.visibility = "hidden";
        document.getElementById('sprint3storyboards').style.display = "none";
        document.getElementById('sprint4storyboards').style.visibility = "hidden";
        document.getElementById('sprint4storyboards').style.display = "none";
        document.getElementById('sprint4storyboards1').style.visibility = "hidden";
        document.getElementById('sprint4storyboards1').style.display = "none";
        document.getElementById('sprint5storyboards').style.visibility = "hidden";
        document.getElementById('sprint5storyboards').style.display = "none";
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
    if(location.hash==='#row1-modal6'){
        document.getElementById('sprint5').style.display = "block";
        document.getElementById('sprint5').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('sprint5').style.overflowY = "auto";
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
    if(location.hash==='#row4-modal1'){
        document.getElementById('ios_concept').style.display = "block";
        document.getElementById('ios_concept').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('ios_concept').style.overflowY = "auto";
    }
    if(location.hash==='#row4-modal2'){
        document.getElementById('ios_workshops').style.display = "block";
        document.getElementById('ios_workshops').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('ios_workshops').style.overflowY = "auto";
    }
    if(location.hash==='#row4-modal3'){
        document.getElementById('ios_design').style.display = "block";
        document.getElementById('ios_design').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('ios_design').style.overflowY = "auto";
    }
    if(location.hash==='#row4-modal4'){
        document.getElementById('ios_modelling').style.display = "block";
        document.getElementById('ios_modelling').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('ios_modelling').style.overflowY = "auto";
    }
    if(location.hash==='#row4-modal5'){
        document.getElementById('ios_pocs').style.display = "block";
        document.getElementById('ios_pocs').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('ios_pocs').style.overflowY = "auto";
    }
    if(location.hash==='#row5-modal1'){
        document.getElementById('myVision').style.display = "block";
        document.getElementById('myVision').style.visibility = "visible";
        document.getElementsByTagName("HTML")[0].style.overflowY="hidden";
        document.getElementById('myVision').style.overflowY = "auto";
    }
};